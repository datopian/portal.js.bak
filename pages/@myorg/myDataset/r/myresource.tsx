import Head from 'next/head'
import { GetStaticProps } from 'next'
import Resource from '../../../../fixtures/index';

export const getStaticProps: GetStaticProps = async () => {
  const allData = Resource
  return {
    props: {
      allData
    }
  }
}

export default function Showcase({ allData }) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-16">
        <p className="notice">
          This is a preview version. There might be more data in the original version.
      </p>
        <div className="my-16">
          <h2 className="text-3xl pb-2" id="data">Remuneración octubre 2017</h2>
          <p className="text-2xl my-4 font-light">Field Information</p>
          <table className="table-auto border text-sm mb-2">
            <thead>
              <tr>
                <th className="px-5 w-2/5 text-left py-4 border">Field Name</th>
                <th className="px-5 w-1/5 text-left py-4 border">Order</th>
                <th className="px-5 w-1/6 text-left py-4 border">Type(Format)</th>
                <th className="px-5 w-1/5 text-left py-4 border">Description</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((data, index) => {
                return (
                  <tr key={index} className="text-sm border">
                    <td className="px-5 py-4 border font-bold">{data.name}</td>
                    <td className="px-5 py-4 border">{data.position}</td>
                    <td className="px-5 py-4 border">{data.format}</td>
                    <td className="px-5 py-4 border">{data.description}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <a href="/@myorg/myDataset" className="text-orange-600 underline">Go back</a>
        </div>
      </div>
    </div>
  )
}