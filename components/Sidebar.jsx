import useKiosk from '@/hooks/useKiosk'
import Image from 'next/image'
import React from 'react'
import Category from './Category'

const Sidebar = () => {
    const { categories } = useKiosk()

    return (
        <>
            <div className='w-40 mx-auto mt-2'>
                <Image 
                    width={300}
                    height={100}
                    src="/assets/img/logo.svg" 
                    alt='Imagen logo' 
                />
            </div>
            
            <nav className='mt-10'>
                {categories.map(category => <Category key={category.id} category={category}/>)}
            </nav>
        </>
    )
}

export default Sidebar