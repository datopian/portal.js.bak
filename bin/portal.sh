export PORTAL_DATASET_PATH=$PWD
cd ~/.portal/showcase
echo "Starting portal server for dataset at" $PORTAL_DATASET_PATH
npm run dev
