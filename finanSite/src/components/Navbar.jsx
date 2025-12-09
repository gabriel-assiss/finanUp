import Style from './Navbar.module.css';

function Navbar() {
    return(
          <nav className={Style.nav}>
            <div className={Style.logo}>
              <h1 className={Style.h1}>FinanUP</h1>
            </div>
    
            <div className={Style.botoes}>
              <a href="#" className={Style.a}>Baixar Jogo</a>
              
            </div>
          </nav> 
      )
}

export default Navbar