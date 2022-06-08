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