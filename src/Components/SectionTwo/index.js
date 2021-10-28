import React from 'react';

import { Container, BoxInfo, Title, Medal, Notes, Fingerprint, Calculator } from './styles';

function SectionTwo() {
    return (
        <Container id='section1'>
            <Title>Market leader</Title>
            <BoxInfo>
                <Notes>
                    <Medal/>
                    <h2>Financial Expertice</h2>
                    <p>Your equity can pay off more when invested in the right places.Quality and diversity of investments for all</p>
                </Notes>
                <Notes>
                    <Calculator/>
                    <h2>How to start investing</h2>
                    <p>Investing in one of the largest financial institutions in the country is very simple. In just a few steps.</p>
                </Notes>
                <Notes>
                    <Fingerprint/>
                    <h2>Analysis </h2>
                    <p>More than your manager, our advisors will help you choose the best investment options for your profile.</p>
                </Notes>
            </BoxInfo>
        </Container>
    );
}

export default SectionTwo;