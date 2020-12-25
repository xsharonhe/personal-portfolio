import React from 'react';
import styled from 'styled-components';

interface IHeadingProps extends React.HTMLAttributes<HTMLParagraphElement> {
    numberText?: string;
};

export const Heading: React.FC<IHeadingProps> = ({
    numberText,
    children,
    ...props
}): React.ReactElement => {
    return (
        <Wrapper {...props}>
            <Text isNumberText> 
                {numberText}
            </Text>
            <Text>
                {children}
            </Text>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

interface ITextProps {
    isNumberText?: boolean;
};
const Text = styled.h1<ITextProps>`
    ${({ theme, isNumberText }) => `
        color: ${isNumberText ? theme.colors.primary : theme.colors.text};
        font-size: ${theme.size.h1};
        font-family: ${theme.font.header};
        margin-right: ${isNumberText ? '10px' : ''};
    `};
`;