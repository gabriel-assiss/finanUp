import styles from './Baixar.module.css'

export default function Baixar({ refToScroll }){
    return(
            <div className={styles.center}  ref={refToScroll} >
                <h2 className={styles.h2}>Vamos jogar!</h2>

                
                <a href="#" className={styles.a}>Baixar Jogo</a>
            </div>
    );
}