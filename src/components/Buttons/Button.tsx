import React from 'react';
import styled from 'styled-components';


export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    isInverted?: boolean;
};

export const Button: React.FC<IButtonProps> = ({
    isInverted = true,
    children,
    ...props
}): React.ReactElement => (
    <SButton isInverted={isInverted} {...props}> 
        {children}
    </SButton>
);

const SButton = styled.button<IButtonProps>`
    ${({ theme, isInverted }) => `
        color: ${isInverted ? `${theme.colors.primary}` : `${theme.colors.text}`};
        border: 1px solid ${theme.colors.primary};
        border-radius: ${theme.radius.default};
        font-size: ${theme.size.defaultLarger};
        font-family: ${theme.font.body};
        text-decoration: none;
        cursor: pointer;
        padding: 1.25rem 1.75rem;
        transition: ${theme.transitions.cubicBezier};
        background-color: ${isInverted ? `${theme.colors.background}` : `${theme.colors.primary}`};
        &:focus,
        &:active,
        &:hover {
            background-color: ${theme.colors.primaryO};
            outline: none;
        }
        &:after {
            display: none !important;
        }
    `};
`;