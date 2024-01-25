const productos= [
    {id: 1, nombre: "Producto1", precio: 100, img: "./img/Carrito.png", idCat: "1"},
    {id: 2, nombre: "Producto2", precio: 200, img: "./img/Carrito.png", idCat: "2"},
    {id: 3, nombre: "Producto3", precio: 300, img: "./img/Carrito.png", idCat: "1"},
    {id: 4, nombre: "Producto4", precio: 400, img: "./img/Carrito.png", idCat: "2"},
]

export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout( ()=> {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}