//STRUCTURE OF POST
function draw_create_post() {
    const postDiv = document.createElement("div");

    postDiv.appendChild(draw_text("Post Title*"));
    postDiv.appendChild(draw_input_title(""));

    postDiv.appendChild(draw_br());

    postDiv.appendChild(draw_text("Post Content*"));
    postDiv.appendChild(draw_input_body(""));

    postDiv.appendChild(draw_br());

    postDiv.appendChild(draw_btn_create());

    return postDiv;
}


//BUTTON
function draw_btn_create() {
    const btn_save_post = document.createElement("button");
    btn_save_post.innerText = "CREATE POST";
    btn_save_post.addEventListener('click', function () {
        create_post();
    });
    return btn_save_post;
}

// ACTION
function create_post() {
    const title = document.getElementById('txt_title').value;
    const body = document.getElementById('txt_body').value;
    const userId = 1;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}



