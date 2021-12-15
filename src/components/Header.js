import React from 'react'
import Button from './Button'

function Header ({onToggleTodo, toggleText}) {
    return (
        <header className="header">
            <h1>Todo</h1>
            <Button btnText={toggleText ? 'Close' : 'Add'} btnClick={onToggleTodo}/>
        </header>
    )
}

export default Header