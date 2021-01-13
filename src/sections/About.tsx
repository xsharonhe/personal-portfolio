import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'; 

import { Heading, Bold } from '../components/Texts';
import { strings } from '../utils/strings';

interface IAboutProps extends React.HTMLAttributes<HTMLDivElement> {};

export const About: React.FC<IAboutProps> = ({
    ...props
}) => {
    return (
        <Wrapper id='about' {...props}>
            <Heading numberText='01.'>
                {strings.about.title}
            </Heading>
            <p> 
                Hello! I'm Sharon, a software engineering student at the Univeristy of Waterloo, 
                and I'm passionate about creating meaningful <Bold> data-driven </Bold> applications. 
                Most of my experiences come from building websites, although I have dabbled in some
                mobile programming. I'm currently learning about <Bold>natural language
                processing</Bold> (NLP) and <Bold>cloud computing</Bold> (e.g. AWS, GCP).
            </p>
            <p>
                I fell in love with building software because I believe in technology's ability to 
                develop creative solutions for the complex issues our society faces. I previously 
                volunteered with the <a href='https://scholar.harvard.edu/cvt/home'><Bold isLink={true}>Coronavirus Visualization Team</Bold></a>,
                a student organization founded at Harvard to fight the COVID-19 infodemic, to analyze the pandemic's
                impact on the aviation industry. Currently, I'm volunteering at <a href='https://www.unitic.net'>
                <a href='https://www.linkedin.com/company/uni-tic/?originalSubdomain=ca'>Unitic</a></a>, building a machine-learning based
                diagnostic tool for Tourette's Syndrome, and <a href='https://pumprofessionals.org'>PuMP</a> as a web developer.
            </p>
            <p>
                {strings.about.third}
            </p>
            <TechWrapper>
                {strings.technologies && strings.technologies.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </TechWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    line-height: 1.75;
`;
const TechWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(160px, 320px)) ;
    margin-top: 20px;
    overflow: hidden;
    ${({ theme }) => `
        @media (max-width: ${theme.media.mobile}px) {
            display: flex;
            flex-direction: column;
        }
    `};
`;