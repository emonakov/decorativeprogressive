import React, { useState, useEffect, useCallback } from 'react';
import ContentWrapper from '../../shared/components/ContentWrapper';
import getAboutContent from '../../mocks/about';

const HomePageTextWrapper: React.FC = () => {
    const [about, setAbout] = useState({
        loading: true,
        content: '',
        errors: [],
    });
    const getAboutContentCallback = useCallback(() => (getAboutContent()), []);
    useEffect(() => {
        (async () => {
            const aboutContent = await getAboutContentCallback();
            setAbout(aboutContent);
        })();
    }, [getAboutContentCallback]);

    const { loading, content } = about;

    return (!loading && (
        <ContentWrapper>
            {content}
        </ContentWrapper>
    )) || null;
};

export default HomePageTextWrapper;
