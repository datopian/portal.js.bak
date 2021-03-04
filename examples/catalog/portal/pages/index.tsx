import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { initializeApollo } from '../lib/apolloClient';
import Nav from '../components/home/Nav';
import Recent from '../components/home/Recent';
import Form from '../components/search/Form';
import { SEARCH_QUERY } from '../graphql/queries';
import { loadNamespaces } from './_app';
import useTranslation from 'next-translate/useTranslation';

<<<<<<< HEAD:examples/catalog/portal/pages/index.tsx
type Props = {
  isLogin: any;
};

const Home: React.FC<Props> = ({ isLogin }) => (
  <div className="container mx-auto">
    <Head>
      <title>GIFT-Portal</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav isLogin={isLogin} />
    <section className="flex justify-center items-center flex-col mt-8 mx-4 lg:flex-row">
      <div>
        <h1 className="text-4xl mb-3 font-thin">
          Find, Share and Publish <br /> Quality Data on{' '}
          <span className="text-orange-500">GIFT</span>
        </h1>
        <p className="text-md font-light mb-3 w-4/5">
          At Gift, we have open and free dataset that covers fiscal
          transperency around the world
        </p>
        <Form />
      </div>
      <div className="mt-4">
        <img src="/images/banner.svg" className="w-4/5" alt="banner_img" />
=======
const Home: React.FC<{ locale: any; locales: any }> = ({
  locale,
  locales,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto">
        <Head>
          <title>{t(`common:title`)}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <section className="flex justify-center items-center flex-col mt-8 mx-4 lg:flex-row">
          <div>
            <h1 className="text-4xl mb-3 font-thin">
              Find, Share and Publish <br /> Quality Data with{' '}
              <span className="text-orange-500">Datahub</span>
            </h1>
            <p className="text-md font-light mb-3 w-4/5">
              {t(`common:description`)}
            </p>
            <Form />
          </div>
          <div className="mt-4">
            <img src="/images/banner.svg" className="w-4/5" alt="banner_img" />
          </div>
        </section>
        <Recent />
>>>>>>> 14e6f1d597d145f53845d63ae9d60f9a95e8bc77:packages/portal/pages/index.tsx
      </div>
    </>
  );
};

<<<<<<< HEAD:examples/catalog/portal/pages/index.tsx
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
=======
export const getServerSideProps: GetServerSideProps = async ({
  locale,
  locales,
}) => {
>>>>>>> 14e6f1d597d145f53845d63ae9d60f9a95e8bc77:packages/portal/pages/index.tsx
  const apolloClient = initializeApollo();
  let isLogin = true;
  if ('password' in query) {
    isLogin = false;
  }
  await apolloClient.query({
    query: SEARCH_QUERY,
    variables: {
      sort: 'metadata_created desc',
      rows: 3,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
<<<<<<< HEAD:examples/catalog/portal/pages/index.tsx
      isLogin: isLogin,
=======
      _ns: await loadNamespaces(['common'], locale),
      locale,
      locales,
>>>>>>> 14e6f1d597d145f53845d63ae9d60f9a95e8bc77:packages/portal/pages/index.tsx
    },
  };
};

export default Home;
