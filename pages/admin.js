import useSWR from 'swr'
import AdminLayout from "@/layout/AdminLayout";
import axios from 'axios';
import Order from '@/components/admin/Order';

export default function Admin() {

    const fetcher = () => axios('/api/orders').then(resp => resp.data)
    const { data, error, isLoading } = useSWR('/api/orders', fetcher, {refreshInterval: 500})

    return (
        <AdminLayout page={'Administración'}>
            <h1 className="text-4xl font-black">Panel de Administración</h1>
            <p className="text-2xl my-10">Administra los pedidos</p>

            {data && data.length ? data.map(order => 
                <Order 
                    key={order.id}
                    pendingOrder={order}
                />
            ) : <p>No hay pedidos pendientes</p>}
        </AdminLayout>
    )
}