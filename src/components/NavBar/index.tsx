import React from 'react';

class NavBar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg bg-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="../App.tsx">Catálogo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="../App-1.tsx">Novo</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
       )
    }
}

export default NavBar;