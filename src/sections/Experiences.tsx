import React from 'react';
import styled from 'styled-components';

import { Heading } from '../components/Texts/Heading';

interface IExperiencesProps extends React.HTMLAttributes<HTMLDivElement> {};

export const Experiences: React.FC<IExperiencesProps> = ({
    ...props
}) => {
    return (
        <Wrapper id='experiences' {...props}>
            <Heading numberText='02.'>
                Experiences
            </Heading>
        </Wrapper>
    );
};

const Wrapper = styled.div`

`;