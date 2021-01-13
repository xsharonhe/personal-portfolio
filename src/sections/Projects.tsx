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
                filter: { fileAbsolutePath: { regex: "/projects/" } },
                sort: { fields: [frontmatter___order], order: ASC }
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
            <SContent>{strings.projects.caption}</SContent>
            <br />
            <br />
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
                            // <Project key={title} onClick={() => navigate(github)}>
                            //     <ProjectImage>
                            //         <Img 
                            //             fluid={featuredImage.childImageSharp.fluid}
                            //             alt={title}
                            //             style={{ borderRadius: '8px', margin: '0 10px' }}  
                            //         />
                            //     </ProjectImage>
                            //     <ProjectText>
                            //         <h2>{title}</h2>
                            //     </ProjectText>
                            // </Project>
                            <SProject key={title} onClick={() => navigate(`${external ? external : github}`)}>
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
                                        <SHeader>{title}</SHeader>
                                        {/* {!!tech && <Sh5>{tech}</Sh5>} */}
                                    </TechWrapper>
                                    <BottomTextWrapper>
                                        <div dangerouslySetInnerHTML={{ __html: html }} />
                                        {/* <IconWrapper> 
                                            {!!github && (
                                                <SIcon icon={Github} onClick={() => navigate(github)} />
                                            )}
                                            {!!external && (
                                                <SIcon icon={LinkExternal} onClick={() => navigate(external)} />
                                            )}
                                        </IconWrapper> */}
                                    </BottomTextWrapper>
                                </TextWrapper>
                            </SProject>
                        )
                    })
                }
            </ProjectsWrapper>
            <Past style={{ paddingTop: '50px' }} />
            {/* <Hackathons style={{ paddingTop: '30px' }} /> */}
        </Wrapper>
    );
};

const Project = styled.div`
    margin-bottom: 50px;
`;
const ProjectText = styled.div`
    text-align: center;
    ${({ theme }) => `
        background-color: ${theme.colors.secondary};
    `};
    max-width: 530px;
    margin: -40px 0 0 15px;
    z-index: 999;
`;
const ProjectImage = styled.div`
    z-index: -3;
    position: relative;
`;
const Wrapper = styled.div`
`;
const SProject = styled.div`    
    margin: 0 50px;
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
    top: 50px;
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
    grid-template-columns: 1fr 1fr;
    margin-top: -50px;
    ${({ theme }) => `
        @media (max-width: ${theme.media.laptop}px) {
            & > * {
                flex-grow: 1;
            }
            display: flex;
            flex-direction: column;
            margin-top: -20px;
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
    margin-bottom: -20px;
    /* justify-content: space-between;
    margin-bottom: -20px;
    @media (max-width: 2200px) {
        flex-direction: column;
    }
    @media (max-width: 1800px) {
        flex-direction: row;
        align-items: center;
    }
    @media (max-width: 1450px) {
        flex-direction: column;
    }
    @media (max-width: 1300px) {
        flex-direction: row;
        align-items: center;
    }
    @media (max-width: 550px) {
        flex-direction: column;
    } */
`;
const TextWrapper = styled.div`
    max-width: 430px;
    padding: 10px 30px;
    ${({ theme }) => `
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.background};
        border-radius: ${theme.radius.default};
        @media (max-width: ${theme.media.laptop}px) {
            margin: auto;
        }
        @media (max-width: ${theme.media.mobile}px) {
            font-size: ${theme.size.default};
        }
    `};
`;
const SContent = styled.p`
    font-size: 1.4rem;
    margin-top: -10px;
    ${({ theme }) => `
        color: ${theme.colors.text};
        font-size: ${theme.size.defaultLarger};
    `};
`;
const SHeader = styled.h2`
    text-align: center;
    font-weight: bold;
    ${({ theme }) => `
        color: ${theme.colors.primary};
        font-family: ${theme.font.header};
    `};
    /* ${({ theme }) => `
        color: ${theme.colors.primary};
        @media (max-width: 2200px) {
            margin-bottom: -20px;
        }
        @media (max-width: 1800px) {
            margin-bottom: 20px;
        }
        @media (max-width: 1450px) {
            margin-bottom: -20px;
        }
        @media (max-width: 1300px) {
            margin-bottom: 20px;
        }
        @media (max-width: 550px) {
            font-size: ${theme.size.h3};
            margin-bottom: -30px;
        }
        font-family: ${theme.font.header};
    `}; */
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
    margin-left: 20px;
    @media(max-width: 2200px) {
        margin-left: 0;
        justify-content: center;
    }
    @media(max-width: 1800px) {
        justify-content: flex-end;
        margin-left: 20px;
    }
    @media(max-width: 650px) {
        margin-left: 0;
        justify-content: center;
    }
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
    @media(max-width: 2200px) {
        flex-direction: column;
        padding-bottom: 20px;
    }
    @media(max-width: 1800px) {
        flex-direction: row;
        padding-bottom: 0;
    }
    ${({ theme }) => `
        font-size: ${theme.size.default};
        @media(max-width: 650px) {
            flex-direction: column;
            padding-bottom: 20px;
            font-size: ${theme.size.small};
        }
    `};
`;