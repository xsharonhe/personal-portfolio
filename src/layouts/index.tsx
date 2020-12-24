import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import { GlobalStyle } from '../theme/GlobalStyle';
import { lightTheme, darkTheme } from '../theme/theme';

import Header from '../components/Header';
import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';

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
          <>
            <GlobalStyle />
            <LayoutRoot>
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: data.site.siteMetadata.description },
                  { name: 'keywords', content: data.site.siteMetadata.keywords }
                ]}
              />
              <Header title={data.site.siteMetadata.title} />
              <button onClick={themeToggler}>
                Switch Theme
              </button>
              <LayoutMain>{children}</LayoutMain>
            </LayoutRoot>
          </>
        </ThemeProvider>
      )}
    />
  )
};

export default IndexLayout;
