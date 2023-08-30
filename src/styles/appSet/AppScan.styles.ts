import { styled } from "styled-components";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaUsers } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1100px;
  max-width: 100%;
  min-height: 400px;
  height: fit-content;

  background-color: #fff;
  border-radius: 10px;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;
  padding: 0 10px;
  margin-top: 10px;
`;

export const ExcelIcon = styled(SiMicrosoftexcel)`
  font-size: 25px;
  font-weight: 700;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    color: #ff435e;
  }
`;

export const UserIcon = styled(FaUsers)`
  font-size: 25px;
  font-weight: 700;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    color: #ff435e;
  }
`;

export const FilterTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 50%;
  gap: 10px;
`;

export const YearSelectBox = styled.select`
  width: 100px;
  height: 35px;
  font-size: 16px;
  border-radius: 5px;
`;

export const MonthSelectBox = styled.select`
  width: 80px;
  height: 35px;
  font-size: 16px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  background-color: #f8f9fa;
  width: 100%;
  height: 50px;
  margin-top: 10px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const ContentsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;

  &:last-child {
    margin-bottom: 50px;
  }
`;

export const NoDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 250px;
  font-size: 16px;
  font-weight: 500;
`;

export const ContentsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  border: 0.3px solid #bdbdbd;
  border-radius: 5px;
  width: 100%;
  height: 40px;
`;

export const Contents = styled.div`
  font-size: 16px;
`;
