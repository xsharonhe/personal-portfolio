import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';
import Typewriter from 'typewriter-effect';

interface IHeroProps extends React.HTMLAttributes<HTMLDivElement> {};

export const Hero: React.FC<IHeroProps> = ({
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
        <Wrapper id='#hero' {...props}>
            <>
                <div style={{ paddingTop: '20px' }}>
                    <p> 
                        Hey there! My name is 
                    </p>
                    <SName> 
                        Sharon He
                    </SName>
                    <STypewriterWrapper>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('and I am a developer.')
                                    .pauseFor(2000)
                                    .deleteChars(15)
                                    .start()
                                    .typeString('am an unabashed data nerd.')
                                    .pauseFor(2000)
                                    .deleteChars(26)
                                    .typeString('am a self-motivator.')
                                    .pauseFor(2000)
                                    .deleteChars(20)
                                    .typeString('am a dessert connoisseur.')
                                    .pauseFor(2000)
                                    .deleteAll()
                            }}
                            options={{
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </STypewriterWrapper>
                </div>
            </>
            <SImageWrapper onClick={() => navigate('')}>
                <Img 
                    fluid={data.profile.childImageSharp.fluid}
                    alt='Profile'
                    style={{ borderRadius: '20px', border: '3px solid #79a3b1'}}
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
            flex-direction: column-reverse;
        }
    `};
`;
const SName = styled.h1`
    ${({ theme }) => `
        font-size: ${theme.size.large};
        font-family: ${theme.font.header};
        color: ${theme.colors.primary};
        @media (max-width: ${theme.media.mobile}px) {
            font-size: ${theme.size.h2};
        }
    `};
`;
const SImageWrapper = styled.div`
    max-width: 200px;
    &:hover {
        transform: scale(1.03);
    }
    ${({ theme }) => `
        @media (max-width: ${theme.media.tablet}px) {
            padding-bottom: 50px;
            margin: auto;
            height: 200px;
            width: 200px;
        }
    `};
`;
const Caption = styled.p`
    text-align: center;
`;
const STypewriterWrapper = styled.div`
    ${({ theme }) => `
        font-size: ${theme.size.default};
        font-family: ${theme.font.header};
        font-weight: 500;
        color: ${theme.colors.primary};
    `};
    margin-bottom: '40px';
`;