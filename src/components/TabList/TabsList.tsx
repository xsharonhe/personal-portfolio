import React from 'react';
import styled from 'styled-components';
interface ITabsListProps extends React.HTMLAttributes<HTMLDivElement> {};

export const Hero: React.FC<ITabsListProps> = ({
    ...props
}) => {

    return (
        <Wrapper {...props}>
            
        </Wrapper>
    );
};

const Wrapper = styled.div`
    
`;