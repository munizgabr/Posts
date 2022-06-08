var url = new URL(window.location.href);
var id = url.searchParams.get("id");

if (id) {
    //if id parameter exists, edit post
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(post => {
            document.body.appendChild(draw_edit_post(post));
        });
} else {
    //else, create post
    document.body.appendChild(draw_create_post());
}

