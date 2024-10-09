import '../css/todo-page.css';

export const ToDoPage = () => {
  return (
    <div className="Title">
      <h2 className='Title__header'>ToDo Page</h2>
      <input type="text" placeholder="Agrega tu tarea" className="Ttile__input"/>
      <button className="Title__button">Agregar</button>
      <ul className='Title__list'>
        <li>Tarea 1</li>
        <li>Tarea 2</li>
        <li>Tarea 3</li>
      </ul>
    </div>
  )
}
