import React from 'react';
import styled from 'styled-components';

import { Heading } from '../components/Texts/Heading';

interface IAboutProps extends React.HTMLAttributes<HTMLDivElement> {
    
};

export const About: React.FC<IAboutProps> = ({
    ...props
}) => {
    return (
        <Wrapper {...props}>
            <Heading numberText='01.'>
            About Me
            </Heading>
        </Wrapper>
    );
};

const Wrapper = styled.div`
`;