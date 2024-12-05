import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/animals'}><a className="nav-link" aria-disabled="true">Энималс</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/price'}><a className="nav-link" aria-disabled="true">Прайс</a></Link>
                        </li>
                        <li>
                            Место под будущего юзера
                        </li>
                        <li>
                            Здесь могла бы быть ваша реклама
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;