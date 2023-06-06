import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Catalogo from './components/pages/Catalogo';
import Novo from './components/pages/Novo'

export default function AppRouter(){
   
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Catalogo />} />
                <Route  path='/Novo' element={<Novo />} />
            </Routes>
        </Router>

    );
}