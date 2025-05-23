<?php

namespace App\DataTables;

use App\Models\Admins;
use App\Models\Category;
use App\Models\UserCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Env;
use Yajra\DataTables\Services\DataTable;

class CategoriesListDatatable extends DataTable
{
    public function ajax():JsonResponse
    {
        $categories = $this->query();
        return datatables()
            ->of($categories)
            ->addColumn('name', function ($categories) {
                $category = '';
                $category .= '<a href="' . url('categories/edit/' . $categories->id) . '">' . $categories->name . '</a><br>';
                return  $category . '<a href="' . url("categories/edit/" . $categories->id) . '"  target="_blank"></a>';
            })
            ->addColumn('url', function ($categories) {

                $img = '<img src="' . env('APP_URL') . $categories->url . '" alt="icon" width="50" height="50">';

                return $img;
            })
            // ->addColumn('is_free', function ($categories) {
            //     if ($categories->is_free == 1) {
            //         return '<span class="badge badge-success">Free</span>';
            //     } else {
            //         return '<span class="badge badge-danger">Paid</span>';
            //     }
            // })
            // ->addColumn('action', function ($categories) {
            //     $delete = '<form method="POST" action="' . url("categories/delete/" . $categories->id) . '"accept-charset="UTF-8" class="display_inline" id="delete-item-' . $categories->id . '">
            //     ' . csrf_field() . '
            //         <input type="hidden" name="id" value="' . $categories->id . '">
            //         <button title="' . __('Delete') . '" class="btn btn-xs btn-danger" type="button" data-toggle="modal" data-id="' . $categories->id . '" data-target="#confirmDelete" data-label = "Delete" data-title="' . __('Delete item') . '" data-message="' . __('Are you sure to delete this item?') . '">
            //             <i class="feather icon-trash-2"></i> 
            //         </button>
            //     </form>';
            //     return $delete;
            // })
            ->addColumn('free_users', function ($categories) {
                $total_users = UserCategory::join('subscriptions', 'subscriptions.user_id', '=', 'user_category.user_id')
                ->where('subscriptions.plan_id', '1')
                ->where('category_id', $categories->id)->count();
                return $total_users;
            })
            ->addColumn('paid_users', function ($categories) {
                $total_users = UserCategory::join('subscriptions', 'subscriptions.user_id', '=', 'user_category.user_id')
                ->where('subscriptions.plan_id', '!=', '1')
                ->where('category_id', $categories->id)->count();
                return $total_users;
            })
            ->rawColumns(['name','free_users','paid_users','url'])
            ->make(true);
    }


    public function query()
    {
        $categories = Category::join('media', 'media.owner_id', '=', 'categories.id')
            ->select('categories.*', 'media.url')
            ->where('media.type', 'category')
            ->groupBy('media.id')
            ->get();

        return $this->applyScopes($categories);
    }

    public function html()
    {
        return $this->builder()
            ->addColumn(['data' => 'id', 'name' => 'id', "visible" => false])
            // ->addColumn(['data' => 'group_name', 'name' => 'group_name', 'title' => __('Group Name')])
            ->addColumn(['data' => 'name', 'name' => 'name', 'title' => __('Category Name')])
            // ->addColumn(['data' => 'is_free', 'name' => 'is_free', 'title' => __('Available on Subscription Type')])
            // ->addColumn(['data' => 'action', 'name' => 'action', 'title' => __('Action'), 'searchable' => false, 'orderable' => false])
            ->addColumn(['data' => 'free_users', 'name' => 'free_users', 'title' => __('Free Users')])
            ->addColumn(['data' => 'paid_users', 'name' => 'paid_users', 'title' => __('Paid Users')])
            ->addColumn(['data' => 'url', 'name' => 'url', 'title' => __('Icon'), 'searchable' => false, 'orderable' => false])
            ->parameters([
                'pageLength' => $this->row_per_page,
                'order' => [4, 'DESC']
            ]);
    }

    protected function getColumns()
    {
        return [
            'id',
            'created_at',
            'updated_at',
        ];
    }

}
