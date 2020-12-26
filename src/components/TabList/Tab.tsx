import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, navigate } from 'gatsby';

interface ITabProps extends React.HTMLAttributes<HTMLDivElement> {};

export const Tab: React.FC<ITabProps> = ({
    ...props
}) => {

    return (
        <Wrapper {...props}>
            
        </Wrapper>
    );
};

const Wrapper = styled.div`
    
`;
const Icon = styled.svg`
    width: 35px;
    height: 35px;
`;