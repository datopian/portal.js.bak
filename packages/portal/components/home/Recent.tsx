/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import { ErrorMessage } from '../_shared';
// import { SEARCH_QUERY } from '../../graphql/queries';
import dataPackages from '../../mocks/data_package'; //Manually import data for now

const Recent: React.FC = () => {
  // const gift_repo_path = 'https://api.github.com/users/gift-data/repos';
  // const [dataPackages, setDataPackages] = useState([]);

  // //TODO: Add authentication to increase github API call limit
  // const get_data_packages = async () => {
  //   const response = await fetch(gift_repo_path);
  //   const repos = await response.json();
  //   const packages = [];

  //   repos.map(async (data_repo) => {
  //     const response = await fetch(
  //       `https://raw.githubusercontent.com/gift-data/${data_repo.name}/master/datapackage.json`
  //     );
  //     const data_package = await response.json();

  //     packages.push(data_package);
  //     setDataPackages(packages);
  //   });
  // };

  // useEffect(() => {
  //   get_data_packages();
  // }, []);

  // const { result } = data.search;

  return (
    <section className="my-10 mx-4 lg:my-20">
      <h1 className="text-2xl font-thin mb-4">Available Datasets</h1>
      <div className="recent flex flex-col lg:flex-row">
        {dataPackages.map((data_package, index) => (
          <div
            key={index}
            className="border px-4 mb-4 mr-3 border-gray-100 w-5/6 shadow-sm"
          >
            <h1 className="text-2xl font-thin">{data_package.title}</h1>
            <p className="text-gray-500">
              {data_package.organization &&
                data_package.organization.description}
            </p>
            <Link
              href={`/@${
                data_package.organization
                  ? data_package.organization.name
                  : 'dataset'
              }/${data_package.name}`}
            >
              <a className="pt-3 flex justify-end text-orange-500">
                View Dataset
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recent;
