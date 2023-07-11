import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 300px;
  height: 350px;
  padding-top: 25px;
  background-color: white;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;
export const WraperImg = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  overflow: hidden;
`;
export const Name = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  padding-top: 8px;
`;
export const Tag = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  color: #b8b5b0;
  padding-top: 8px;
`;
export const Location = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  color: #b8b5b0;
  padding-top: 8px;
`;

export const WraperTags = styled.ul`
  background-color: #e8e7e7;
  display: flex;
  list-style: none;

  li {
    flex-basis: calc(100% / 3);
    display: flex;
    flex-direction: column;
    padding: 15px 0;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
      rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  }
`;

export const Label = styled.span`
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  color: #b8b5b0;
  margin-bottom: 4px;
`;
export const Quantity = styled.span`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  color: black;
`;
