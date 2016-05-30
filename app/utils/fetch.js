function status(res) {
    if (res.status >= 200 && res.status < 400) {
        return res;
    }
}

function json(res){
    return res.json();
}

function text(res) {
    return res.text();
}

export { status, json, text }
