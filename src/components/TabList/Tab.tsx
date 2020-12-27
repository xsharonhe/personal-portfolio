import React from 'react';
import styled from 'styled-components';

interface ITabProps extends React.HTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
};

export const Tab: React.FC<ITabProps> = ({
    children,
    isActive = false,
    ...props
}) => (
    <STab isActive={isActive} {...props}>
        {children}
    </STab>
);

const STab = styled.button<ITabProps>`
    ${({ theme, isActive }) => `
        display: flex;
        align-items: center;
        outline: none;
        border: none;
        text-decoration: none;
        height: 40px;
        text-align: center;
        background-color: ${isActive ? `${theme.colors.primaryO}` : 'transparent'};
        color: ${isActive ? `${theme.colors.primary}` : `${theme.colors.text}`}
        padding: 0 20px 2px;
        font-size: ${theme.size.defaultLarger};
        font-family: ${theme.font.body};
        border-bottom: 2px solid ${isActive ? `${theme.colors.primary}` : `${theme.colors.text}`};
        white-space: nowrap;
        transition: ${theme.transitions.cubicBezier};
        transition-delay: 0.2s;
        text-align: center;

        :focus
        :hover {
            background-color: ${theme.colors.primaryO};
        }
    `};
`;