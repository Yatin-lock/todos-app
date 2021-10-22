const addTodo = newTodoText=>{
    return {
        type: "ADD",
        payload:{
            task: newTodoText
        }
    }
}

const removeTodo = todoId=>{
    return {
        type: "REMOVE",
        payload:{
            id: todoId
        }
    }
}

const toggleTodo = todoId=>{
    return {
        type: "TOGGLE",
        payload:{
            id: todoId
        }
    }
}

const editTodo = (todoId, newTask)=>{
    return {
        type: "EDIT",
        payload:{
            id: todoId,
            task: newTask
        }
    }
}

export {addTodo,removeTodo,toggleTodo,editTodo}

