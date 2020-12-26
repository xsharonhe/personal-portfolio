import React from 'react';
import styled from 'styled-components';
import { HorizontalRule } from '@styled-icons/octicons/HorizontalRule';

interface IHeadingProps extends React.HTMLAttributes<HTMLParagraphElement> {
    numberText?: string;
    icon?: boolean;
};

export const Heading: React.FC<IHeadingProps> = ({
    numberText,
    children,
    icon = true,
    ...props
}): React.ReactElement => {
    return (
        <Wrapper {...props}>
            {!!numberText && (
                <Text isNumberText> 
                    {numberText}
                </Text>
            )}
            <Text>
                {children}
                {!!icon && (
                    <Icon as={HorizontalRule} />
                )}
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
        font-size: ${theme.size.h2};
        font-weight: 700;
        font-family: ${theme.font.body};
        margin-right: ${isNumberText ? '10px' : ''};
    `};
`;
const Icon = styled.svg`
    width: 55px;
    height: 35px;
`;