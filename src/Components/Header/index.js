import React, {useContext} from 'react';
import { Link } from "react-scroll";
import {ThemeContext} from 'styled-components'
import Switch from "react-switch";

import { Container, Links } from './styles';

function Header({ togleTheme }) {
    const {title} = useContext(ThemeContext)
    return (
        <Container>
            <Links>
                <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-600}
                    duration={500}
                >Home
                </Link>
            </Links>
            <Links>
                <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-320}
                    duration={500}
                >Section1
                </Link>
            </Links>
            <Links>
                <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-800}
                    duration={500}
                >Section2
                </Link>     
            </Links>
            <Links>
                <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Section3
                </Link>
                
            </Links>
            <Switch
                onChange={togleTheme} checked={title === 'dark'}
                height={15}
                width={42}
                handleDiameter={18}
                onColor='#08b9ff'
                offColor='#ccc'
                offHandleColor='#08b9ff'

            />
        </Container>
    );
}

export default Header;