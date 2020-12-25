import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import { GlobalStyle } from '../theme/GlobalStyle';
import { lightTheme, darkTheme } from '../theme/theme';
import { strings } from '../utils/strings';

import { ToggleButton } from '../components/ToggleButton/ToggleButton';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
};

const IndexLayout: React.FC = ({
    children,
    ...props
}) => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  };

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
          <div {...props}>
            <GlobalStyle />
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: data.site.siteMetadata.description },
                  { name: 'keywords', content: data.site.siteMetadata.keywords }
                ]}
              />
              <ToggleButton 
                leftText={strings.toggleButton.leftText}
                rightText={strings.toggleButton.rightText}
                onClick={themeToggler}
              />
                {children}
          </div>
        </ThemeProvider>
      )}
    />
  )
};

export default IndexLayout;
