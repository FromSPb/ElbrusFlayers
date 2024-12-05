import { Link } from 'react-router-dom';

function NavBar() {
    console.log(234);
    

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">

                            <Link to={'/'}><a className="nav-link" aria-disabled="true">Главная</a></Link>
                        </li>                        
                        <li className="nav-item">
                            <Link to={'/price'}><a className="nav-link" aria-disabled="true">Прайс</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/animals'}><a className="nav-link" aria-disabled="true">Божьи твари</a></Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to={'/signin'}><a className="nav-link" aria-disabled="true">Вход</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/signup'}><a className="nav-link" aria-disabled="true">Регистрация</a></Link>
                         </li>

                       
                    
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;