
import { Link } from 'react-router-dom';

function NavBar() {
    const rotas = [{
        label: "Catálogo", 
        to: "/"
    },{
        label: "Novo", 
        to: "/Novo"
    }]    
    return (
        <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="d-flex ps-4">
                {rotas.map((rota, i) => (
                    <div key={i}>
                        <Link className="ps-2 navbar-brand text-light" to={rota.to}>{rota.label}</Link>
                    </div>
                ))}
            </div>
        </nav>
        )
    
}

export default NavBar;