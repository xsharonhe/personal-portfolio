import React from 'react';
import styled from 'styled-components';

interface ITabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
};

export const TabContent: React.FC<ITabsContentProps> = ({
    children,
    ...props
}) => {

    return (
        <Wrapper {...props}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 10px 0 10px;
    margin-right: 10px;

    ${({ theme }) => `
        transition: ${theme.transitions.cubicBezier};
        transition-delay: 0.5s;
        li {
            color: ${theme.colors.text};
        }
        @media (max-width: ${theme.media.tablet}px) {
            padding-top: 0
        }
    `};
`;