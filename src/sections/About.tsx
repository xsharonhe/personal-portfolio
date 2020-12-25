import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';

export interface IAboutProps extends React.HTMLAttributes<HTMLDivElement> {
    
};

export const About: React.FC<IAboutProps> = ({
    ...props
}) => {
    const data = useStaticQuery(graphql`
        query {
            profile: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "profile.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300, traceSVG: { color: "#79a3b1" }) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `);
    return (
        <Wrapper id='#about' {...props}>
            <div>
                <p> Hey there! My name is </p>
                <SName> 
                    Sharon He.
                </SName>
                <p> I love to build software. </p>
            </div>
            <SImageWrapper onClick={() => navigate('')}>
                <Img 
                    fluid={data.profile.childImageSharp.fluid}
                    alt='Profile'
                    className='profileImg'
                    style={{ borderRadius: '20px', border: '4px solid #79a3b1'}}
                />
                <Caption> Let's connect! </Caption>
            </SImageWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    line-height: 1;
    & > * {
        flex-grow: 1;
    }
    display: flex;
    flex-direction: row;
    ${({ theme }) => `
        @media (max-width: ${theme.media.tablet}px) {
            flex-direction: column;
        }
    `};
`;
const SName = styled.h1`
    ${({ theme }) => `
        font-size: ${theme.size.large};
        font-family: ${theme.font.header};
        color: ${theme.colors.primary};
    `};
`;
const SImageWrapper = styled.div`
    max-width: 250px;
    &:hover {
        transform: scale(1.03);
    }
    ${({ theme }) => `
        @media (max-width: ${theme.media.tablet}px) {
            margin: auto;
            height: 200px;
            width: 200px;
        }
    `};
`;
const Caption = styled.p`
    text-align: center;
`;