import {styled} from 'styled-components';


export const StyledNavBar = styled.nav`
max-width: 1024px;
width:100%;
display:flex;
border: 1px solid black;
margin: 0 auto;
background: #e5e1d9;
`;

export const  StyledLogoContainer = styled.div`
float: left;
width: 150px;
height: 100px;
`;

export const  StyledLogoImg = styled.img`
width: 100%;
height: 100%;
`;

export const StyledNavItemContainer = styled.div`
width:87%;
padding: 0 20px;
`;

export const StyledNavItemUl = styled.ul`
float: right;
display: flex;
`;

export const StyledNavItemli = styled.li`
padding: 10px;
margin: 10px;
display: block;
cursor: pointer;
`;
