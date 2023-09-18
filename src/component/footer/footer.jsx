import "./footer.css"

const Footer=()=>{
    return <footer className="footer" style={{backgroundImage:"url(./img/footer.png)"}}>
        <div className="redes">
            <a href="https://wa.me/59395537150">
                <img src="./img/whatsapp.svg"/>
            </a>
            <a href="https://www.instagram.com/ransomware.98/?next=%2F">
                <img src="./img/instagram.svg"/>
            </a>
            <a href="https://www.linkedin.com/in/abrahampaz98">
                <img src="./img/linkedin.svg"/>
            </a>
        </div>
        <img src="./img/Logo.png"/>
        <strong>Desarrolado por AP</strong>
    </footer>
}
export default Footer
