// Axios ライブラリをインポートします（ES Module 形式）。
import axios from 'axios';

// GET リクエストの例
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    // レスポンスの処理をここで行います。
    console.log(response.data);
  })
  .catch(function (error) {
    // エラーの処理をここで行います。
    console.log(error);
  });