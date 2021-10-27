import React from 'react';
import Logo from '../../assets/background.svg';

import { Container, Box, Title, Button } from './styles';

function SectionOne() {
    return (
        <Container>
            <img src={Logo} alt="/"/>
            <Box>
                <Title>Explore the life you want to live. Put your money to work</Title>
                <Button>Get it touch</Button>
            </Box>
        </Container>
    );
}

export default SectionOne;