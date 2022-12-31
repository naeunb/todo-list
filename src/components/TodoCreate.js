import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useTodoDispatch } from "../contexts/todos";
import useInputs from "../hooks/useInputs";

function TodoCreate() {
  const [inputs, onChange, reset] = useInputs({
    text: "",
  });

  const { text } = inputs;

  const dispatch = useTodoDispatch();

  const nextId = useRef(4);

  const [edit, setEdit] = useState(false);

  const handleSubmit = () => {
    if (!edit) {
      setEdit(true);
      return;
    }
    if (!text) return;
    dispatch({ type: "create", id: nextId.current, text: text });
    reset();
    nextId.current++;
    setEdit(false);
  };

  return (
    <CreateBlock>
      <InputBox edit={edit}>
        <input type="text" name="text" onChange={onChange} value={text} />
      </InputBox>
      <BtnSubmit active={text.length > 0} onClick={handleSubmit} edit={edit}>
        {edit > 0 ? "등록" : "추가"}
      </BtnSubmit>
    </CreateBlock>
  );
}

const CreateBlock = styled.div`
  padding: 20px 10px;
`;

const InputBox = styled.div`
  border: 1px solid #ddd;
  max-height: 0;
  border-width: 0;
  overflow: hidden;
  ${({ edit }) =>
    edit &&
    css`
      max-height: 35px;
      padding: 0 5px;
      border-width: 1px;
      transition: max-height 0.25s;
    `}
  input {
    width: 100%;
    padding: 5px 0;
    border: 0;
    outline: none;
  }
`;

const BtnSubmit = styled.button`
  width: 100%;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  background-color: #333;
  padding: 5px 0;
  margin-top: 5px;
`;

export default TodoCreate;