import React from 'react'

const EditButtons = ({ id, deleteClick }) => (
    <div className="survey-body__edit-question" data-id={id}>
		<button><i className="fa fa-pencil" aria-hidden="true"></i></button>
		<button onClick={deleteClick}><i className="fa fa-trash" aria-hidden="true"></i></button>
	</div>
)

export default EditButtons;