/* eslint-disable jsx-a11y/alt-text */
import "./miOrg.css"

const MiOrg=(props)=>{
    return <seccion className="org-seccion"> 
    <h3 className="title">Mi Organización</h3>
    <img src="./img/add.png" onClick={props.cambiarMostrar}/>
    </seccion>
};
export default MiOrg;