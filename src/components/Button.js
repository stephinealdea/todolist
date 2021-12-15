import React from 'react'
import PropTypes from 'prop-types'

function Button ({btnClass, btnText, btnClick}) {
    return (
        <button className={btnClass} onClick={btnClick}>
            {btnText}
        </button>
    )
}

// Setting a default value
Button.defaultProps = {
    btnClass: 'primary'
}

// Setting a validation for data types
Button.propTypes = {
    btnText: PropTypes.string,
    btnClass: PropTypes.string,
    btnClick: PropTypes.func
}

export default Button;