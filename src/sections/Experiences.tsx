import React, { useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';

import { Heading } from '../components/Texts';
import { Tab, TabContent } from '../components/TabList';
import { strings } from '../utils/strings';

interface IExperiencesProps extends React.HTMLAttributes<HTMLDivElement> {};

export const Experiences: React.FC<IExperiencesProps> = ({
    ...props
}) => {
    const data = useStaticQuery(graphql`
        query {
            experiences: allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }){
                edges {
                    node {
                        frontmatter {
                            range
                            title
                            url
                            company
                            featuredImage {
                                childImageSharp {
                                    fluid(maxWidth: 400) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            featuredImage2 {
                                childImageSharp {
                                    fluid(maxWidth: 400) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            imageUrl
                            imageUrl2
                        }
                        html
                    }
                }
            }
        }
    `);
    const experiencesData = data.experiences.edges;
    const [active, setActive] = useState(0);
    return (
        <Wrapper id='experiences' {...props}>
            <Heading numberText='02.'>
                {strings.experiences.title}
            </Heading>
            <TabTitleWrapper>
                {!!experiencesData &&
                    experiencesData.map((experience: any, i: number) => {
                        const { frontmatter } = experience.node;
                        const { company } = frontmatter;
                        return (
                            <Tab 
                                key={company}
                                role='tab'
                                aria-selected={active === i}
                                aria-controls={company}
                                isActive={active === i}
                                onClick={() => setActive(i)}
                            >
                                {company}
                            </Tab>
                        )
                    })
                }
            </TabTitleWrapper>
            <>
                {!!experiencesData &&
                    experiencesData.map((experience: any, i: number) => {
                        const { frontmatter, html } = experience.node;
                        const { 
                            title, 
                            url, 
                            range, 
                            featuredImage, 
                            featuredImage2,
                            company, 
                            imageUrl,
                            imageUrl2
                        } = frontmatter;
                        return (
                            <TabContent
                                key={company}
                                hidden={active !== i}
                            >
                                <Container>
                                    <Sh3>{title}</Sh3>
                                    &nbsp;
                                    <a href={url}>
                                        @&nbsp;
                                        {company}
                                    </a>
                                </Container>
                                <Sh5>{range}</Sh5>
                                <div dangerouslySetInnerHTML={{ __html: html }} />
                                {!!featuredImage && (
                                    <>
                                        <p style={{ paddingTop: '10px', textAlign: 'center'}}><span>
                                            {strings.experiences.samples}
                                        </span></p>
                                        <ImageSamples>
                                            <SImageWrapper onClick={() => navigate(imageUrl)}>
                                                <Img 
                                                    fluid={featuredImage.childImageSharp.fluid}
                                                    alt={company}
                                                    style={{ borderRadius: '8px', margin: '0 10px' }}
                                                />
                                            </SImageWrapper>
                                            {!!featuredImage2 && (
                                                <SImageWrapper onClick={() => navigate(imageUrl2)}>
                                                    <Img 
                                                        fluid={featuredImage2.childImageSharp.fluid}
                                                        alt={company}
                                                        style={{ borderRadius: '8px', margin: '0 10px'}}
                                                    />
                                                </SImageWrapper>
                                            )}
                                        </ImageSamples>
                                    </>
                                )}
                            </TabContent>
                        );
                    })
                }
            </>
        </Wrapper>
    );
};

const Wrapper = styled.div`
`;
const TabTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 20px;
    overflow-x: auto;
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: -20px;
    font-size: 1.55rem;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;
const SImageWrapper = styled.div`
    max-width: 270px;
    opacity: 0.9;
    ${({ theme }) => `
        border-radius: ${theme.radius.border};
        &:hover {
            transform: scale(1.05);
            cursor: pointer;
            transition: ${theme.transitions.cubicBezier};
        }
        @media (max-width: ${theme.media.tablet}px) {
            padding: 30px 0;
            margin: auto;
            width: 250px;
        }
    `};
`;
const ImageSamples = styled.div`
    text-align: center;
    & > * {
        flex-grow: 1;
    }
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 500px) {
        flex-direction: column;
        text-align: center;
        img:last-child {
            padding-bottom: 30px;
        }
    }
`;
const Sh5 = styled.h5` 
    @media (max-width: 500px) {
        text-align: center;
        padding-top: 10px;
    }
`;
const Sh3 = styled.h3`
    @media (max-width: 500px) {
        margin-bottom: -20px;
    }
`;