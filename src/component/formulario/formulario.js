import "./formulario.css"
import { useState } from "react";
import Campo from "../Campo/index.js";
import ListaOpciones from "../listaOpciones/index.js";
import Boton from "../boton/index.js";

const Formulario=(props)=>{
    const [nombre,actualizarNombre]=useState("");
    const [puesto,actualizarPuesto]=useState("");
    const [foto,actualizarFoto]=useState("");
    const [equipo,actualizarEquipo]=useState("");
    const [titulo,actualizarTitulo]=useState("");
    const [color, actualizarColor]=useState("");

    const {crearEquipo}=props

    const manejarEnvio=(evento)=>{
        evento.preventDefault();
        let datosAEnviar={
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        props.registrarColaborador(datosAEnviar);
    };

    const manejarNuevoEquipo=(e)=>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario:color})
    };
    return<seccion className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellenar el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <Campo titulo="Foto" placeholder="Ingresar foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo}/>
            <Boton titulo="Crear"></Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellenar el formulario para crear equipo.</h2>
            <Campo titulo="Titulo" placeholder="Ingresar titulo" required valor={titulo} actualizarValor={actualizarTitulo}/>
            <Campo titulo="Color" placeholder="Ingresar el color en Hex" required valor={color} type="color" actualizarValor={actualizarColor}/>
            <Boton titulo="Registrar Equipo"></Boton>
        </form>
    </seccion>
};
export default Formulario;  