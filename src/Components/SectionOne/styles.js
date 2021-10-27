import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 600px;
    margin-top: 50px;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    background: url('https://www.10wallpaper.com/wallpaper/1366x768/1201/purple_nebula-Space_Photography_Desktop_Wallpaper_1366x768.jpg') no-repeat center center/cover;

    /* Overlay */
    background-color: rgba(0,0,0,0.6);
    background-blend-mode: color;
    
    img{
        position: absolute;
        bottom: 0px;
    }
    
`;


export const Box = styled.div`
    width: 400px;    
    position: absolute;

`;
export const Title = styled.h1`
    font-size: 1.5rem;
    color: #fff;
    font-weight:bold;
    letter-spacing: 1px;
    margin-bottom: 20px;
    line-height: 2rem;

`;

export const Button = styled.button`
    width: 180px;
    padding: 12px 15px;
    background-color: #4f3d74;
    color: #fff;

    font-size: 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: ease 0.2s;

    &:hover{
        background-color: rgba(0,0,0,0.6);
    }

`;
