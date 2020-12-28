import React from 'react';
import styled from 'styled-components';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Github } from '@styled-icons/bootstrap/Github';
import { Medium } from '@styled-icons/fa-brands/Medium';
import { navigate } from 'gatsby';

import { Heading, Bold } from '../components/Texts';
import { Button } from '../components/Buttons';
import { Icon } from '../components/Icon';
import { strings } from '../utils/strings';

interface IContactProps extends React.HTMLAttributes<HTMLDivElement> {};

const IconsList = [
    {
        icon: Linkedin,
        link: strings.contact.linkedin
    },
    {
        icon: Github,
        link: strings.contact.github
    },
    {
        icon: Medium,
        link: strings.contact.medium
    }
];

export const Contact: React.FC<IContactProps> = ({
    ...props
}) => {
    return (
        <Wrapper id='contact' {...props}>
            <Heading numberText='04.'>
                {strings.contact.title}
            </Heading>
            <p>
                I'm always interested in new opportunities and working with
                new people. Be it a quick chat or asking questions you
                have, feel free to reach out at <a href={`mailto:${strings.email}`}><Bold isLink={true}>sharon.he1@uwaterloo.ca</Bold></a>.
            </p>
            <Active> 
                <Bold> Oh! </Bold> And I'm also active on:
            </Active>
            <IconsWrapper>
                {IconsList.map((icon, i) => (
                    <SIcon key={i} icon={icon.icon} onClick={() => navigate(icon.link)}/>
                ))}
            </IconsWrapper>
            <ResumeWrapper> 
                <Header style={{ textAlign: 'center' }}>
                    {strings.contact.resume.header}
                </Header>
                <Button>
                    {strings.contact.resume.content}
                </Button>
            </ResumeWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    line-height: 1.75;
`;
const IconsWrapper = styled.div`
    text-align: center;
    ${({ theme }) => `
        @media (max-width: ${theme.media.mobile}px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `};
`;
const SIcon = styled(Icon)`
    height: 60px;
    width: 60px;
    margin: 0 20px;
    ${({ theme }) => `
        :focus
        :hover {
            color: ${theme.colors.primary};
            transition: ${theme.transitions.cubicBezier};
        }
        @media (max-width: ${theme.media.mobile}px) {
            margin: 10px 0;
        }
    `};
`
const ResumeWrapper = styled.div`
    text-align: center;
    margin-top: 50px;
`;
const Header = styled.h2`
    ${({ theme }) => `
        font-size: ${theme.size.h2};
    `};
`;
const Active = styled.p`
    text-align: center;
`;