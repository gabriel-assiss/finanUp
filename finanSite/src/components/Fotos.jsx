import styles from './Fotos.module.css'
import Login  from '../assets/login.png'
import quiz from '../assets/quiz.png'
export default   function Fotos(){
    return(

    <div className="container" id={styles.lay}>
        
        
        
        <div className="row align-items-center pt-5">
        
            <center className={styles.titulo}><h2 className={styles.h2}>Nosso App</h2></center>

            <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center">
                <h4 style={{fontWeight:"bold"}}>Tela de login:</h4>
                <img src={Login} alt="" className={styles.img}/>
            </div>
        
        
        
            <div className="col-12 col-md-6 d-flex justify-content-center" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <h4 style={{textAlign:"center",fontWeight:"bold"}}>Quiz:</h4>
                <img src={quiz} className={styles.img}  />
            </div>
        </div>
    </div>
        
    );
}