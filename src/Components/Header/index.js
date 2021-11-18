import React from 'react';
import { Link } from "react-scroll";

import { Container, Links } from './styles';

function Header({ togleTheme }) {
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
                    offset={-200}
                    duration={500}
                >Section2
                </Link>
            </Links>
            <input type="checkbox" onChange={togleTheme} />
        </Container>
    );
}

export default Header;