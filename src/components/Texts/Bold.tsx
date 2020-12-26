import React from 'react';
import styled from 'styled-components';

interface IBoldProps extends React.HTMLAttributes<HTMLParagraphElement> {};

export const Bold: React.FC<IBoldProps> = ({
    children,
    ...props
}): React.ReactElement => (
    <SBold {...props}>
        {children}
    </SBold>
);

const SBold = styled.span`
    font-weight: 700;
    ${({ theme }) => `
        color: ${theme.colors.primary};
    `};
`;