import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { Heading } from '../components/Texts';
import { strings } from '../utils/strings';
import { Past } from './Past';
import { Hackathons } from './Hackathons';

interface IProjectsProps extends React.HTMLAttributes<HTMLDivElement> {};

export const Projects: React.FC<IProjectsProps> = ({
    ...props
}) => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         hackathons: allMarkdownRemark (
    //             filter: { fileAbsolutePath: { regex: "/projects/" } }
    //         ) {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         title
    //                     }
    //                     html
    //                 }
    //             }
    //         }
    //     }
    // `);
    // const projectsData = data.hackathons.edges;
    return (
        <Wrapper id='projects' {...props}>
            <Heading numberText='03.'>
                {strings.projects.title}
            </Heading>
            <p style={{ fontSize: '1.4rem' }}> 
                <span>{strings.projects.caption}</span> 
            </p>
            <Past />
            <Hackathons />
        </Wrapper>
    );
};

const Wrapper = styled.div`
`;