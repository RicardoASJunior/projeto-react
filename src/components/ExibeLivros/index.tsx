import BotaoExcluir from '../BotaoExcluir';
// import Item from './Item';

function Lista({ livros }: {livros: Array.string}) {
    
    return(
        <div className='container col-10 '>
            <h1 className='p-5'>Catálogo de Livros</h1>
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