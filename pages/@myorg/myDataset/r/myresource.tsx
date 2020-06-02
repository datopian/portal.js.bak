import Head from 'next/head'
import DataView from '@datopian/datapackage-views-js'
import dataexplorer from 'data-explorer'
import { GetStaticProps } from 'next'

const tableCols = [
  {
    "fieldName": "No.",
    "order": "1",
    "typeFormat": "any",
    "description": "",
  },
  {
    "fieldName": "Puesto institucional",
    "order": "1",
    "typeFormat": "string",
    "description": "",
  },
  {
    "fieldName": "Régimen laboral al que pertenece",
    "order": "1",
    "typeFormat": "string",
    "description": "",
  },
  {
    "fieldName": "Número de partida presupuestaria",
    "order": "1",
    "typeFormat": "string",
    "description": "",
  },
  {
    "fieldName": "Grado jerárquico o escala al que pertenece el puesto",
    "order": "1",
    "typeFormat": "any",
    "description": "",
  },
  {
    "fieldName": "Remuneración mensual unificacada",
    "order": "1",
    "typeFormat": "any",
    "description": "",
  },
]

export const getStaticProps: GetStaticProps = async () => {
  const allData = tableCols
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
        <DataView />
        <div className="data-explorer" id="data-explorer-1" data-datapackage='{"widgets":[{"name":"Table","active":true,"datapackage":{"views":[{"id":"9fd8ec8f-b80d-41f5-9b26-00290322166d","specType":"table"}]}},{"name":"Chart","active":false,"datapackage":{"views":[{"id":"9fd8ec8f-b80d-41f5-9b26-00290322166d","specType":"simple"}]}},{"name":"Map","active":false,"datapackage":{"views":[{"id":"9fd8ec8f-b80d-41f5-9b26-00290322166d","specType":"tabularmap"}]}}],"datapackage":{"resources":[{"views":[{"description":"","title":"Example view of FES data","resource_id":"1fb65a34-25b1-44c8-b819-a22890b4c764","view_type":"recline_view","id":"9fd8ec8f-b80d-41f5-9b26-00290322166d","package_id":"fe924436-de78-429a-96a8-f6594d5ea338","specType":"dataExplorer","spec":{"widgets":[{"specType":"table"},{"specType":"simple"},{"specType":"tabularmap"}]}}],"schema":{"fields":[{"name":"Tab","type":"string"},{"name":"Data item","type":"string"},{"name":"Unit","type":"string"},{"name":"Scenario","type":"string"},{"name":"Fuel","type":"string"},{"name":"Peak/Annual/Minimum","type":"string"},{"name":"2018","type":"string"},{"name":"2019","type":"string"},{"name":"2020","type":"string"},{"name":"2021","type":"string"},{"name":"2022","type":"string"},{"name":"2023","type":"string"},{"name":"2024","type":"string"},{"name":"2025","type":"string"},{"name":"2026","type":"string"},{"name":"2027","type":"string"},{"name":"2028","type":"string"},{"name":"2029","type":"string"},{"name":"2030","type":"string"},{"name":"2031","type":"string"},{"name":"2032","type":"string"},{"name":"2033","type":"string"},{"name":"2034","type":"string"},{"name":"2035","type":"string"},{"name":"2036","type":"string"},{"name":"2037","type":"string"},{"name":"2038","type":"string"},{"name":"2039","type":"string"},{"name":"2040","type":"string"},{"name":"2041","type":"string"},{"name":"2042","type":"string"},{"name":"2043","type":"string"},{"name":"2044","type":"string"},{"name":"2045","type":"string"},{"name":"2046","type":"string"},{"name":"2047","type":"string"},{"name":"2048","type":"string"},{"name":"2049","type":"string"},{"name":"2050","type":"string"},{"name":"2051","type":"any"}]},"cache_last_updated":null,"package_id":"fe924436-de78-429a-96a8-f6594d5ea338","validation_status":"success","datastore_active":true,"id":"1fb65a34-25b1-44c8-b819-a22890b4c764","size":null,"validation_timestamp":"2020-03-12T11:25:18.980201","state":"active","hash":"","description":"An example of how a csv can be visualised and accessed via API on the data portal.","format":"csv","last_modified":"2020-03-12T10:31:53.452809","url_type":"upload","mimetype":"text/csv","cache_url":null,"name":"fes_csv_example","created":"2020-03-11T15:12:51.184704","mimetype_inner":null,"position":2,"revision_id":"fabef700-f347-46fc-a659-9ae108dd0faf","resource_type":null,"title":"FES CSV example","path":"https://national-grid-admin-staging.ckan.io/dataset/fe924436-de78-429a-96a8-f6594d5ea338/resource/1fb65a34-25b1-44c8-b819-a22890b4c764/download/fes-data-workbook-csv-example.csv","descriptionHtml":"<p>An example of how a csv can be visualised and accessed via API on the data portal.</p>\n","api":"https://national-grid-admin-staging.ckan.io/api/3/action/datastore_search?resource_id=1fb65a34-25b1-44c8-b819-a22890b4c764&sort=_id desc"}]}}'></div>
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
                    <td className="px-5 py-4 border font-bold">{data.fieldName}</td>
                    <td className="px-5 py-4 border">{data.order}</td>
                    <td className="px-5 py-4 border">{data.typeFormat}</td>
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
