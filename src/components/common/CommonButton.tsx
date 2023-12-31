import { styled } from "styled-components";

interface ICommonButtonProps {
  contents: any;
  onClickFn: any;
}

export default function CommonButton({
  contents,
  onClickFn,
}: ICommonButtonProps) {
  return <Button onClick={onClickFn}>{contents}</Button>;
}

const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: #ff435e;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #ff435e;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ff435e;
    color: #fff;
    border: 1px solid #ff435e;
  }
`;
