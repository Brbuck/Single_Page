import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 600px;
    margin-top: 50px;
    position: relative;

    background-image: url('https://www.10wallpaper.com/wallpaper/1366x768/1201/purple_nebula-Space_Photography_Desktop_Wallpaper_1366x768.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    /* Overlay */
    background-color: rgba(0,0,0,0.6);
    background-blend-mode: color;
    
    
   /*  border: solid 1px #000;
    border-radius: 0 0 240px 50%/60px;
    background-color: yellow; */

    img{
        position: absolute;
        bottom: 0px;
    }
    
`;
