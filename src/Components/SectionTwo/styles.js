import styled, {css} from 'styled-components';

import { RiMedal2Fill } from "react-icons/ri";
import { SiMonkeytie } from "react-icons/si"
import { BsCreditCardFill } from "react-icons/bs"

export const Container = styled.div`
    height: auto;
    width: 100%;
    
    background-color: ${props => props.theme.colors.primary};
    padding: 40px 50px;

    @media screen and (max-width: 400px){
        padding: 30px;
    }
    
`;

export const BoxInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;

    align-items: flex-start;
    gap: 30px;
    margin-top: 80px;

`;

export const Title = styled.h1`
    font-size: 1.5rem;
    color: #fff;
    font-weight:bold;
    letter-spacing: 1px;
    
    margin-top: 50px;
    text-align: center;
`;

export const Notes = styled.div`
    width:300px;
    display: flex;
    flex-direction: column;
    align-items: left;
    
    padding: 10px;
    

    h2{
        margin: 5px 0px;
        margin-left: 10px;
        color: #ccc;
    }

    p{
        margin: 5px 0px;
        margin-left: 10px;
        line-height: 1.4rem;
        color: #08b9ff;
    }

`;

export const iconCSS = css`
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    padding: 4px;
    color: #fff;

`;

export const Medal = styled(RiMedal2Fill)`${iconCSS}`
export const Fingerprint = styled(SiMonkeytie)`${iconCSS}`
export const Calculator = styled(BsCreditCardFill)`${iconCSS}`

