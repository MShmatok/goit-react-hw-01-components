import { styled } from 'styled-components';

export const TransactionHistoryStyle = styled.table`
  width: 1000px;
  margin-left: 10px;
  margin-top: 10px;
  background-color: #e0e0e0;

  th {
    width: calc(100% / 3);
    color: white;
    background-color: #178989;
    font-weight: 400;
    font-size: 25px;
    padding: 10px;
  }
  tbody tr:nth-child(2n) {
    background-color: #e7e7e7;
  }
  thead {
    background-color: white;
  }
`;

export const TransactionStyle = styled.tr`
  background-color: white;

  td {
    color: grey;
    padding-left: 130px;
    font-size: 25px;
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
