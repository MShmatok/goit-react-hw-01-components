import { styled } from 'styled-components';

export const Container = styled.section`
  background-color: white;

  margin-left: 5px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  overflow: hidden;

  h2 {
    font-size: 25px;
    font-weight: 700;
    text-transform: uppercase;
    color: gray;
    padding: 15px;
    text-align: center;
  }
  ul {
    display: flex;
    flex-wrap: wrap;

    list-style: none;
  }
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export const ItemLi = styled.li`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  padding: 10px;
  background-color: ${getRandomHexColor};
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
