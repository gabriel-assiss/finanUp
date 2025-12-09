import robo from "../assets/robo.png";
import styles from "./Layout2olunas.module.css";


export default function Layout2colunas() {
return (
<div className="container" id={styles.lay}>


{/* Seção 1 */}
<div className="row align-items-center pt-5">
{/* Texto */}
<div className="col-12 col-md-6 d-flex flex-column align-items-center text-center">
<h2 className={styles.titleMain}>Bem-vindo ao <h2 style={{color:"#6A0DAD" , fontSize:"5rem"}}>FinanUP!</h2></h2>


<p className={styles.paragrafoLarge}>
Aprenda sobre dinheiro de um jeito divertido, fácil e cheio de aventuras!
Prepare-se para subir de nível na educação financeira!
</p>
</div>


{/* Imagem */}
<div className="col-12 col-md-6 d-flex justify-content-center">
<img src={robo} alt="Robô FinanUp" className={styles.imgRobo} />
</div>
</div>


{/* Seção 2 */}
<div className="text-center pt-5">
<h2 className={styles.subTitle}>Por que as crianças precisam aprender sobre dinheiro desde cedo?</h2>


<p className={styles.paragrafoMedium}>
Muitas crianças crescem sem entender como guardar, gastar ou planejar suas moedas.
Isso faz com que, no futuro, elas enfrentem dificuldades para organizar suas finanças,
tomar decisões e alcançar seus sonhos.
Sem orientação, o dinheiro vira um mistério — e às vezes até um problema.
</p>
</div>

<div className="text-center pt-5">
    
</div>

</div>
);
}