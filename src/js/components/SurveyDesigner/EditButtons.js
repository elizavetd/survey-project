import React from 'react'

const EditButtons = ({ id, deleteClick, editClick, answersEnabled }) => (
	<div className="survey-body__edit-question" data-id={id}>
		{(answersEnabled !== true) && <button onClick={editClick}><i className="fa fa-pencil" aria-hidden="true"></i></button>}

		{(answersEnabled !== true) && <button onClick={deleteClick}><i className="fa fa-trash" aria-hidden="true"></i></button>}
	</div>
)

export default EditButtons;