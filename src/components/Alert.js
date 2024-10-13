import React from 'react'

function Alert(props) {
    const CapitalizedCase = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1).concat(" : ");
    }
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{CapitalizedCase(props.alert.type)}</strong> {props.alert.massage}
    </div>
  )
}

export default Alert;
