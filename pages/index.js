import Product from "@/components/Product";
import useKiosk from "@/hooks/useKiosk";
import Layout from "@/layout/Layout";

export default function Home() {
    const { currentCategory } = useKiosk()
    return (
        <Layout
            page={`Menú ${currentCategory?.name}`}
        >
            <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
            <p className="text-2x my-10">
                Elige y personaliza tu pedido a continuación
            </p>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {currentCategory?.products?.map(product => (
                    <Product 
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </Layout>
    )
}
