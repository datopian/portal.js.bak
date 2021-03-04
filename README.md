An experiment in "showing" datasets starting with just one (and probably coming to many i.e. a portal later).

Live demo: http://portal-six.vercel.app/

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
