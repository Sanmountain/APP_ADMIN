import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 20px;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: #f8f9fa;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding: 0 5px;
  font-size: 18px;
  margin-bottom: 20px;

  &::placeholder {
    font-size: 14px;
  }
`;

export const EditorContainer = styled.div`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 40px;
  margin-top: 30px;
`;

export const WriteButton = styled.button`
  font-size: 18px;
  font-weight: 600;
  color: black;
  padding: 5px 10px;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
`;
