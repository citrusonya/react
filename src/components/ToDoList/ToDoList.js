import React from 'react'
import PropTypes from 'prop-types'
import ToDoItem from './ToDoItem'

function ToDoList(props) {
    return (
      <ul>
          {  props.todos.map(todo => {
              return (
                <ToDoItem 
                    todo={ todo } 
                    key={ todo.id} 
                    onChange={ props.onToggle }>
                </ToDoItem>
              )
          })}
      </ul>
    );
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default ToDoList