export const Todo = ({ todo, removerTodo, completarTodo}) => {
   
    

    return (
        <div className="todo" style={
            
            {
                
                textDecoration: todo.estaCompleta
                    ? "line-through"
                    : ""
            }}>
            <div className="content">
                <p>{todo.texto}</p>
                <p className="category">({todo.categoria})</p>
            </div>
            <div className='botoes'>
                <button id="completar" onClick={ () => completarTodo(todo.id)}  className='completar' >
               
                Completar
                </button>
                <button onClick={() => removerTodo(todo.id)} className='apagar'>
                    X</button>
            </div>
        </div>
    )
}

