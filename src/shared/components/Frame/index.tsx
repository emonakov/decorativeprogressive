import React from 'react';
import styled from 'styled-components';

import { scrollTo } from '../../utils/dom';
import {
    frameBackground,
    textColor,
    frameBorderColor,
    linkHoverColor,
    frameBorderHoverColor,
} from '../../colors';

interface Props {
    scrollToEl?: string;
}

const FrameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
    background: ${frameBackground};
    color: ${textColor};
    border: ${frameBorderColor} solid 4px;
    cursor: pointer;
    transition: color 2s ease-out, border 2s ease-out;

    &:hover {
        color: ${linkHoverColor};
        border-color: ${frameBorderHoverColor};
    }
`;

const Frame: React.FC<Props> = ({ children, scrollToEl }) => (
    <FrameWrapper onClick={() => (scrollToEl && scrollTo(scrollToEl, false))}>
        {children}
    </FrameWrapper>
);

export default Frame;
