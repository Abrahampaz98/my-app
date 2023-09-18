import "./listaOpciones.css"
const ListaOpciones=(props)=>{
    
    const equipos=[
        "Front-end",
        "Programación",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Móvil",
        "Innovaciónes y Gestión"
    ];
    const manejarCambio=(e)=> props.actualizarEquipo(e.target.value);
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>seleccionar equipo</option>
            {equipos.map((equipo,index)=><option key={index} value={equipo} >{equipo}</option>)}
        </select>
    </div>
}
export default ListaOpciones;