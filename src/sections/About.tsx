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
                Most of my experiences come from building websites, although I have dabbled with some 
                mobile programming. I'm fascinated by the emerging fields of <Bold>natural language
                processing</Bold> (NLP) and <Bold>deep learning</Bold>, and am currently 
                learning <Bold>big-data technologies</Bold> (e.g. PySpark, Hadoop).
            </p>
            <br></br>
            <p>
                I fell in love with building software because I believe in technology's ability to 
                develop creative solutions for the complex issues our society faces. I previously 
                volunteered with the <a href='https://scholar.harvard.edu/cvt/home'><Bold isLink={true}>Coronavirus Visualization Team</Bold></a>,
                a student organization founded at Harvard to fight the COVID-19 infodemic, to analyze the pandemic's
                impact on the aviation industry. Currently, I'm volunteering at <a href='https://www.unitic.net'>
                <Bold isLink={true}>Unitic</Bold></a>, building a machine-learning based
                diagnostic tool for Tourette's Syndrome, and y as a web developer.
                See more about my experiences <Link to='#experiences'> <Bold isLink={true}>here</Bold></Link>.
            </p>
            <br></br>
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
        li {
            position: relative;
            margin-bottom: 10px;
            padding-left: 10px;
            color: ${theme.colors.primary};
            list-style-type: circle;
        }
    `};
`;