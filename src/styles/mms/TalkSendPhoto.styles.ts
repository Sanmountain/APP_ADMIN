import { styled } from "styled-components";
import { IoMdArrowBack } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;

  width: 95%;
  height: 35px;
  font-size: 16px;
  font-weight: 600;
  margin: 20px 10px;
  gap: 15px;
`;

export const BackIcon = styled(IoMdArrowBack)`
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: #ff435e;
  }
`;

export const SelectBox = styled.select`
  width: 150px;
  height: 100%;
`;

export const Input = styled.input`
  width: 300px;
  height: 100%;
`;

export const ImageContainer = styled.div`
  width: 95%;
  min-height: 700px;
  height: fit-content;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
