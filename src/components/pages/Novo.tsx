
import NavBar from "../NavBar"
import React , { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

interface ILivros {
   titulo: string, 
   resumo: string,
   editora: string,
   autores: string[],
   listaAutores?: string,
   id: string
}
interface Props {
   setLivros: React.Dispatch<React.SetStateAction<Array<ILivros>>>
 }

export default function Catalogo({ setLivros }: Props){
   const [titulo, setTitulo] = useState("");
   const [resumo, setResumo] = useState("");
   const [editora, setEditora] = useState("");
   const [listaAutores, setListaAutores] = useState('');
   
   function adicionarLista(evento: React.FormEvent<HTMLFormElement>) {
      evento.preventDefault();
      const autores = listaAutores.split('\n')
      
      setLivros( (livros) => 
        [
          ...livros,
          {
            titulo,
            resumo,
            editora,
            autores,
            id: uuidv4()
          }
        ]
      )
      setTitulo("");
      setResumo("");
      setEditora("");
      setListaAutores("");
    }
   return(
        <>
        <NavBar />
         <div className="container mb-3">
            <h1>Dados do livro</h1> 
               <form className="col-10" onSubmit={adicionarLista}> 
                  <div className="col-12 ms-5 mt-3">
                     <label htmlFor="titulo" className="col-4 form-label">Título</label>
                     <input 
                     type="text" 
                     name="titulo"  
                     className="form-control" 
                     placeholder="Título do livro" 
                     aria-label="titulo"
                     value={titulo}
                     onChange={evento => setTitulo(evento.target.value)}>
                     </input>
                  </div>
                  <div className="col-12 ms-5 mt-3">
                     <label htmlFor="resumo" className="col-4 form-label">Resumo</label>
                     <textarea 
                     className="col-8  form-control" 
                     name="resumo" 
                     id="exampleFormControlTextarea1" 
                     value={resumo}
                     onChange={evento => setResumo(evento.target.value)}>
                     </textarea>
                  </div>
                  <div className="col-12 ms-5 mt-3">
                     <label htmlFor="editora" className="col-4 form-label">Editora</label>
                     <select 
                     name="editora" 
                     className="col-5 form-select" 
                     aria-label="Default select example"
                     value={editora}
                     onChange={evento => setEditora(evento.target.value)}>
                        <option value="Alta Books">Alta Books</option>
                        <option value="Pearson">Pearson</option>
                        <option value="Addison Wesley">Addison Wesley</option>
                     </select>
                  </div>
                  <div className="col-12 ms-5 mt-3">
                     <label htmlFor="autor" className="col-4 form-label">Autor (1 por linha)</label>
                     <textarea
                     name="autor" 
                     className="col-8  form-control" 
                     id="exampleFormControlTextarea1" 
                     value={listaAutores}
                     onChange={evento => setListaAutores(evento.target.value)}>
                     </textarea>
                  </div>
                  <div>
                     <button className="btn btn-outline-primary ms-5 mt-2" onClick={() => {}}>  
                        Salvar Dados
                     </button>
                  </div>
               </form>
         </div>   
        </>
   )
}