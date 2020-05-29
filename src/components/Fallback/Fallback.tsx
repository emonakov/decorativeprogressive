import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Loading from 'react-loading';

const FallbackContainer = styled.section`
    position: absolute;
    left: 50%;
    top: 50%;
`;

const Fallback: React.FC = () => {
    const theme = useContext(ThemeContext);

    return (
        <FallbackContainer>
            <Loading type="bars" color={theme.buttonColor} />
        </FallbackContainer>
    );
};

export default Fallback;
