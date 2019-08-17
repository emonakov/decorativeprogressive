import styled from 'styled-components';

const Button = styled.button`
    font-family: Julius Sans One;
    background: ${({ theme }) => theme.buttonColor};
    font-size: 1.2rem;
    color: white;
    padding: 20px 40px;
    font-weight: bold;
    border-style: none;
    outline: none;
    cursor: pointer;
    transition: background 0.5s ease-out;

    &:active {
        background: ${({ theme }) => theme.ButtonActiveColor};
    }
`;

export default Button;
