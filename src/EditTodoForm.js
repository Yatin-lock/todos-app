import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import {editTodo} from './actions/todoActions'
import { useDispatch } from "react-redux";

function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch(editTodo(id, value));
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;
