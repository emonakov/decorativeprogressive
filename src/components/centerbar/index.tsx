import React from 'react';

import { CENTERBAR_CSS_CLASS } from './styles/constants';
import './styles/center-bar.css';

const CenterBar: React.FC = ({ children }) => (
    <section className={CENTERBAR_CSS_CLASS}>{children}</section>
);

export default CenterBar;
