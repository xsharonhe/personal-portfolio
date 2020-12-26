import React from 'react';
import styled from 'styled-components';

import { Heading } from '../components/Texts';
import { strings } from '../utils/strings';

interface IProjectsProps extends React.HTMLAttributes<HTMLDivElement> {};

export const Projects: React.FC<IProjectsProps> = ({
    ...props
}) => {
    return (
        <Wrapper id='projects' {...props}>
            <Heading numberText='03.'>
                {strings.projects.title}
            </Heading>
        </Wrapper>
    );
};

const Wrapper = styled.div`
`;