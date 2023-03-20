import axios from 'axios'
import { useRouter } from 'next/router'
import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const KioskContext = createContext()

const KioskProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])
    const router = useRouter()
    const [name, setName] = useState('')
    const [total, setTotal] = useState(0)

    const getCategories = async () => {
        const { data } = await axios('/api/categories')
        setCategories(data)
    }
    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        setCurrentCategory(categories[0])
    }, [categories])

    useEffect(() => {
        const newTotal = order.reduce((total, product) => (product.cost * product.quantity) + total, 0)

        setTotal(parseFloat(newTotal))
    }, [order])

    const handleClickCategory = id => {
        const category = categories.filter(categ => categ.id === id);
        setCurrentCategory(category[0])
        router.push('/')
    }

    const handleSetProduct = product => {
        setProduct(product)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handelAddOrder = ({category_id, ...product}) => {
        if (order.some(productState => productState.id === product.id)) {
            const updatedOrder = order.map(productState => productState.id === product.id ? product : productState)
            setOrder(updatedOrder)
            toast.success("Pedido actualizado correctamente!")
        } else {
            setOrder([...order, product])
            toast.success("Producto agregado al pedido!")
        }

        setModal(false)
    }

    const handleEditQuantities = id => {
        const productToUpdate = order.filter(product => product.id === id)
        setProduct(productToUpdate[0]) 
        setModal(!modal)
    }

    const handleDeleteProduct = id => {
        const orderUpdated = order.filter(product => product.id !== id);
        setOrder(orderUpdated)
    }

    const saveOrder = async (e) => {
        e.preventDefault()
        
        try {
            await axios.post('/api/orders', {order, name, total, date: Date.now().toString()})
            setCurrentCategory(categories[0])
            setOrder([])
            setName('')
            setTotal(0)

            toast.success('Pedido realizado correctamente!')
            setTimeout(() => {
                router.push('/')
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <KioskContext.Provider
            value={{
                categories,
                currentCategory,
                handleClickCategory,
                product,
                handleSetProduct,
                modal,
                handleChangeModal,
                order,
                handelAddOrder,
                handleEditQuantities,
                handleDeleteProduct,
                name,
                setName,
                saveOrder,
                total
            }}
        >
            {children}
        </KioskContext.Provider>
    )
}

export {
    KioskProvider
}
export default KioskContext
