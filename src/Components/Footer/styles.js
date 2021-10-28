import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 500px;
    background: url('https://images.wallpaperscraft.com/image/single/stars_space_galaxy_117958_800x600.jpg') no-repeat center center/cover;

    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 120px;

    @media screen and (max-width: 811px){
        grid-template-columns: 1fr;
        padding: 50px;
    }
    
    @media screen and (max-width: 400px){
        padding: 30px;
    }
`;

export const Box = styled.div`
    width: 100%;
    padding:10px;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    >h3{
        font-size: 1.3rem;
        color: #08b9ff;

        @media screen and (max-width: 810px){
            font-size: 1.1rem;
        }
        
    }

    >p{
        margin: 15px 0px;
        font-size: 1.4rem;
        line-height: 1.9rem;
        color: #fff;

        @media screen and (max-width: 810px){
            font-size: 1.2rem;
        }
    }

    >span{
        font-size: 1.1rem;
        line-height: 1.9rem;
        color: #ccc;

        @media screen and (max-width: 810px){
            font-size: 0.9rem;
        }
    }
  
`;