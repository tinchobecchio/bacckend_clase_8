const productos = [
    {
        title:"curso Desarrollo Web",
        price:50000,
        thumbnail:"https://coderhouse.com/",
        id:1
    },
    {
        title:"curso Diseño UX",
        price:20000,
        thumbnail:"https://coderhouse.com/",
        id:2
    },
    {
        title:"curso Photoshop",
        price:12000,
        thumbnail:"https://coderhouse.com/",
        id:3
    }]

export const getProductos = () => {
    return productos
}

export const getProducto = (id) => {
    const i = productos.findIndex(prod => prod.id === parseInt(id))
    if(i === -1) {
        return { error : 'producto no encontrado' }
    }
    return productos[i]
}

export const addProducto = (prod) => {
    const prodNuevo = {...prod, id: productos.length + 1}
    productos.push(prodNuevo)
    return prodNuevo
}

export const updateProducto = (id, prodNuevo) => {
    const i = productos.findIndex(prod => prod.id === parseInt(id));
    if (i === -1) {
        return { error : 'producto no encontrado' }
    }
    if (prodNuevo.title){productos[i].title = prodNuevo.title};
    if (prodNuevo.price){productos[i].price = prodNuevo.price};
    if (prodNuevo.thumbnail){productos[i].thumbnail = prodNuevo.thumbnail};
    return `Se actualizaron los datos del producto ${prodNuevo.title}`;

}

export const deleteProducto = (id) => {
    const i = productos.findIndex(prod => prod.id === parseInt(id));
    if (i === -1) {
        return { error : 'producto no encontrado' }
    }
    productos.splice(i, 1);
    return `El producto con id ${id} fue eliminado`
}
