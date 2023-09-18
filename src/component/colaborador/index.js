/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import "./colaborador.css"
import{AiOutlineUserDelete, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador=(props)=>{
    const {nombre,puesto,foto,equipo,id, fav}=props.datos;
    const{colorSecundario, eliminarColaborador,like} =props
    return <div className="colaborador">
        <AiOutlineUserDelete onClick={()=>eliminarColaborador(id)} className="eliminar"/>
        <div className="encabezado"style={colorSecundario}>
            <img src={foto}/>
        </div>
        <div className="info">
            <h3>{nombre}</h3>
            <h4>{puesto}</h4>
            {fav?<AiFillHeart color="red" onClick={()=>like(id)}/>:<AiOutlineHeart onClick={()=>like(id)}/>}
        </div>
    </div>
};
export default Colaborador