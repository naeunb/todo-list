import styled, { css } from "styled-components";
import {
  AiOutlineCheck,
} from "react-icons/ai";
import { useTodoDispatch } from "../contexts/todos";
import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";

function TodoItem({ todo }) {
  const { id, text, done } = todo;
  const [disapper, setDisapper] = useState(false);

  const dispatch = useTodoDispatch();

  const handleRemove = () => {
    setDisapper(true);
    setTimeout(() => {
      dispatch({ type: "remove", id });
    }, 400);
  };

  return (
    <ItemBlock disapper={disapper}>
      <CheckCircle onClick={() => dispatch({ type: "toggle", id })} done={done}>
        <AiOutlineCheck />
      </CheckCircle>
      <p>{text}</p>
      <TrashIcon onClick={handleRemove} size={18} />
    </ItemBlock>
  );
}

const ItemBlock = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;
  p {
    flex: 1;
  }
  transition: transform 0.4s;
  ${({ disapper }) =>
    disapper &&
    css`
      transform: translateX(100%);
    `}
`;

const TrashIcon = styled(FiTrash2)`
  cursor: pointer;
  &:hover {
    color: #c00000;
  }
`;

const CheckCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid black;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pinter;
  ${({ done }) =>
    done &&
    css`
      background-color: black;
      color: white;
    `}
`;

export default TodoItem;