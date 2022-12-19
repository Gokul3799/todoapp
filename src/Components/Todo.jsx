import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 p-4 mt-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 mt-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.comleted ? style.li : style.liComplete}>
      <div className={style.row}>
        <input
          type="checkbox"
          checked={todo.completed ? true : false}
          onChange={() => toggleComplete(todo)}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={!todo.completed ? style.text : style.textComplete}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default Todo;
