import { formatMoney } from "@/helpers";
import useKiosk from "@/hooks/useKiosk";
import Layout from "@/layout/Layout";
import { useCallback, useEffect } from "react";

export default function Total() {
    const { order, name, setName, saveOrder, total } = useKiosk()

    const validateOrder = useCallback(() => {
        return order.length === 0 || name === '' || name.length < 3
    }, [order, name])

    useEffect(() => {
        validateOrder()
    }, [order, validateOrder])

    return (
        <Layout page={`Total y Confirmar Pedido`}>
            <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

            <form
                onSubmit={saveOrder}
            >
                <div>
                    <label
                        htmlFor="name"
                        className="block uppercase text-slate-800 font-bold text-xl"
                    >
                        Nombre
                    </label>
                    <input 
                        id="name"
                        type="text"
                        className="bg-gray-100 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mt-10">
                    <p className="text-2xl">
                        Total a pagar: {""} <span className="font-bold">{formatMoney(total)}</span>
                    </p>
                </div>
                <div className="mt-5">
                    <input
                        type="submit"
                        className={`${validateOrder() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                        value={`Confirmar Pedido`}
                        disabled={validateOrder()}
                    />
                </div>
            </form>
        </Layout>
    )    
}