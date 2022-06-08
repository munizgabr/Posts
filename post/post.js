var url = new URL(window.location.href);
var id = url.searchParams.get("id");

function save_post() {

}

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
    return title;
}

function draw_input_body(text) {
    const body = document.createElement("textarea");
    body.value = text;
    return body;
}

function draw_save_button() {
    const btn_save = document.createElement("button");
    btn_save.onclick = save_post;
    return btn_save;
}

function draw_edit_post(post) {
    const postDiv = document.createElement("div");

    postDiv.appendChild(draw_text("Post Title*"));
    postDiv.appendChild(draw_input_title(post.title));

    postDiv.appendChild(draw_br());

    postDiv.appendChild(draw_text("Post Content*"));
    postDiv.appendChild(draw_input_body(post.body));

    return postDiv;
}

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => {
        document.body.appendChild(draw_edit_post(post));
    });
