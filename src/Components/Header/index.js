import React from 'react';

import { Container } from './styles';

function Header({togleTheme}) {
    return (
        <Container>
            hello world
            <input type="checkbox" onChange={togleTheme} />
        </Container>
    );
}

export default Header;