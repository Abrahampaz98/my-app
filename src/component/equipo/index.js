import "./equipo.css"
import Colaborador from "../colaborador";
const Equipo=(props)=>{

    const font={backgroundColor:props.datos.colorPrimario};
    const font2={backgroundColor:props.datos.colorSecundario};

    //DESTRUCTURACION
    const{colaboradores, eliminarColaborador, like}=props;


    return <>{colaboradores.length>0 && 
    <section className="equipo" style={font}>
        <h3 style={{borderColor:props.datos.colorSecundario}}>{props.datos.titulo}</h3>
        <div className="colaboradores">
            {colaboradores.map((colaborador,index)=>
            <Colaborador 
            datos={colaborador}
            key={index}
            colorSecundario={font2}
            eliminarColaborador={eliminarColaborador}
            like={like}/>)}
        </div>
    </section>
}</>
};
export default Equipo