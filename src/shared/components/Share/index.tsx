import React from 'react';
import styled from 'styled-components';

const ShareButtonContainer = styled.div`
    padding: 15px 0;
    text-align: center;
`;

const Share: React.FC = () => (
    <ShareButtonContainer className="addthis_inline_share_toolbox" />
);

export default Share;
