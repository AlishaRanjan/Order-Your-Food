import {styled} from 'styled-components';


export const StyledCardWrapper = styled.section`
background: #fffffe;
width: 220px;
margin: 10px auto;
border-radius: 4px;
height: 285px;

&: hover{
    box-shadow: 10px 10px 5px #c7c4c4;
    cursor: pointer;
}
`;

export const StyledH3Tag = styled.h3``;

export const StyledResturantImg = styled.img`
width: 100%;
height: 150px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

export const StyledDetailContainer = styled.div`
display:flex;
justify-content: space-around;
`;

export const StyledRating = styled.h5`
margin:0;
`;

export const StyledEta = styled.h5`
margin:0;
`;
