import React from 'react';
import styled from 'styled-components';

interface IBoldProps extends React.HTMLAttributes<HTMLParagraphElement> {
    isLink?: boolean;
};

export const Bold: React.FC<IBoldProps> = ({
    children,
    isLink,
    ...props
}): React.ReactElement => (
    <SBold isLink={isLink} {...props}>
        {children}
    </SBold>
);

const SBold = styled.span<IBoldProps>`
    font-weight: 700;
    ${({ theme, isLink }) => `
        color: ${theme.colors.primary};
        text-decoration: ${isLink ? 'underline' : 'none'};
        &:hover {
            transition: ${theme.transitions.cubicBezier};
            color: ${isLink ? `${theme.colors.hover}` : `${theme.colors.primary}`};
        }
    `};
`;