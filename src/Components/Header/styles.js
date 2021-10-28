import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    transition: ease-in-out 0.3s;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.9) 0px 25px 20px -20px;
    }

`;

export const Links = styled.span`
    cursor: pointer;
    font-size: 1rem;
`;