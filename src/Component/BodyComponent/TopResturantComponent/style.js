import styled from "styled-components";

export const StyleTopResturantCardContainer = styled.div`
width: 250px;
height: 330px;
background: white;
margin: 10px;
cursor: pointer;

&: hover{
    box-shadow: 10px 10px 5px #c7c4c4;
    cursor: pointer;
}
`;

export const StyledTopRestHeader = styled.div`
width: 250px;
height: 200px;
background-image: url(${props => props.imageUrl});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;

export const StyledTopRestHeaderText = styled.div`
width: 9rem;
    background: #000;
    color: #fff;
    font-size: 12px;
    margin-top: 9px;
    text-align: left;
    padding-left: 10px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`;