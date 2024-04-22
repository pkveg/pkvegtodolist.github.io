import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex : 1;
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y : auto;
    // background : gray;
    `;

function TodoList(){
    return (
    <TodoListBlock>
        <TodoItem text="돈까스 먹기" done={true}/>
        <TodoItem text="누워있기" done={true}/>
        <TodoItem text="밀가루 안먹기" done={false}/>
        <TodoItem text="체중 감량하기" done={false}/>
    </TodoListBlock>
)
}

export default TodoList;