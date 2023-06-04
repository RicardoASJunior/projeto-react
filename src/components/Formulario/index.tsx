import React from "react";
import BotaoSalvar from '../BotaoSalvar';

class Formulario extends React.Component {
    render(){
        
        return (
            <div className="container">
                <h1>Dados do livro</h1> 
                <form className="col-10"> 
                    <div className="col-12 ms-5 mt-3">
                        <label htmlFor="titulo" className="col-4 form-label">Título</label>
                        <input type="text" name="titulo"  className="form-control" placeholder="Título do livro" aria-label="titulo"></input>
                    </div>
                    <div className="col-12 ms-5 mt-3">
                        <label htmlFor="resumo" className="col-4 form-label">Resumo</label>
                        <textarea className="col-8  form-control" name="resumo" id="exampleFormControlTextarea1" ></textarea>
                    </div>
                    <div className="col-12 ms-5 mt-3">
                        <label htmlFor="editora" className="col-4 form-label">Editora</label>
                        <select name="editora" className="col-5 form-select" aria-label="Default select example">
                            <option value="1">Alta Books</option>
                            <option value="2">Pearson</option>
                            <option value="3">Addison Wesley</option>
                        </select>
                    </div>
                    <div className="col-12 ms-5 mt-3">
                        <label htmlFor="autor" className="col-4 form-label">Autor (1 por linha)</label>
                        <textarea name="autor" className="col-8  form-control" id="exampleFormControlTextarea1" ></textarea>
                    </div>
                    <div><BotaoSalvar /></div>
                </form>
            </div>
        )   
    }
   
}

export default Formulario;