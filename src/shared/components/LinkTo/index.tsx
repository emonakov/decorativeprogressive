import React from 'react';
import { Link } from "react-router-dom";

import { scrollTo } from '../../utils/dom';

interface LinkToProps {
    to: string,
    scrollToHero?: boolean,
}

const LinkTo: React.FC<LinkToProps> = ({ children, to, scrollToHero }) => {
    const props = {
        to,
        onClick: () => scrollToHero && scrollTo('.hero'),
    };

    return (
        <Link {...props}>
            {children}
        </Link>
    );
};

export default LinkTo;
