import React, { useState, useEffect } from 'react';
import parse from 'react-html-parser';

import ContentWrapper from '../../shared/components/ContentWrapper';
import getAboutContent from '../../mocks/about';

const HomePageTextWrapper: React.FC = () => {
    const [about, setAbout] = useState({
        loading: true,
        content: {},
        errors: [],
    });
    useEffect(() => {
        getAboutContent()
            .then(({ loading, content }) => {
                setAbout({ loading, content: parse(content), errors: [] });
            });
    }, []);

    const { loading, content } = about;

    return (!loading && (
        <ContentWrapper>
            {content}
        </ContentWrapper>
    )) || null;
};

export default HomePageTextWrapper;
