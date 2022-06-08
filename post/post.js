var url = new URL(window.location.href);
var id = url.searchParams.get("id");

// CREATING HTML
function draw_br() {
    return document.createElement("br")
};

function draw_text(text) {
    const textDiv = document.createElement("div");
    textDiv.innerText = text;
    return textDiv;
}

function draw_input_title(text) {
    const title = document.createElement("input");
    title.id = 'txt_title';
    title.value = text;
    return title;
}

function draw_input_body(text) {
    const body = document.createElement("textarea");
    body.id = 'txt_body';
    body.value = text;
    return body;
}

// ACTIONS
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


//BUTTON
function draw_btn_save(id) {
    const btn_save_post = document.createElement("button");
    btn_save_post.innerText = "SAVE";
    btn_save_post.addEventListener('click', function () {
        save_post(id);
    });
    return btn_save_post;
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

//STRUCTURE OF POSTS
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

