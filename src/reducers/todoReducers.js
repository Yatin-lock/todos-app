import uuid from "uuid/v4";
function todoReducer(state=[],action){
    if(action.type==="ADD"){
        return [...state, {id: uuid(),task:action.payload.task,completed:false}]
    }
    else if(action.type==="REMOVE"){
        return state.filter(st=> st.id!==action.payload.id)
    }
    else if(action.type==="TOGGLE"){
        return state.map(st=> st.id===action.payload.id?{...st, completed: !st.completed}:{...st})
    }
    else if(action.type==="EDIT"){
        return state.map(st=>st.id===action.payload.id?{...st, task: action.payload.task}: {...st})
    }
    return state;
}

export default todoReducer