import React, { useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { Heading } from '../components';
import { Tab, TabContent } from '../components/TabList';
import { strings } from '../utils/strings';

interface IExperiencesProps extends React.HTMLAttributes<HTMLDivElement> {};

export const Experiences: React.FC<IExperiencesProps> = ({
    ...props
}) => {
    const data = useStaticQuery(graphql`
        query {
            experiences: allMarkdownRemark (
                filter: { fileAbsolutePath: { regex: "/experiences/" } }
                sort: { fields: [frontmatter___date], order: DESC }
            ){
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
                        const { title, url, range, company } = frontmatter;
                        return (
                            <STabContent
                                key={company}
                                role='tab-panel'
                                hidden={active !== i}
                                aria-hidden={active !== i}
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
                                <SContent dangerouslySetInnerHTML={{ __html: html }} />
                            </STabContent>
                        );
                    })
                }
            </>
        </Wrapper>
    );
};

const Wrapper = styled.div``;
const TabTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 20px;
    overflow-x: auto;
    /* @media (max-width: 600px) {
        width: calc(100% + 260px);
    }
    @media (max-width: 500px) {
        width: calc(100% + 320px);
    }
    @media (max-width: 400px) {
        width: calc(100% + 420px);
    }
    @media (max-width: 350px) {
        width: calc(100% + 520px);
    } */
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: -20px;
    font-size: 1.55rem;
    @media (max-width: 500px) {
        flex-direction: column;
        font-size: 1.3rem;
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
const STabContent = styled(TabContent)`
    animation: fadeIn ease 1.5s;
    -webkit-animation: fadeIn ease 1.5s;
    -moz-animation: fadeIn ease 1.5s;
    -o-animation: fadeIn ease 1.5s;
    -ms-animation: fadeIn ease 1.5s;
    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-moz-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-webkit-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-o-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-ms-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
`;
const SContent = styled.div`
    ${({ theme }) => ` 
        @media (max-width: ${theme.media.tablet}px) {
            padding-right: 10px;
        }
        @media (max-width: ${theme.media.mobile}px) {
            padding-right: 30px;
        }
    `};
`;