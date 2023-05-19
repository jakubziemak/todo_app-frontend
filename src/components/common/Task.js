import React from 'react';
import { Link } from 'react-router-dom';

import editSVG from '../../assets/edit.svg';
import deleteSVG from '../../assets/delete.svg';

export default function Task({ task, handleDelete, formatedDate, index }) {
  return (
    <div className="task">
      <div className="task__content-container">
        <h2 className="task__header">
          <Link to={task._id}>{task.title}</Link>
        </h2>
        {task.desc ? <p className="task__description">{task.desc}</p> : ''}
        <time className="task__timestamp">{formatedDate(task.createdAt)}</time>
      </div>
      <div className="task__button-container">
        <Link to={task._id} className="task__edit-button">
          <img src={editSVG} alt="Edit"></img>
        </Link>
        <button
          className="task__delete-button"
          onClick={(e) => {
            handleDelete(e, task._id, index);
          }}
        >
          <img src={deleteSVG} alt="Delete"></img>
        </button>
      </div>
    </div>
  );
}