import React, { useState } from 'react';

import { Container, Content, Menu, Link, Info1, Info2, Info3, PlatformIcon } from './styles';

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
                    <Link onClick={handleClick1}>Stock market</Link>
                    <Link onClick={handleClick2}>Futures & Options</Link>
                    <Link onClick={handleClick3}>3</Link>
                </Menu>
                {click1 ? <Info1>
                    <div>
                        <h1>Hello world 1</h1>
                        <p>Teste1</p>
                        <p>Teste1</p>
                    </div>
                </Info1> : null}
                {click2 ? <Info2>
                    <PlatformIcon />
                    <div>
                        <h1>Electronic trading solutions available on B.B. Bank </h1>
                        <p>B.B. Bank’s F&O Electronic Client Solutions provides execution consultancy,
                            risk management and trading support for clients trading on B.B. Bank’s electronic offerings.
                            Our breadth of market coverage, consistency of product performance and our ability to customize algo
                            speciﬁcs across markets and products will help you manage costs and efficiently access liquidity. </p>
                        <p>Teste2</p>
                    </div>
                </Info2> : null}
                {click3 ? <Info3>
                    <div>
                        <h1>Hello world 3</h1>
                        <p>Teste3</p>
                        <p>Teste3</p>
                    </div>
                </Info3> : null}

            </Content>
        </Container>
    );
}

export default Painel;