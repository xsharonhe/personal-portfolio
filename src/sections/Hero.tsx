import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';
import Typewriter from 'typewriter-effect';

import { strings } from '../utils/strings';

interface IHeroProps extends React.HTMLAttributes<HTMLDivElement> {};

export const Hero: React.FC<IHeroProps> = ({
    ...props
}) => {
    const data = useStaticQuery(graphql`
        query {
            profile: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "profile.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `);
    return (
        <Wrapper id='hero' {...props}>
            <>
                <div style={{ paddingTop: '20px' }}>
                    <p> 
                        {strings.hero.introduction}
                    </p>
                    <SName> 
                        {strings.hero.name}
                    </SName>
                    <STypewriterWrapper>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('and I am a developer.')
                                    .pauseFor(2000)
                                    .deleteChars(15)
                                    .start()
                                    .typeString('am a data nerd.')
                                    .pauseFor(2000)
                                    .deleteChars(15)
                                    .typeString('am a self-motivator.')
                                    .pauseFor(2000)
                                    .deleteChars(20)
                                    .typeString('am a food connoisseur.')
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
            <SImageWrapper onClick={() => navigate('#contact')}>
                <Container>
                    <Img 
                        fluid={data.profile.childImageSharp.fluid}
                        alt='Profile'
                        style={{ borderRadius: '18px' }}
                    />
                </Container>
                <Caption> 
                    {strings.hero.caption} 
                </Caption>
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
    max-width: 180px;
    &:hover {
        transform: scale(1.07);
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
const Container = styled.div`
    ${({ theme }) => `
        opacity: 0.9
        border-radius: ${theme.radius.border};
        border: 4px solid ${theme.colors.primary};
        background-color: ${theme.colors.primary};
        :hover {
            opacity: 1.1;
        }
    `};
`;