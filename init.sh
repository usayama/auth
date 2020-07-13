#!/bin/sh
set -e

echo '🚀処理を開始します'


echo 'docker-composeをビルドします'
docker-compose build
echo 'docker-composeのビルドが完了しました。'
wait $!


sleep 5
echo 'yarnのキャッシュをクリアします'
docker-compose run --rm environ yarn cache clean
echo 'yarnのキャッシュをクリアしました'
wait $!


sleep 5
echo 'Reactアプリを作成します'
docker-compose run --rm environ npx create-react-app . --template typescript
echo 'Reactアプリの作成が完了しました'
wait $!


sleep 5
echo 'パッケージをインストールします'
docker-compose run --rm environ yarn install
echo 'パッケージのインストールが完了しました'
wait $!


sleep 5
echo 'firebase.jsを作成し、内容を記述します'
touch app/src/firebase.js
wait
cat <<EOS > app/src/firebase.js
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/functions'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

export default firebase
export const auth = firebase.auth()
export const rdb = firebase.database()
export const db = firebase.firestore()
export const storage = firebase.storage()
export const fn = firebase.functions()
EOS
echo 'firebase.jsが完了しました'
wait $!


sleep 5
echo '.envを作成し、内容を記述します'
touch app/.env
wait
cat <<EOS > app/.env
REACT_APP_API_KEY=$REACT_APP_API_KEY
REACT_APP_AUTH_DOMAIN=$REACT_APP_AUTH_DOMAIN
REACT_APP_DATABASE_URL=$REACT_APP_DATABASE_URL
REACT_APP_PROJECT_ID=$REACT_APP_PROJECT_ID
REACT_APP_STORAGE_BUCKET=$REACT_APP_STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID=$REACT_APP_MESSAGING_SENDER_ID
REACT_APP_APP_ID=$REACT_APP_APP_ID
REACT_APP_MEASUREMENT_ID=$REACT_APP_MEASUREMENT_ID
EOS
echo '.envが完了しました'
wait $!


sleep 5
echo '.env.localを作成し、内容を記述します'
touch app/.env.local
wait
cat <<EOS > app/.env.local
REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_DATABASE_URL=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
REACT_APP_MEASUREMENT_ID=
EOS
echo '.envが完了しました'
wait $!


sleep 5
echo '.package.jsonを移動します'
mv package.json app
echo '.package.jsonの移動が完了しました'
wait $!


sleep 5
echo 'パッケージをインストールします'
docker-compose run --rm environ yarn install
echo 'パッケージのインストールが完了しました'


echo '👍すべての処理が完了しました！'
