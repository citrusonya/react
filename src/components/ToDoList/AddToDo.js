import React, { useState } from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = ''){
    const [value, setValue] = useState(defaultValue)

    return{
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddToDo({onCreate}) {
    const input = useInputValue('')

    function submitHandler(event){
        event.preventDefault()

        if(input.value().trim()){
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form onSubmit={ submitHandler }>
            <textarea className='row todo__text' placeholder='Create New Task...' onSubmit={ submitHandler } {...input.bind} />
            <button className='row todo__button_create' type='submit'>Create New Task</button>
        </form>
    )
}

AddToDo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddToDo