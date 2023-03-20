import { useRouter } from "next/router";

const steps = [
    {id: 1, name: 'Menú', url: '/'},
    {id: 2, name: 'Resumen', url: '/summary'},
    {id: 3, name: 'Datos y Total', url: '/total'},
];

const Steps = () => {
    const router = useRouter()

    const calculateProgress = () => {
        let percentage;
        if (router.pathname === '/') {
            percentage = 5
        } else if (router.pathname === '/summary'){
            percentage = 50
        } else {
            percentage = 100
        }

        return percentage;
    }

    return (
        <>
            <div className="flex justify-between mb-5">
                {steps.map(step => (
                    <button 
                        key={step.id}
                        className="text-2xl font-bold"
                        onClick={() => {
                            router.push(step.url);
                        }}
                    >
                        {step.name}
                    </button>
                ))}
            </div>

            <div className="bg-gray-100 mb-10">
                <div 
                    className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
                    style={{width: `${calculateProgress()}%`}}
                >

                </div>
            </div>
        </>
    )
}

export default Steps