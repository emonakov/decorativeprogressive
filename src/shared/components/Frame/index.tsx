import React from 'react';
import './styles/frame.css';

interface Props {
    classProp?: string;
    onclick?: () => void,
}

const Frame: React.FC<Props> = ({ children, classProp, onclick }) => {
    return (
        <div className={`${classProp} frame_shared`} onClick={onclick}>
            {children}
        </div>
    );
};

export default Frame;
