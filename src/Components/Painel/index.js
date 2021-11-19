import React, { useState } from 'react';

import { Container, Content, Menu, Link, Info1, Info2, Info3, PlatformIcon, BitcoinIcon,CommoditiesIcon } from './styles';

function Painel() {
    const [click1, setClick1] = useState(true)
    function handleClick1() {
        setClick1(!click1)
        if (click2 === true) {
            setClick2(!click2)
        } else if (click3 === true) {
            setClick3(!click3)
        } else {
            setClick1(true)
        }
    }

    const [click2, setClick2] = useState(false)
    function handleClick2() {
        setClick2(!click2)
        if (click1 === true) {
            setClick1(!click1)
        } else if (click3 === true) {
            setClick3(!click3)
        } else {
            setClick2(true)
        }
    }

    const [click3, setClick3] = useState(false)
    function handleClick3() {
        setClick3(!click3)
        if (click1 === true) {
            setClick1(!click1)
        }
        else if (click2 === true) {
            setClick2(!click2)
        } else {
            setClick3(true)
        }
    }

    return (
        <Container>
            <Content>
                <Menu>
                    <Link onClick={handleClick1}>Futures & Options</Link>
                    <Link onClick={handleClick2}>Commodities</Link>
                    <Link onClick={handleClick3}>Bitcoin</Link>
                </Menu>
                {click1 ? <Info1>
                    <PlatformIcon />
                    <div>
                        <h1>Electronic trading solutions available on B.B. Bank </h1>
                        <p>B.B. Bank’s F&O Electronic Client Solutions provides execution consultancy,
                            risk management and trading support for clients trading on B.B. Bank’s electronic offerings.
                            Our breadth of market coverage, consistency of product performance and our ability to customize algo
                            speciﬁcs across markets and products will help you manage costs and efficiently access liquidity.
                        </p>
                    </div>
                </Info1> : null}
                {click2 ? <Info2>
                    <CommoditiesIcon />
                    <div>
                        <h1>Commodity fundamentals and price data</h1>
                        <p>While others are hunting for data across different source sites, you can go straight to the numbers and start
                            performing meaningful analysis across the commodity markets. For each asset class, we integrate
                            data from multiple sources so you don’t have to.
                        </p>
                    </div>
                </Info2> : null}
                {click3 ? <Info3>
                    <BitcoinIcon />
                    <div>
                        <h1>Buy and sell Bitcoin, Ethereum and other cryptocurrencies </h1>
                        <p>In an easy and transparent way, we compare the best price of Bitcoin, Ethereum and USDT in several exchanges
                            with all the existing rates, giving you the best option to buy or sell in real time. So you can quickly trade
                            your cryptocurrencies at the best price and never miss out on a good offer!</p>
                    </div>
                </Info3> : null}

            </Content>
        </Container>
    );
}

export default Painel;