import styled, { css } from 'styled-components';
import { MdComputer } from "react-icons/md";
import { FaBitcoin } from "react-icons/fa";
import { AiFillGolden } from "react-icons/ai";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.primary};
    padding: 60px 20px ;
    height: 100vh;

    @media screen and (max-width:560px){
        height: auto;
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1220px;
    height: 550px;
    margin: 0px auto;

    border: 1px solid #555;
    background-color: #5c3d76;

    @media screen and (max-width:560px){
        height: 440px;
    }
    
`;

export const Menu = styled.div`
    width: 100%;
    max-width: 1220px;
    height: 50px;
    display: flex;
    
    
`;

export const Link = styled.button`
    width: 100%;
    height: auto;
    font-size: 1.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;

    background-color: #2f2e5a;
    border-bottom: 1px solid #555;

    @media screen and (max-width:560px){
        font-size: 1rem;
    }

    :nth-child(1) {
        border-right: 1px solid #555;
    }
    
    :nth-child(2) {
        border-right: 1px solid #555;
    }


    &:hover{
        filter: brightness(0.8);
    }
    &:focus{
        background: #002376;
       
    }
`;

export const Info1 = styled.div`
    width: 100%;
    height: 500px;
    padding: 15px;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:560px){
        height: 400px;
    }

    div{
        width: 100%;
        max-width: 700px;
        margin-left: 20px;

        h1{
            font-size: 1.7rem;
            margin-bottom: 10px;

            @media screen and (max-width:560px){
                font-size: 1.3rem;
            }
            
        }

        p{
            line-height: 25px;
            font-size: 1.1rem;

            @media screen and (max-width:560px){
                font-size: 0.9rem;
            }
        }
    }

    
`

export const Info2 = styled(Info1)`
    
`

export const Info3 = styled(Info1)`
    
`

export const iconCSS = css`
    flex-shrink: 0;
    width: 350px;
    height: 350px;
    padding: 8px;
    color: #fff;

    @media screen and (max-width:766px){
        display: none;
    }

`;

export const PlatformIcon = styled(MdComputer)`${iconCSS}`
export const BitcoinIcon = styled(FaBitcoin)`${iconCSS}`
export const CommoditiesIcon = styled(AiFillGolden)`${iconCSS}`