import { styled } from "styled-components";
import {Link} from 'react-router-dom';

export const StyledBodyContainer = styled.section`
max-width: 1024px;
margin: 0 auto;
background: #e5e1d9;
`;

export const StyledSearchInput = styled.input`
border: 1px double #c8c6c6;
border-radius: 6px;
padding: 5px;
width: 300px;
`;

export const StyledSearchButton = styled.button`
  border: 1px solid #c8c6c6;
  margin-left: 10px;
  border-radius: 8px;
  padding: 5px 30px;
  background: #ebe4bc;
  cursor: pointer;
`;

export const StyledSearchContainer = styled.div`
`;

export const StyledresturantContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;

export const StyledFilterBtn = styled.button`
border: 1px solid #c8c6c6;
margin-left: 10px;
border-radius: 8px;
padding: 5px 30px;
background: #ebe4bc;
  cursor: pointer;
  float: right;
`;

export const StyledFilterDiv = styled.div`
  margin: 16px 10px;;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const StyledLink = styled(Link)`
  color: #333; /* Text color */
  text-decoration: none; /* Remove underline */
  font-weight: bold; /* Make the text bold */
  &:hover {
    color: #555; /* Change color on hover */
  }
`;
