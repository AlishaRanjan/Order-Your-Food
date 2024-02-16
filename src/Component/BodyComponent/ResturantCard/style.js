import {styled} from 'styled-components';


export const StyledCardWrapper = styled.section`
background: #cac6b14a;
width: 200px;
padding: 5px;
margin: 10px auto;

&: hover{
    border: 1px solid #52491b ;
    cursor: pointer;
}
`;

export const StyledH3Tag = styled.h3``;

export const StyledResturantImg = styled.img`
width: 100%;
height: 150px;
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
