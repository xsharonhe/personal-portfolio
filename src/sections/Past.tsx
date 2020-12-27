
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { strings } from '../utils/strings';

interface IPastProps extends React.HTMLAttributes<HTMLDivElement> {};

export const Past: React.FC<IPastProps> = ({
    ...props
}) => {
    const data = useStaticQuery(graphql`
        query {
            past: allMarkdownRemark (
                filter: { fileAbsolutePath: { regex: "/past/" } }
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
    const pastData = data.past.edges;
    return (
        <div style={{ lineHeight: 1.5 }} {...props}>
            {!!pastData &&
                pastData.map((project: any) => {
                    const { frontmatter, html } = project.node;
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