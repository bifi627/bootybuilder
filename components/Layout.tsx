import React from 'react';
import styled from "styled-components";
import Footer from './Footer';
import Header from './Header';

const Box = styled.div`
    height: 98vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Content = styled.div`
`;

const Layout = props => (
    <Box>
        <Header />
        <Content>
            {props.children}
        </Content>
        <Footer />
    </Box>
);

export default Layout;