var url = new URL(window.location.href);
var id = url.searchParams.get("id");

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(posts => {
        for (index in posts) draw_post(posts[index]);
    });

console.log(id);
