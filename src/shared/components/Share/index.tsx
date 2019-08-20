import React, { useEffect } from 'react';
import styled from 'styled-components';

const ShareButtonContainer = styled.div`
    padding: 15px 0;
    text-align: center;
`;

interface AddThis {
    layers: {
        refresh: () => void;
    };
}

declare let addthis: AddThis;

const Share: React.FC = () => {
    useEffect(() => {
        if (!addthis) {
            window.addEventListener('load', () => addthis.layers.refresh());
        } else {
            addthis.layers.refresh();
        }
    });

    return <ShareButtonContainer className="addthis_inline_share_toolbox" />;
};

export default Share;
