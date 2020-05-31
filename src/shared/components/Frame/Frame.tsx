import React from 'react';
import styled from 'styled-components';

import { scrollTo } from '../../utils/dom';

interface Props {
    scrollToEl?: string;
}

const FrameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${({ theme }) => theme.paddingMd};
    background: ${({ theme }) => theme.frameBackground};
    color: ${({ theme }) => theme.textColor};
    border: ${({ theme }) => theme.frameBorderColor} solid 4px;
    cursor: pointer;
    transition: color 2s ease-out, border 2s ease-out;
    z-index: 1;

    &:hover {
        color: ${({ theme }) => theme.linkHoverColor};
        border-color: ${({ theme }) => theme.frameBorderHoverColor};
    }
`;

const Frame: React.FC<Props> = ({ children, scrollToEl, ...props }) => (
    <FrameWrapper {...props} onClick={() => (scrollToEl && scrollTo(scrollToEl, false))}>
        {children}
    </FrameWrapper>
);

export default Frame;
