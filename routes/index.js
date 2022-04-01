import { Router } from "express"
import { getProductos, getProducto, addProducto, updateProducto, deleteProducto} from '../controllers/productos.js'
const router = Router()

router.get('/', (req,res) => {
    let productos = getProductos()
    res.send(productos)
})

router.get('/:id', (req,res) => {
    const id = req.params.id
    let producto = getProducto(id)
    res.send(producto)
})

router.post('/', (req,res) => {
    let prodNuevo = addProducto(req.body)
    res.send(`El producto ${prodNuevo.title} fue agregado exitosamente.`)
})

router.put('/:id', (req,res) => {
    const id = req.params.id
    let nuevoProducto = req.body
    let producto = updateProducto(id, nuevoProducto)
    res.send(producto)
})

router.delete('/:id', (req,res) => {
    const id = req.params.id
    let producto = deleteProducto(id)
    res.send(producto)
})

export default router;