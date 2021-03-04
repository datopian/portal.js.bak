<h1 style="text-align: center;">
  PORTAL.js
  The javascript framework for<br/>
  data portals
</h1>

🌀 `Portal` is a framework for rapidly building rich data portal frontends using a modern frontend approach (javascript, React, SSR).

`Portal` assumes a "decoupled" approach where the frontend is a separate service from the backend and interacts with backend(s) via an API. It can be used with any backend and has out of the box support for [CKAN][]. `portal` is built in Javascript and React on top of the popular [Next.js][] framework.

[ckan]: https://ckan.org/
[next.js]: https://nextjs.com/

Live demo: http://portal-six.vercel.app/

## Features

- 🗺️ Unified sites: present data and content in one seamless site, pulling datasets from a DMS (e.g. CKAN) and content from a CMS (e.g. wordpress) with a common internal API.
- 👩‍💻 Developer friendly: built with familiar frontend tech Javascript, React etc
- 🔋 Batteries included: Full set of portal components out of the box e.g. catalog search, dataset showcase, blog etc.
- 🎨 Easy to theme and customize: installable themes, use standard CSS and React+CSS tooling. Add new routes quickly.
- 🧱E Extensible: quickly extend and develop/import your own React components
- 📝 Well documented: full set of documentation plus the documentation of NextJS and Apollo.

### For developers

- 🏗 Build with modern, familiar frontend tech such as Javascript and React.
- 🚀 NextJS framework: so everything in NextJS for free React, SSR, static site generation, huge number of examples and integrations etc.
  - SSR => unlimited number of pages, SEO etc whilst still using React.
  - Static Site Generation (SSG) (good for small sites) => ultra-simple deployment, great performance and lighthouse scores etc
- 📋 Typescript support

## Getting Started

Run it locally:

```
npm run dev
```

Future

```
data show [{path to dataset}]
```

# Vision

I have a dataset `my-data`

```bash=
README.md
data.csv
## descriptor is optional (we infer if not there) 
# datapackage.json
```

## Show (preview) data locally

I can do ...

```bash=
cd my-dataset
portal [show]
```

And I get a nice dataset page at e.g. `http://localhost:3000`

![](https://i.imgur.com/KSEtNF1.png)

## Deploy it online

Then i can deploy it online

```
portal deploy
```

Gives me a url like ...

```
myusername-my-dataset.datahub.io
```

# Analysis

## `portal`

```
portal PATH
```

How it works:

```bash
cd ~/.portal/
git clone ...
cd portal-app
export DATASET=PATH
next dev

# watch and reload next ... (perhaps a hack by writing something into next folder to trigger reload)
```


