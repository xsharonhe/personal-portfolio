import React, { useCallback } from 'react';
import styled, { useTheme } from 'styled-components';
import Switch from 'react-switch';
import { Moon } from '@styled-icons/evaicons-solid/Moon';
import { Sun } from '@styled-icons/heroicons-solid/Sun';

import { Icon } from '../../components/Icon';
import { lightTheme, darkTheme } from '../../theme/theme';

export interface IToggleButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    leftText?: string;
    rightText?: string;
    onButtonClick: () => void;
    checked: string;
    setChecked: () => void;
};

export const ToggleButton: React.FC<IToggleButtonProps> = ({
    leftText,
    rightText,
    checked,
    setChecked,
    onButtonClick,
    ...props
}): React.ReactElement => {
    const convertBoolean = useCallback(() => {
        if(checked === 'dark') {
            return true;
        }
        return false;
    }, [checked]);
    return (
        <Wrapper {...props}>
            <SLabel>{leftText}</SLabel>
            <Switch
                checked={convertBoolean()}
                onChange={() => setChecked()}
                onColor={checked === 'light' ? lightTheme.colors.background : darkTheme.colors.text}
                offColor={checked === 'light' ? lightTheme.colors.text : darkTheme.colors.background}
                checkedIcon={<SIcon icon={Sun}/>}
                uncheckedIcon={<SIcon icon={Moon}/>}
                onHandleColor={lightTheme.colors.text}
            />
            <SLabel>{rightText}</SLabel>
        </Wrapper>
    );
};

const Wrapper = styled.div`
`;
const SLabel = styled.label`
    margin: 0 10px;
`;
const SIcon = styled(Icon)`
    width: 18px;
    height: 18px;
    margin: -2px 0 0 6px;
    ${({ theme }) => `
        color: ${theme.colors.background};
    `};
`;