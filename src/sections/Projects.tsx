import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Github from '@styled-icons/bootstrap/Github';
import Img from 'gatsby-image';
import LinkExternal from '@styled-icons/boxicons-regular/LinkExternal';

import { Heading } from '../components/Texts';
import { strings } from '../utils/strings';
import { Past } from './Past';
import { Hackathons } from './Hackathons';

interface IProjectsProps extends React.HTMLAttributes<HTMLDivElement> {};

export const Projects: React.FC<IProjectsProps> = ({
    ...props
}) => {
    const data = useStaticQuery(graphql`
        query {
            hackathons: allMarkdownRemark (
                filter: { fileAbsolutePath: { regex: "/projects/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            github
                            external
                            tech
                            featuredImage {
                                childImageSharp {
                                    fluid(maxWidth: 400) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        html
                    }
                }
            }
        }
    `);
    const projectsData = data.hackathons.edges;
    return (
        <Wrapper id='projects' {...props}>
            <Heading numberText='03.'>
                {strings.projects.title}
            </Heading>
            <ProjectsWrapper>
                {!!projectsData &&
                    projectsData.map((project: any) => {
                        const { frontmatter, html } = project.node;
                        const { 
                            title, 
                            featuredImage, 
                            tech,
                            github,
                            external,
                        } = frontmatter;
                        return (
                            <SProject key={title}>
                                <SImageWrapper>
                                    <a href={external ? external : github}>
                                        <Img 
                                            fluid={featuredImage.childImageSharp.fluid}
                                            alt={title}
                                            style={{ borderRadius: '8px', margin: '0 10px' }}
                                        />
                                    </a>
                                </SImageWrapper>
                                <h2><span>{title}</span></h2>
                                <TechWrapper>
                                    {!!tech && tech.map((skill: any) => (
                                        <p key={skill}>
                                            {skill}&nbsp;</p>
                                    ))}
                                </TechWrapper>
                                {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
                            </SProject>
                        )
                    })
                }
            </ProjectsWrapper>
            <Past style={{ paddingTop: '50px' }} />
            <Hackathons />
        </Wrapper>
    );
};

const Wrapper = styled.div`
`;
const SProject = styled.div`
`;
const SImageWrapper = styled.div`
    max-width: 400px;
    opacity: 0.9;
    position: relative;
    z-index: 5;
    ${({ theme }) => `
        border-radius: ${theme.radius.border};
        &:hover {
            transform: scale(1.05);
            cursor: pointer;
            transition: ${theme.transitions.cubicBezier};
        }
    `};
`;
const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    ${({ theme }) => `
        @media (max-width: ${theme.size.tablet}px) {
            grid-template-columns: 1fr;
        }
    `};
`;
const TechWrapper = styled.div`
    ${({ theme }) => `
        display: flex;
        flex-direction: row;
    `};
`;