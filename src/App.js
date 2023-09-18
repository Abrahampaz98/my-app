import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './App.css';
import Header from './component/hedear/header.js';
import Formulario from "./component/formulario/formulario.js";
import MiOrg from './component/miOrg/index.js';
import Equipo from "./component/equipo"; 
import Footer from "./component/footer/footer";

function App() {
  const[mostrarFormulario,actualizarMostrar]=useState(true)
  const[colaboradores, actualizarColaboradores]=useState([
    {
      id: uuidv4(),
      equipo: "Front-end",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://media.licdn.com/dms/image/D4D03AQEQ5DGPEu63pQ/profile-displayphoto-shrink_800_800/0/1666749321927?e=1700697600&v=beta&t=HscczXgjFQl8XQXQbhw13rv7BRqkopA4WryK0upLWAY",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
},
{
  id: uuidv4(),
  equipo: "UX y Diseño",
  foto: "https://github.com/JeanmarieAluraLatam.png",
  nombre: "Jeanmarie Quijada",
  puesto: "Instructora en Alura Latam",
  fav: false
},
{
  id: uuidv4(),
  equipo:"Innovaciónes y Gestión",
  foto: "https://github.com/christianpva.png",
  nombre: "Christian Velasco",
  puesto: "Head de Alura e instructor",
  fav: true
},
{
  id: uuidv4(),
  equipo: "DevOps",
  foto: "https://github.com/JoseDarioGonzalezCha.png",
  nombre: "Jose Gonzalez",
  puesto: "Dev. FullStack",
  fav: true
},
])
  const[equipos, actualizarEquipos]=useState([
    {
    id:uuidv4(),
    titulo:"Programación",
    colorPrimario:"#D9F7E9",
    colorSecundario:"#57C278"
    },
    {id:uuidv4(),
    titulo:"Front-end",
    colorPrimario:"#E8F8FF",
    colorSecundario:"#82CFFA"
    },
    {id:uuidv4(),
    titulo:"Data Science",
    colorPrimario:"#F0F8E2",
    colorSecundario:"#A6D157"
    },
    {id:uuidv4(),
    titulo:"DevOps",
    colorPrimario:"#FDE7E8",
    colorSecundario:"#E06B69"
    },
    {id:uuidv4(),
    titulo:"UX y Diseño",
    colorPrimario:"#FAE9F5",
    colorSecundario:"#DB6EBF"
    },
    {id:uuidv4(),
    titulo:"Móvil",
    colorPrimario:"#FFF5D9",
    colorSecundario:"#FFBA05"
    },
    {id:uuidv4(),
    titulo:"Innovaciónes y Gestión",
    colorPrimario:"#FFEEDF",
    colorSecundario:"#FF8A29"
    }
  ])
  const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormulario)
  }
  const registrarColaborador=(colaborador)=>{
    actualizarColaboradores([...colaboradores,colaborador])
  }
  const eliminarColaborador=(id)=> {
    const nuevosColaboradores= colaboradores.filter((colaborador)=>colaborador.id!==id)
    return actualizarColaboradores(nuevosColaboradores);
  }
  const crearEquipo=(nuevoEquipo)=>{  
  actualizarEquipos([...equipos, {...nuevoEquipo,id:uuidv4()}])
  }

const like=(id)=>{
  const colaboradoresActualizados =colaboradores.map((colaborador)=>{
    if (colaborador.id===id){
      colaborador.fav = !colaborador.fav
    }return colaborador
  })
  return actualizarColaboradores(colaboradoresActualizados)
}

  return <div>
        <Header/>
        {mostrarFormulario && <Formulario 
        equipos={equipos.map((e)=>e.titulo)} 
        registrarColaborador={registrarColaborador} 
        crearEquipo={crearEquipo}/>}
        <MiOrg cambiarMostrar={cambiarMostrar}/>
        {equipos.map((e)=><Equipo 
        datos={e} 
        key={e.titulo} 
        colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===e.titulo)} 
        eliminarColaborador={eliminarColaborador}
        like={like}/>)}
        <Footer/>
    </div>
  ;
}
export default App