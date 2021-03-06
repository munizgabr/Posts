function draw_img(link) {
    var img = document.createElement("img");
    img.src=link;
    img.height= 30;
    return img;
}

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

function edit_post(id) {
    window.location = '../post/post.html?id=' + id;
}

function delete_post(info_btn) {

    if (confirm("ARE YOU SURE YOU WANT TO DELETE?")) {
        fetch('https://jsonplaceholder.typicode.com/posts/' + info_btn, {
            method: 'DELETE',
        }).then((json) => {
            alert('POST DELETED SUCCESSFULLY')
        })
    }

}

function draw_btn_delete(id) {
    const btn_delete = document.createElement("button");
    btn_delete.className = "btn_del";
    btn_delete.addEventListener('click', function () {
        delete_post(id);
    });

    //add icon
    btn_delete.appendChild(draw_img('../img/remove.png'));
    return btn_delete;
}

function draw_btn_save(id) {
    const btn_edit = document.createElement("button");

    btn_edit.className = "btn_edit"
    btn_edit.addEventListener('click', function () {
        edit_post(id);
    });

    //add icon
    btn_edit.appendChild(draw_img('../img/edit.png'));
    return btn_edit;
}

function draw_post(post) {
    const postDiv = document.createElement("div");
    postDiv.className = "principal"
    postDiv.appendChild(draw_title(post.title));
    postDiv.appendChild(draw_body(post.body));
    postDiv.appendChild(draw_btn_save(post.id));
    postDiv.appendChild(draw_btn_delete(post.id));
    postDiv.appendChild(draw_hr());

    document.getElementById('main').appendChild(postDiv);
}


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (index in posts) draw_post(posts[index]);
    });