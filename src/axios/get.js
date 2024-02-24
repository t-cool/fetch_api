const axios = require('axios');

// 基本的な GET リクエスト
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

// パラメータを付けた GET リクエスト
axios.get('https://jsonplaceholder.typicode.com/posts', {
  params: {
    userId: 1
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

// レスポンスタイムアウトを設定する
axios.get('https://jsonplaceholder.typicode.com/posts/1', {
  timeout: 5000  // 5000ミリ秒 = 5秒
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

// レスポンスのステータスを検証する
axios.get('https://jsonplaceholder.typicode.com/posts/1', {
  validateStatus: function (status) {
    return status < 500; // ステータスコードが500未満の場合にtrueを返す
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

// カスタムヘッダーを使用する
axios.get('https://jsonplaceholder.typicode.com/posts/1', {
  headers: {
    'X-Custom-Header': 'foobar'
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

// 複数のリクエストを同時に行う
Promise.all([
  axios.get('https://jsonplaceholder.typicode.com/posts/1'),
  axios.get('https://jsonplaceholder.typicode.com/posts/2')
])
  .then(responseArr => {
    // responseArr[0] は最初のリクエストのレスポンス
    // responseArr[1] は2番目のリクエストのレスポンス
    console.log(responseArr[0].data);
    console.log(responseArr[1].data);
  })
  .catch(error => {
    console.log(error);
  });