import { formatMoney } from "@/helpers";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Order({pendingOrder}) {
    const { id, name, total, order } = pendingOrder

    const completeOrder = async () => {
        try {
            const { data } = await axios.post(`/api/orders/${id}`)
            if (data.status) {
                toast.success('Pedido completado correctamente!')
            } else {
                toast.warning('No fue posible completar pedido!')
            }
        } catch (error) {
            toast.error('Ocurrio un error completando pedido!')
        }
    }

    return (
        <div className="border p-10 space-y-5">
            <h1 className="text-2xl font-bold">Pedido: {id}</h1>
            <p className="text-lg font-bold">Cliente: {name}</p>

            <div>
                {order.map(product => (
                    <div key={product.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                        <div className="w-32">
                            <Image 
                                width={400}
                                height={500}
                                src={`/assets/img/${product.image}.jpg`}
                                alt={`Imagen producto ${product.name}`}
                            />
                        </div>
                        <div className="p-5 space-y-2">
                            <h4 className="text-xl font-bold text-amber-500">{product.name}</h4>
                            <p className="text-lg font-bold">Cantidad: {product.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 font-black text-4xl text-amber-500">
                    Total a pagar: {formatMoney(total)}
                </p>

                <button
                    className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg"
                    type="button"
                    onClick={completeOrder}
                >
                    Completar Orden
                </button>
            </div>
        </div>
    )
}
