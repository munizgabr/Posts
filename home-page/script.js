
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

function draw_hr(){
    const hr = document.createElement("hr");
    return hr;
}

function draw_post(post) {
    const postDiv = document.createElement("div");

    postDiv.appendChild(draw_title(post.title));
    postDiv.appendChild(draw_body(post.body));
    postDiv.appendChild(draw_hr());

    document.getElementById('main').appendChild(postDiv);
}


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (index in posts) draw_post(posts[index]);
    });
