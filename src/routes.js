import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Catalogo from './components/pages/Catalogo';
import Novo from './components/pages/Novo'
import { useState } from 'react'

export default function AppRouter(){
    const [livros, setLivros] = useState([{
        titulo: "Use a Cabeça: Java" ,
        resumo:"Use a Cabeça! Java é um aexperiência completa de aprendizado em programação orientada a objeto (OO) e Java." , 
        editora:"Alta Books" ,
        autores: ["Bert Bates", "Kathy Sierra"],
    },{
        titulo: "Java, como Programar",
        resumo: "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel", 
        editora: "Pearson",
        autores: ["Paul Deitel","Harvey Deitel"],
    },{
        titulo: "Core Java for the Impatient",
        resumo: "eaders familiar with Hostmann's original, two-volume 'Core Java' books who are looking for a comprehensive , but condensed guide to all of the new features and functions os Java SE 9 will learn how these new features impact the language and core libraries." , 
        editora: "Addison Wesley",
        autores: ["Cay Horstmann"],
    
    }])
    return(
        <Router>
            <Routes>
                <Route  path='/' element={<Catalogo livros={livros} />} />
                <Route  path='/Novo' element={<Novo setLivros={setLivros}/>} />
            </Routes>
        </Router>

    );
}