import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/user'}><a className="nav-link" aria-disabled="true">User</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/price'}><a className="nav-link" aria-disabled="true">Прайс</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;