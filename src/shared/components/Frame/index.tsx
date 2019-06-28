import React from 'react';
import styled from 'styled-components';

import { scrollTo } from '../../../shared/utils/dom';

interface Props {
    scrollToEl: string;
}

const FrameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
    background: #f5f5dc9c;
    color: #00000099;
    border: #d2a71375 solid 4px;
    cursor: pointer;
    transition: color 2s ease-out, border 2s ease-out;

    &:hover {
        color: #000;
        background: #f5f5dc9c;
        border-color: #d2a713cc;
    }
`;

const Frame: React.FC<Props> = ({ children, scrollToEl }) => {
    return (
        <FrameWrapper
            onClick={() => {
                scrollTo(scrollToEl);
            }}
        >
            {children}
        </FrameWrapper>
    );
};

export default Frame;
