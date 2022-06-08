function draw_title(text) {
    const title = document.createElement("div");
    title.innerText = text;
    title.style.fontSize = "xx-large";
    return title;
}


function draw_body(text) {
    const body = document.createElement("div");
    body.innerText = text;
    return body;
}

function draw_hr() {
    const hr = document.createElement("hr");
    return hr;
}

function edit_post() {
    window.location = '../post/post.html'
}


function draw_btn() {
    const btn_edit = document.createElement("button");
    btn_edit.innerHTML = "button";
    btn_edit.onclick = edit_post;
    return btn_edit;
}

function draw_post(post) {
    const postDiv = document.createElement("div");

    postDiv.appendChild(draw_title(post.title));
    postDiv.appendChild(draw_body(post.body));
    postDiv.appendChild(draw_btn());
    postDiv.appendChild(draw_hr());

    document.getElementById('main').appendChild(postDiv);
}


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (index in posts) draw_post(posts[index]);
    });