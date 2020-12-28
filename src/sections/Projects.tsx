import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';
import { Github } from '@styled-icons/bootstrap/Github';
import { LinkExternal } from '@styled-icons/boxicons-regular/LinkExternal';

import { Heading } from '../components/Texts';
import { Icon } from '../components';
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
                                <TextWrapper>
                                    <TechWrapper>
                                        <Sh2>{title}</Sh2>
                                        {!!tech && <Sh5>{tech}</Sh5>}
                                    </TechWrapper>
                                    <BottomTextWrapper>
                                        <div dangerouslySetInnerHTML={{ __html: html }} />
                                        <IconWrapper> 
                                            <SIcon icon={Github} onClick={() => navigate(github)} />
                                            <SIcon icon={LinkExternal} onClick={() => navigate(external)} />
                                        </IconWrapper>
                                    </BottomTextWrapper>
                                </TextWrapper>
                            </SProject>
                        )
                    })
                }
            </ProjectsWrapper>
            <Past style={{ paddingTop: '50px' }} />
            <Hackathons style={{ paddingTop: '30px' }} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
`;
const SProject = styled.div`    
    margin: 40px;
    ${({ theme }) => `
        @media (max-width: ${theme.media.laptop}px) {
            margin: 20px;
        }
        &:hover {
            transform: scale(1.03);
            cursor: pointer;
            transition: ${theme.transitions.cubicBezier};
        }
    `};
`;
const SImageWrapper = styled.div`
    max-width: 500px;
    opacity: 0.9;
    z-index: -3;
    position: relative;
    top: 100px;
    left: 0;
    ${({ theme }) => `
        border-radius: ${theme.radius.border};
        @media (max-width: ${theme.media.laptop}px) {
            margin: auto;
            top: 50px;
        }
    `};
`;
const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: -40px;
    ${({ theme }) => `
        @media (max-width: 1800px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: ${theme.media.laptop}px) {
            & > * {
                flex-grow: 1;
            }
            display: flex;
            flex-direction: column;
        }
        @media(max-width: ${theme.media.mobile}px) {
            font-size: ${theme.size.default};
        }
    `};
`;
const TechWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: -20px;
    ${({ theme }) => `
        @media (max-width: ${theme.media.mobile}px) {
            flex-direction: column;
        }
    `};
`;
const TextWrapper = styled.div`
    max-width: 430px;
    padding: 10px 30px;
    ${({ theme }) => `
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.text};
        border-radius: ${theme.radius.default};
        @media (max-width: ${theme.media.laptop}px) {
            margin: auto;
        }
        @media (max-width: ${theme.media.mobile}px) {
            font-size: ${theme.size.default};
        }
    `};
`;
const Sh2 = styled.h2`
    ${({ theme }) => `
        font-family: ${theme.font.header};
        color: ${theme.colors.primary};
        @media (max-width: 500px) {
            margin-bottom: -20px;
        }
        @media (max-width: ${theme.media.mobile}px) {
            font-size: ${theme.size.h3};
        }
    `};
`;
const Sh5 = styled.h5` 
    @media (max-width: 500px) {
        text-align: center;
        padding-top: 10px;
    }
    ${({ theme }) => `
        font-size: ${theme.size.default};
        color: ${theme.colors.primary};
        @media (max-width: ${theme.media.mobile}px) {
            font-size: 0.8rem;
        }
    `};
`;
const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const SIcon = styled(Icon)`
    ${({ theme }) => `
        :hover {
            color: ${theme.colors.primary};
            transition: ${theme.transitions.cubicBezier};
        }
    `};
`; 
const BottomTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: justify;
    ${({ theme }) => `
        @media(max-width: ${theme.media.mobile}px) {
            flex-direction: column;
            padding-bottom: 20px;
            font-size: ${theme.size.small};
        }
    `};
`;