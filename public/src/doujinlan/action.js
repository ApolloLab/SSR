export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';//列表完成
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';//过滤列表


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',//显示全部
    SHOW_COMPLETED: 'SHOW_COMPLETED',//显示完成的
    SHOW_ACTIVE: 'SHOW_ACTIVE'//显示未完成的
};

/*
* action创建函数
* */

export function addToDo(text){
    return{
        type: ADD_TODO,
        text,
    }
}

export function completeTodo(index){
    return {
        type: COMPLETE_TODO,
        index,
    }
}

export function setVisibilityFilter(filter){
    return {
        type: SET_VISIBILITY_FILTER,
        filter,
    }
}