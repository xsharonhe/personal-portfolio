
import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

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
                pastData.map((past: any) => {
                    const { frontmatter, html } = past.node;
                    const { title } = frontmatter;
                    return (
                        <>
                            <p key={title} style={{ fontSize: '1.4rem' }}>
                                <SContent>{title}</SContent>
                            </p>
                            <div dangerouslySetInnerHTML={{ __html: html }} />
                        </>
                    )
                })
            }
        </div>
    );
};
const SContent = styled.p`
    ${({ theme }) => `
        color: ${theme.colors.text};
    `};
`;