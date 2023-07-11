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
