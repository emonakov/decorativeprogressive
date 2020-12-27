import React from 'react';
import styled from 'styled-components';

const DecorUpper = styled.div`
    display: block;
    width: 100%;
    height: ${({ theme }) => theme.menuBorderHeight};
    border-right: ${({ theme }) => theme.menuBorderStyle};
    border-left: ${({ theme }) => theme.menuBorderStyle};
    border-bottom: ${({ theme }) => theme.menuBorderStyle};
    border-color: ${({ theme }) => theme.menuBorderColor};
`;

const DecorLower = styled.div`
    display: block;
    width: 100%;
    border-top: ${({ theme }) => theme.menuBorderStyle};
    height: ${({ theme }) => theme.menuBorderHeight};
    border-right: ${({ theme }) => theme.menuBorderStyle};
    border-left: ${({ theme }) => theme.menuBorderStyle};
    border-top: ${({ theme }) => theme.menuBorderStyle};
    border-color: ${({ theme }) => theme.menuBorderColor};
`;

const Decorative: React.FC = ({ children }) => (
    <>
        <DecorUpper />
        {children}
        <DecorLower />
    </>
);

export default Decorative;
