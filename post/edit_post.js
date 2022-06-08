//STRUCTURE OF POSTS
function draw_edit_post(post) {
    const postDiv = document.createElement("div");

    postDiv.appendChild(draw_text("Post Title*"));
    postDiv.appendChild(draw_input_title(post.title));

    postDiv.appendChild(draw_br());

    postDiv.appendChild(draw_text("Post Content*"));
    postDiv.appendChild(draw_input_body(post.body));

    postDiv.appendChild(draw_br());

    postDiv.appendChild(draw_btn_save(post.id));

    return postDiv;
}


//BUTTON
function draw_btn_save(id) {
    const btn_save_post = document.createElement("button");
    btn_save_post.innerText = "SAVE";
    btn_save_post.addEventListener('click', function () {
        save_post(id);
    });
    return btn_save_post;
}



// ACTION
function save_post(id) {
    const title = document.getElementById('txt_title').value;
    const body = document.getElementById('txt_body').value;
    const userId = 1;

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id,
            title,
            body,
            userId
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

