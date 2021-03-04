import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { initializeApollo } from '../../../lib/apolloClient';
import Nav from '../../../components/home/Nav';
import About from '../../../components/dataset/About';
import Org from '../../../components/dataset/Org';
import Resources from '../../../components/dataset/Resources';
import { GET_DATASET_QUERY } from '../../../graphql/queries';
import dataPackages from '../../../mocks/data_package';

const Dataset: React.FC<{ variables: any }> = ({ variables }) => {
  const index = variables.split('+')[1];
  console.log(variables);
  const result = dataPackages[parseInt(index)];
  // const { data, loading } = useQuery(GET_DATASET_QUERY, { variables });

  // if (loading) return <div>Loading</div>;
  // const { result } = data.dataset;

  return (
    <>
      <Head>
        <title>Portal | {result.title || result.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav isLogin={true} />
      <main className="p-6">
        <h1 className="text-3xl font-semibold text-primary mb-2">
          {result.title || result.name}
        </h1>
        <Org variables={result} />
        <About variables={result} />
        <Resources variables={result} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // console.log("ddddddddd",context.query.dataset);
  // const apolloClient = initializeApollo();
  // const variables = {
  //   id: context.query.dataset,
  // };
  // await apolloClient.query({
  //   query: GET_DATASET_QUERY,
  //   variables,
  // });

  return {
    props: {
      // initialApolloState: apolloClient.cache.extract(),
      variables: context.query.dataset,
    },
  };
};

export default Dataset;
