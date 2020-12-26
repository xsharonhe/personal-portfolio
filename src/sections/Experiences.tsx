import React from 'react';
import styled from 'styled-components';

import { Heading } from '../components/Texts';
import { strings } from '../utils/strings';

interface IExperiencesProps extends React.HTMLAttributes<HTMLDivElement> {};

export const Experiences: React.FC<IExperiencesProps> = ({
    ...props
}) => {
    return (
        <Wrapper id='experiences' {...props}>
            <Heading numberText='02.'>
                {strings.experiences.title}
            </Heading>
        </Wrapper>
    );
};

const Wrapper = styled.div`

`;