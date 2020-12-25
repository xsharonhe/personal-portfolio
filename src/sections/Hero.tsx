import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Heading } from '../components/Texts/Heading';
import { media } from '../utils/media';

interface IAboutProps extends React.HTMLAttributes<HTMLDivElement> {
    
};

export const Hero: React.FC<IAboutProps> = ({
    ...props
}) => {
    const data = useStaticQuery(graphql`
        query {
            fileName: file(relativePath: { eq: "profile.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, maxHeight: 200) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <Container {...props}>
            <Img fluid={data.fileName.childImageSharp.fluid} alt=''/>
        </Container>
    );
};

const Container = styled.div`
    max-width: 250px;
    ${media(
        'tablet',
        `
        display: flex;
        justify-content: center;
        align-items: center;
        `
    )}
`;