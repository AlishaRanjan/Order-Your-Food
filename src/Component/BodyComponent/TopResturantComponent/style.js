import styled from "styled-components";

export const StyleTopResturantCardContainer = styled.div`
width: 200px;
height: auto;
background: white;
margin: 10px;
cursor: pointer;

&: hover{
    border: 1px solid #52491b ;
    cursor: pointer;
}
`;

export const StyledTopRestHeader = styled.div`
width: 200px;
height: 200px;
background-image: url(${props => props.imageUrl});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;

export const StyledTopRestHeaderText = styled.div`
font-size: 16px;
color: white;
text-decoration: white;
font-weight: 700;
`;