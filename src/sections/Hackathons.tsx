import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Heading } from '../components/Texts';
import { strings } from '../utils/strings';
import { Past } from './Past';

interface IHackathonsProps extends React.HTMLAttributes<HTMLDivElement> {};

export const Hackathons: React.FC<IHackathonsProps> = ({
    ...props
}) => {
    const data = useStaticQuery(graphql`
        query {
            hackathons: allMarkdownRemark (
                filter: { fileAbsolutePath: { regex: "/hackathons/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                        }
                        html
                    }
                }
            }
        }
    `);
    const hackathonData = data.hackathons.edges;
    return (
        <div style={{ lineHeight: 1.5 }} {...props}>
            {!!hackathonData &&
                hackathonData.map((hackathon: any) => {
                    const { frontmatter, html } = hackathon.node;
                    const { title } = frontmatter;
                    return (
                        <>
                            <p key={title} style={{ fontSize: '1.4rem' }}>
                                <span>{title}</span>
                            </p>
                            <div dangerouslySetInnerHTML={{ __html: html }} />
                        </>
                    )
                })
            }
        </div>
    );
};