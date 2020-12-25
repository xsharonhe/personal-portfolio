import React from 'react';
import styled from 'styled-components';
import { Heading } from '../components/Texts/Heading';

interface IAboutProps extends React.HTMLAttributes<HTMLDivElement> {};

export const About: React.FC<IAboutProps> = ({
    ...props
}) => {
    return (
        <Wrapper id='about' {...props}>
            <Heading numberText='01.'>
                About Me
            </Heading>
            <p> Hello! I'm Sharon, a software engineering student at the Univeristy of Waterloo, 
                and 
            </p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    line-height: 1.25;
`;