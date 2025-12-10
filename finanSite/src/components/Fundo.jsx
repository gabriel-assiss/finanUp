import styles from './Fundo.module.css'

export default function Fundo(){
    return(
        <div className={styles.div}>
            <a className={styles.a} href="">Ajuda</a>
            <a className={styles.a} href="">Fale conosco</a>
            <a className={styles.a} href="">Telefone</a>
        </div>
    )
}