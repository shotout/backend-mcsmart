<?php
namespace App\DataTables;

use App\Models\Admins;
use Yajra\DataTables\Services\DataTable;
use Illuminate\Http\JsonResponse;

class AdminListDataTable extends DataTable
{
    public function ajax(): JsonResponse
    {
        
        $admins = $this->query();
        return datatables()
            ->of($admins)
            ->addColumn('name', function ($admins) {
                $admin = '';
                $admin .= '<a href="'. url('admin/edit/'. $admins->id) .'">'. $admins->name .'</a><br>';
                return  $admin . '<a href="'. url("admin/adminlogin/". $admins->id) .'"  target="_blank"></a>';

            })
           
            ->rawColumns(['name', 'email'])
            ->make(true);
    }


    public function query() {
        $admin = isset($_GET['admin']) ? $_GET['admin'] : null;
        $admins = Admins::select();
        if (!empty($admin) && $admin == "admin_inactive") {
            $admins->where('is_active', 0);
        } else if (!empty($admin) && $admin == "total") {
            $admins;
        } else {
            $admins->where('is_active', 1);
        }
        return $this->applyScopes($admins);
    }

    public function html() {
        return $this->builder()
        ->addColumn(['data' => 'id', 'name' => 'id', "visible" => false])
        ->addColumn(['data' => 'name', 'name' => 'name', 'title' => __('Name')])
        ->addColumn(['data' => 'email', 'name' => 'email', 'title' => __('Email')])
            ->parameters([
            'pageLength' => $this->row_per_page,            
            'order' => [0, 'DESC']
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

    // protected function filename()
    // {
    //     return 'admins_' . time();
    // }
}
