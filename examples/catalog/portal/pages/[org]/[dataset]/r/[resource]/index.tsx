import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { initializeApollo } from '../../../../../lib/apolloClient';
import Nav from '../../../../../components/home/Nav';
import About from '../../../../../components/resource/About';
import DataExplorer from '../../../../../components/resource/DataExplorer';
import { GET_RESOURCES_QUERY } from '../../../../../graphql/queries';
import dataPackages from '../../../../../mocks/data_package';

const Resource: React.FC<{ variables: any }> = ({ variables }) => {
  // const { data, loading } = useQuery(GET_RESOURCES_QUERY, { variables });

  // if (loading) return <div>Loading</div>;
  // const result = data.dataset.result;
  // // Find right resource
  // const resource = result.resources.find(
  //   (item) => item.name === variables.resource
  // );
  const resource = dataPackages[1].resources[0];
  console.log(resource);
  return (
    <>
      <Head>
        <title>Portal | {resource.title || resource.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="p-6">
        <h1 className="text-3xl font-semibold text-primary mb-2">
          {resource.title || resource.name}
        </h1>
        <About variables={resource} />
        <div className="px-0">
          <h1 className="text-black">Meta Info</h1>
          <ul className="list-group">
            <li className="border list-none rounded-sm px-3 py-3">
              File Bytes:{' '}
              <span className="text-red-400">{resource.bytes}</span>
            </li>
            <li className="border list-none rounded-sm px-3 py-3">
              File TYpe:{' '}
              <span className="text-red-400">{resource.count_of_rows}</span>
            </li>
            <li className="border list-none rounded-sm px-3 py-3">
              Encoding :{' '}
              <span className="text-red-400">{resource.encoding}</span>
            </li>
          </ul>
        </div>
        {/* <DataExplorer variables={resource} /> */}
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const apolloClient = initializeApollo();
  // const variables = {
  //   id: context.query.dataset,
  //   resource: context.query.resource,
  // };

  // await apolloClient.query({
  //   query: GET_RESOURCES_QUERY,
  //   variables,
  // });

  return {
    props: {
      // initialApolloState: apolloClient.cache.extract(),
      variables: context.query.resource,
    },
  };
};

export default Resource;
