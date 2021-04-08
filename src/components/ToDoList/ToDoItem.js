import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from './context'

function ToDoItem({ todo, onChange }) {
    const { removeToDo } = useContext(Context)
    const classes = []

    if (todo.completed){
        classes.push('done')
    }

    return (
        <li className='todo__item'>
            <p className={ classes.join(' ') }>
                <input
                    className='form-check-input mt-0'
                    type='checkbox'
                    checked={ todo.completed }
                    onChange={ () => onChange(todo.id) } />
                { todo.title }
            </p>
            <button className='todo__button_remove' onClick={ removeToDo.bind(null, todo.id) }>&times;</button>
        </li>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default ToDoItem