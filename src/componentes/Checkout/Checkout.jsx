import React, { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import Swal from 'sweetalert2';
import './Checkout.css';

const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            Swal.fire({
                icon: "error",
                title: "Complete todos los campos",
                text: "Debe registrar todos los campos para poder finalizar su compra!"
            });
            return;
        }

        if (email !== emailConfirmacion) {
            Swal.fire({
                icon: "error",
                title: "Email Incorrecto",
                text: "Los emails no coinciden, verifique nuevamente los campos."
            });
            return;
        }

        Swal.fire({
            title: "Desea finalizar su compra?",
            text: "Verifique su carrito antes de finalizar su compra.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Finalizar compra",
            cancelButtonText: "Volver al carrito"
        }).then((result) => {
            if (result.isConfirmed) {
                const orden = {
                    items: carrito.map(producto => ({
                        id: producto.item.id,
                        nombre: producto.item.nombre,
                        cantidad: producto.cantidad
                    })),
                    total: total,
                    fecha: new Date(),
                    nombre,
                    apellido,
                    telefono,
                    email
                }

                Promise.all(
                    orden.items.map(async (productoOrden) => {
                        const productoRef = doc(db, "inventario", productoOrden.id);
                        const productoDoc = await getDoc(productoRef);
                        const stockActual = productoDoc.data().stock;

                        await updateDoc(productoRef, { stock: stockActual - productoOrden.cantidad });
                    })
                )
                    .then(() => {
                        addDoc(collection(db, "ordenes"), orden)
                            .then(docRef => {
                                Swal.fire({
                                    title: "Compra finalizada!",
                                    text: `Tu número de orden es: ${docRef.id}`,
                                    icon: "success"
                                });
                                vaciarCarrito();
                            })
                            .catch(error => {
                                console.log("Error al crear la orden", error);
                                setError("Error al crear la orden");
                            })
                    })
                    .catch(error => {
                        console.log("No pudimos actualizar el stock", error);
                        setError("Error al actualizar el stock");
                    })
            }
        });
    }

    return (
        <div className="contenedorCart">
            <h2>Checkout - Finalizamos la Compra </h2>

            <form onSubmit={manejadorSubmit}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p> {producto.item.nombre} x {producto.cantidad} </p>
                            <p> {producto.item.precio} </p>
                            <hr />
                        </div>
                    ))
                }

                <div className="form-group">
                    <label htmlFor="nombre"> Nombre </label>
                    <input type="text" value={nombre} id="nombre" onChange={(e) => setNombre(e.target.value)} style={{border: '1px solid black'}} />
                </div>

                <div className="form-group">
                    <label htmlFor="apellido"> Apellido </label>
                    <input type="text" value={apellido} id="apellido" onChange={(e) => setApellido(e.target.value)} style={{border: '1px solid black'}} />
                </div>

                <div className="form-group">
                    <label htmlFor="telefono"> Telefono </label>
                    <input type="text" value={telefono} id="telefono" onChange={(e) => setTelefono(e.target.value)} style={{border: '1px solid black'}} />
                </div>

                <div className="form-group">
                    <label htmlFor="email"> E-mail </label>
                    <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} style={{border: '1px solid black'}} />
                </div>

                <div className="form-group">
                    <label htmlFor="emailcon"> Email Confirmación </label>
                    <input type="email" value={emailConfirmacion} id="emailcon" onChange={(e) => setEmailConfirmacion(e.target.value)} style={{border: '1px solid black'}} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <div className="botones">
                    <button className="miBtn checkout" disabled={carrito.length === 0}> Finalizar Orden </button>
                    <button className="miBtn checkout" type="reset"> Borrar </button>
                </div>
            </form>
        </div>
    )
}

export default Checkout;
