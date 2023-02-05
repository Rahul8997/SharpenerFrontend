import React from 'react'
import classes from '../Login.module.css';
const InputComponent = (props) => {
    return (
        <div>
            <div>
                <div
                    className={`${classes.control} ${props.inputState.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor={props.inputLabel}>E-Mail</label>
                    <input
                        type={`${props.InputType}`}
                        id={`${props.InputId}`}
                        value={props.inputState.value}
                        onChange={props.onChangefun}
                        onBlur={props.onBlurfun}
                    />
                </div>
            </div>
        </div>
    )
}

export default InputComponent
