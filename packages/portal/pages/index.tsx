import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { initializeApollo } from '../lib/apolloClient';
import Nav from '../components/home/Nav';
import Recent from '../components/home/Recent';
import Form from '../components/search/Form';
import { SEARCH_QUERY } from '../graphql/queries';

const Home: React.FC = () => (
  <div className="container mx-auto">
    <Head>
      <title>GIFT-Portal</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
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
      </div>
    </section>
    <Recent />
  </div>
);

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const apolloClient = initializeApollo();
  console.log(query);
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
    },
  };
};

export default Home;
