import React, { useState, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import { GlobalStyle } from '../theme/GlobalStyle';
import { lightTheme, darkTheme } from '../theme/theme';
import { strings } from '../utils/strings';

import { ToggleButton } from '../components/Buttons';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
};

export const getTheme = (): string => {
  const currentTime = new Date().getHours();
  if(7 <= currentTime && currentTime < 18) {
    return 'light';
  } 
  return 'dark';
};

const IndexLayout: React.FC = ({
    children,
    ...props
}) => {

  const [theme, setTheme] = useState(getTheme);
  const themeToggler = useCallback(() => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }, [theme]);

  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data: StaticQueryProps) => (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: data.site.siteMetadata.description },
                  { name: 'keywords', content: data.site.siteMetadata.keywords }
                ]}
              />
              <SToggleButton 
                leftText={strings.toggleButton.leftText}
                rightText={strings.toggleButton.rightText}
                checked={theme}
                setChecked={themeToggler}
                onButtonClick={themeToggler}
                {...props}
              />
                {children}
        </ThemeProvider>
      )}
    />
  )
};

export default IndexLayout;

const SToggleButton = styled(ToggleButton)`
    display: flex;
    justify-content: flex-end;
`;