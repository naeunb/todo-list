import styled, { css } from "styled-components";
import { useTodoState } from "../contexts/todos";

function TodoHeader() {
  const date = new Date();
  const dateStr = date.toLocaleDateString("ko-kr", {
    dateStyle: "full",
  });

  const todos = useTodoState();
  const doneCount = todos.filter((todo) => todo.done).length;

  return (
    <Header>
      <p>{dateStr}</p>
      <span>
        완료 : {doneCount}/{todos.length}
      </span>
    </Header>
  );
}

const Header = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 20px 10px;
  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
  span {
    font-size: 0.8rem;
  }
`;

export default TodoHeader;