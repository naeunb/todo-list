
import styled from "styled-components";
import { TodoProvider } from "../contexts/todos";
import TodoBody from "./TodoBody";
import TodoCreate from "./TodoCreate";
import TodoHeader from "./TodoHeader";

function Todos() {
  return (
    <TodoProvider>
      <TodosBlock>
        <TodoHeader />
        <TodoBody />
        <TodoCreate />
      </TodosBlock>
    </TodoProvider>
  );
}

const TodosBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 700px;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 1px -1px 5px rgb(0 0 0 / 10%);
`;

export default Todos;