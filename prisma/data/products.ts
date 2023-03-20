const products = [
    {
        name: "Café Caramel con Chocolate",
        cost: 59.9,
        image: "cafe_01",
        category_id: 1
    },
    {
        name: "Café Frio con Chocolate Grande",
        cost: 49.9,
        image: "cafe_02",
        category_id: 1
    },
    {
        name: "Latte Frio con Chocolate Grande",
        cost: 54.9,
        image: "cafe_03",
        category_id: 1
    },
    {
        name: "Latte Frio con Chocolate Grande",
        cost: 54.9,
        image: "cafe_04",
        category_id: 1
    },
    {
        name: "Malteada Fria con Chocolate Grande",
        cost: 54.9,
        image: "cafe_05",
        category_id: 1
    },
    {
        name: "Café Mocha Caliente Chico",
        cost: 39.9,
        image: "cafe_06",
        category_id: 1
    },
    {
        name: "Café Mocha Caliente Grande con Chocolate",
        cost: 59.9,
        image: "cafe_07",
        category_id: 1
    },
    {
        name: "Café Caliente Capuchino Grande",
        cost: 59.9,
        image: "cafe_08",
        category_id: 1
    },
    {
        name: "Café Mocha Caliente Mediano",
        cost: 49.9,
        image: "cafe_09",
        category_id: 1
    },
    {
        name: "Café Mocha Frio con Caramelo Mediano",
        cost: 49.9,
        image: "cafe_10",
        category_id: 1
    },
    {
        name: "Café Mocha Frio con Chocolate Mediano",
        cost: 49.9,
        image: "cafe_11",
        category_id: 1
    },
    {
        name: "Café Espresso",
        cost: 29.9,
        image: "cafe_12",
        category_id: 1
    },
    {
        name: "Café Capuchino Grande con Caramelo",
        cost: 59.9,
        image: "cafe_13",
        category_id: 1
    },
    {
        name: "Café Caramelo Grande",
        cost: 59.9,
        image: "cafe_14",
        category_id: 1
    },
    {
        name: "Paquete de 3 donas de Chocolate",
        cost: 39.9,
        image: "donas_01",
        category_id: 4
    },
    {
        name: "Paquete de 3 donas Glaseadas",
        cost: 39.9,
        image: "donas_02",
        category_id: 4
    },
    {
        name: "Dona de Fresa ",
        cost: 19.9,
        image: "donas_03",
        category_id: 4
    },
    {
        name: "Dona con Galleta de Chocolate ",
        cost: 19.9,
        image: "donas_04",
        category_id: 4
    },
    {
        name: "Dona glass con Chispas Sabor Fresa ",
        cost: 19.9,
        image: "donas_05",
        category_id: 4
    },
    {
        name: "Dona glass con Chocolate ",
        cost: 19.9,
        image: "donas_06",
        category_id: 4
    },
    {
        name: "Dona de Chocolate con MÁS Chocolate ",
        cost: 19.9,
        image: "donas_07",
        category_id: 4
    },
    {
        name: "Paquete de 3 donas de Chocolate ",
        cost: 39.9,
        image: "donas_08",
        category_id: 4
    },
    {
        name: "Paquete de 3 donas con Vainilla y Chocolate ",
        cost: 39.9,
        image: "donas_09",
        category_id: 4
    },
    {
        name: "Paquete de 6 Donas",
        cost: 69.9,
        image: "donas_10",
        category_id: 4
    },
    {
        name: "Paquete de 3 Variadas",
        cost: 39.9,
        image: "donas_11",
        category_id: 4
    },
    {
        name: "Dona Natural con Chocolate",
        cost: 19.9,
        image: "donas_12",
        category_id: 4
    },
    {
        name: "Paquete de 3 Donas de Chocolate con Chispas",
        cost: 39.9,
        image: "donas_13",
        category_id: 4
    },
    {
        name: "Dona Chocolate y Coco",
        cost: 19.9,
        image: "donas_14",
        category_id: 4
    },
    {
        name: "Paquete Galletas de Chocolate",
        cost: 29.9,
        image: "galletas_01",
        category_id: 6
    },
    {
        name: "Paquete Galletas de Chocolate y Avena",
        cost: 39.9,
        image: "galletas_02",
        category_id: 6
    },
    {
        name: "Paquete de Muffins de Vainilla",
        cost: 39.9,
        image: "galletas_03",
        category_id: 6
    },
    {
        name: "Paquete de 4 Galletas de Avena",
        cost: 24.9,
        image: "galletas_04",
        category_id: 6
    },
    {
        name: "Galletas de Mantequilla Variadas",
        cost: 39.9,
        image: "galletas_05",
        category_id: 6
    },
    {
        name: "Galletas de sabores frutales",
        cost: 39.9,
        image: "galletas_06",
        category_id: 6
    },
    {
        name: "Hamburguesa Sencilla",
        cost: 59.9,
        image: "hamburguesas_01",
        category_id: 2
    },
    {
        name: "Hamburguesa de Pollo",
        cost: 59.9,
        image: "hamburguesas_02",
        category_id: 2
    },
    {
        name: "Hamburguesa de Pollo y Chili",
        cost: 59.9,
        image: "hamburguesas_03",
        category_id: 2
    },
    {
        name: "Hamburguesa Queso y  Pepinos",
        cost: 59.9,
        image: "hamburguesas_04",
        category_id: 2
    },
    {
        name: "Hamburguesa Cuarto de Libra",
        cost: 59.9,
        image: "hamburguesas_05",
        category_id: 2
    },
    {
        name: "Hamburguesa Doble Queso",
        cost: 69.9,
        image: "hamburguesas_06",
        category_id: 2
    },
    {
        name: "Hot Dog Especial",
        cost: 49.9,
        image: "hamburguesas_07",
        category_id: 2
    },
    {
        name: "Paquete 2 Hot Dogs",
        cost: 69.9,
        image: "hamburguesas_08",
        category_id: 2
    },
    {
        name: "4 Rebanadas de Pay de Queso",
        cost: 69.9,
        image: "pastel_01",
        category_id: 5
    },
    {
        name: "Waffle Especial",
        cost: 49.9,
        image: "pastel_02",
        category_id: 5
    },
    {
        name: "Croissants De la casa",
        cost: 39.9,
        image: "pastel_03",
        category_id: 5
    },
    {
        name: "Pay de Queso",
        cost: 19.9,
        image: "pastel_04",
        category_id: 5
    },
    {
        name: "Pastel de Chocolate",
        cost: 29.9,
        image: "pastel_05",
        category_id: 5
    },
    {
        name: "Rebanada Pastel de Chocolate",
        cost: 29.9,
        image: "pastel_06",
        category_id: 5
    },
    {
        name: "Pizza Spicy con Doble Queso",
        cost: 69.9,
        image: "pizzas_01",
        category_id: 3
    },
    {
        name: "Pizza Jamón y Queso",
        cost: 69.9,
        image: "pizzas_02",
        category_id: 3
    },
    {
        name: "Pizza Doble Queso",
        cost: 69.9,
        image: "pizzas_03",
        category_id: 3
    },
    {
        name: "Pizza Especial de la Casa",
        cost: 69.9,
        image: "pizzas_04",
        category_id: 3
    },
    {
        name: "Pizza Chorizo",
        cost: 69.9,
        image: "pizzas_05",
        category_id: 3
    },
    {
        name: "Pizza Hawaiana",
        cost: 69.9,
        image: "pizzas_06",
        category_id: 3
    },
    {
        name: "Pizza Tocino",
        cost: 69.9,
        image: "pizzas_07",
        category_id: 3
    },
    {
        name: "Pizza Vegetales y Queso",
        cost: 69.9,
        image: "pizzas_08",
        category_id: 3
    },
    {
        name: "Pizza Pepperoni y Queso",
        cost: 69.9,
        image: "pizzas_09",
        category_id: 3
    },
    {
        name: "Pizza Aceitunas y Queso",
        cost: 69.9,
        image: "pizzas_10",
        category_id: 3
    },
    {
        name: "Pizza Queso, Jamón y Champiñones",
        cost: 69.9,
        image: "pizzas_11",
        category_id: 3
    }
]

export {
    products
}