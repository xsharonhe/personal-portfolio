import React, { useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

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
                    experiencesData.map((experience: any, i) => {
                        const { frontmatter, html } = experience.node;
                        const { title, url, range, company } = frontmatter;
                        return (
                            <TabContent
                                key={company}
                                hidden={active !== i}
                            >
                                <Container>
                                    <h4>{title}</h4>
                                    &nbsp;
                                    <a href={url}>
                                        <span>@</span>&nbsp;
                                        {company}
                                    </a>
                                </Container>
                                <div dangerouslySetInnerHTML={{ __html: html }} />
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
`;