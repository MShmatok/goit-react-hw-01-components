import { styled } from 'styled-components';

export const ItemLi = styled.li`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  padding: 10px;
  background-color: ${({ color }) => {
    return color;
  }};
`;

export const Label = styled.span`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  color: #b8b5b0;
  margin-bottom: 4px;
`;

export const Percentage = styled.span`
  text-align: center;
  font-weight: 500;
  font-size: 25px;
  color: #b8b5b0;
`;
