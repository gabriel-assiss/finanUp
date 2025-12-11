import styles from "./Login.module.css";
import robo from "../assets/robo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");


  function entrar() {
  // Salvar no localStorage
  localStorage.setItem("email", email);
  localStorage.setItem("senha", senha);

  // Navegar para a home
  navigate("/home");
}
  return (
    <div className={styles.container}>
      
      {/* Lado esquerdo - Login */}
      <div className={styles.left}>
        <div className={styles.card}>
          <h1 className={styles.logo}>finanUP</h1>

          <h2 className={styles.title}>Entrar</h2>

          <input
  type="email"
  placeholder="Email"
  className={styles.input}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
          <input
  type="password"
  placeholder="Senha"
  className={styles.input}
  value={senha}
  onChange={(e) => setSenha(e.target.value)}
/>

          <button className={styles.button} onClick={entrar}>
            Login
          </button>
        </div>
      </div>

      {/* Lado direito - Imagem */}
      <div className={styles.right}>
        <img src={robo} className={styles.image} />
      </div>

    </div>
  );
}

