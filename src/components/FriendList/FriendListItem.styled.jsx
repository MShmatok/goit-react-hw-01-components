import { styled } from 'styled-components';

export const ContainerItem = styled.li`
  background-color: white;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  overflow: hidden;

  display: flex;
  align-items: center;
  padding-left: 20px;

  span {
    width: 20px;
    height: 20px;
    background-color: ${({ $isonline }) => {
      return $isonline === false ? 'red' : 'green';
    }};
    border-radius: 50%;

    margin-right: 20px;
  }
  img {
    width: 60;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;

    padding: 5px;
    margin-right: 20px;
  }
  p {
    font-size: 25px;
    font-weight: 600;

    color: gray;

    text-align: center;
  }
`;
