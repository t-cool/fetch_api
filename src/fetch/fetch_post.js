// POST リクエスト
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// PUT リクエスト
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    // 'Content-Type' ヘッダーは、リクエストの本体がどのような形式であるかを示します。
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

