import React from 'react'
import './ToDo.css'
import ToDoList from './ToDoList'
import Context from './context'
import AddToDo from './AddToDo'

function App() {
	const [todos, setTodos] = React.useState([
	  { id: 1, completed: true, title: 'Wake up'  },
	  { id: 2, completed: false, title: 'Meetup with Jenkins'  },
	  { id: 3, completed: false, title: 'Call Dr. Cumberbatch for Appoinmnet'  },
	  { id: 4, completed: false, title: 'Go to wallmart for food with Rile'  },
	  { id: 5, completed: false, title: 'Buy Skyrim'  }
	])
  
	function ToggleToDo(id) {
	  setTodos (
		todos.map(todo => {
		if (todo.id === id){
		  todo.completed = !todo.completed
		}
		return todo
	  })
	  )
	}
  
	function addToDo(title){
	  setTodos(todos.concat([{
		title,
		id: Date.now(),
		completed: false
	  }]))
	}
  
	function removeToDo(id){
	  setTodos(todos.filter(todo => todo.id !==id))
	}
  
	return (
		<Context.Provider value={{ removeToDo }}>
			<AddToDo onCreate={ addToDo } />
			{ todos.length ? <ToDoList todos={ todos } onToggle={ ToggleToDo } /> : <p className='todo__notodo'>No todo :)</p> }
		</Context.Provider>
	);
}
  
export default App;