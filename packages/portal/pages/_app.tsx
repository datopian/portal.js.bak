import { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '../lib/apolloClient';
import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils';
import { useFetchUser, UserProvider } from '../utils/users';

import '../styles/app.css';

type Props = {
  Component: any;
  pageProps: any;
};

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const [theme] = useState(DEFAULT_THEME); // setTheme
  const { user, loading } = useFetchUser();

  useEffect(() => {
    /**
     * We can switch theme.
     * e.g. setTheme('primary');
     * */

    applyTheme(theme);
  }, [theme]);

  return (
    <ApolloProvider client={apolloClient}>
      <UserProvider value={{ user, loading }}>
        <Component {...pageProps} />
      </UserProvider>
    </ApolloProvider>
  );
};

export default MyApp;
