import React from 'react';
import styled from 'styled-components';
import { StyledIcon } from '@styled-icons/styled-icon';

export interface IconProps {
    icon: StyledIcon;
    onClick?: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void);
};

export const Icon: React.FC<IconProps> = ({
    onClick,
    icon,
    ...props
}): React.ReactElement => (
    <SIcon as={icon} onClick={onClick} {...props}/>
);

const SIcon = styled.svg`
    width: 35px;
    height: 35px;
    margin-left: 10px;
`;