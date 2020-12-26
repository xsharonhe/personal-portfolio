import React from 'react';
import styled from 'styled-components';

export interface IToggleButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    leftText?: string;
    rightText?: string;
    onButtonClick: () => void;
};

export const ToggleButton: React.FC<IToggleButtonProps> = ({
    leftText,
    rightText,
    onButtonClick,
    ...props
}): React.ReactElement => (
    <Wrapper {...props}>
        <SLabel>
            { leftText }
        </SLabel>
            <SInput 
                type='checkbox'
                onClick={onButtonClick}
            />
            <Slider />
        <SLabel>
            { rightText }
        </SLabel>
    </Wrapper>
);

const Wrapper = styled.div`
`;
const SLabel = styled.label`
`;
const SInput = styled.input`
`;
const Slider = styled.span` 
`;