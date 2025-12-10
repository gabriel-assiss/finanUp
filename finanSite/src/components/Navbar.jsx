import Style from './Navbar.module.css';

function Navbar({ quizRef }) {
    return(
          <nav className={Style.nav}>
            <div className={Style.logo}>
              <h1 className={Style.h1}>FinanUP</h1>
            </div>
    
            <div className={Style.botoes}>
              <a href="#" className={Style.a}  onClick={(e) => {
                e.preventDefault;
        quizRef.current?.scrollIntoView({ behavior: "smooth" });}}style={{ cursor: "pointer" }}>Baixar Jogo</a>             
            </div>
          </nav> 
      )
}

export default Navbar