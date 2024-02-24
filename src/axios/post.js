const axios = require('axios');

// POST リクエストの例
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1
})
    .then(function (response) {
        // レスポンスの処理をここで行います。
        console.log(response.data);
    })
    .catch(function (error) {
        // エラーの処理をここで行います。
        console.log(error);
    });
