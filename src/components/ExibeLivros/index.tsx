import React from 'react';
import BotaoExcluir from '../BotaoExcluir';
// import Item from './Item';

function Lista() {
    let livros = [{
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
    
    }]
    return(
        <div className='container col-10 '>
            <h1 className='p-3'>Catálogo de Livros</h1>
            <div className='row bg-dark text-light p-3' >
                <div className='col-2'>Título</div>
                <div className='col-6'>Resumo</div>
                <div className='col-2'>Editora</div>
                <div className='col-2'>Autores</div>
            </div>
            <div className='bg-secondary'>
                {livros.map((item, index) => (
                <div key={index} className='row bg-light border p-3'>
                    <div className='col-2'>
                        {item.titulo}
                    <div ><BotaoExcluir /></div>
                    </div>
                    <div className='col-6 '>{item.resumo}</div>
                    <div className='col-2'>{item.editora}</div>
                    <ul className='col-2'>
                        {item.autores.map((p,i) => (
                            <>
                                <li key={i} className=''>{p}</li>
                            </>
                        ))}
                    </ul>
                </div>
                ))}
            </div>
        </div>    
    )
        
}
export default Lista;