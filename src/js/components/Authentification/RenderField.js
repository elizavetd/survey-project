import React from 'react'

const RenderField = ({
    input, 
    label, 
    type, 
    name, 
    placeholder, 
    meta: { touched, error } 
}) => (
    <div>
        <div className="auth-form__label-container">
            <label className="auth-form__label" htmlFor={name}>{label}</label>
            {touched && error && <p className="auth-form__input-error">{error}</p>}
        </div>
      <input className="auth-form__input" {...input} placeholder={placeholder} type={type} />
    </div>
);

export default RenderField;