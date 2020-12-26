import React from 'react';
import styled from 'styled-components';

import { strings } from '../utils/strings';

interface ICopyrightProps extends React.HTMLAttributes<HTMLDivElement> {};

export const Copyright: React.FC<ICopyrightProps> = ({
    ...props
}) => {
    return (
        <Wrapper id='copyright' {...props}>
            <p>
                {strings.copyright}
                &copy; 
                {strings.year}
            </p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    text-align: center;
`;