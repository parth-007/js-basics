
getData();

// postData();



readCommits();

printImages();
let img_data;
function getData() {
    var url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.err(err));

}

function postData() {
    const url = 'https://dummy.restapiexample.com/api/v1/create';
    const data = '{"name":"PK42442","salary":"123","age":"23"}';

    const params = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Headers": "*"
        },
        body: data
    }

    fetch(url, params)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.err(err));
}

async function readCommits() {
    const url = "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";

    await fetch(url)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            // console.log(data);
            commitsData = data;
        });
    // buildTable(commitsData);
}

async function printImages() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    await fetch(url)
        .then(res => res.json())
        .then(function(data){
            img_data = data;
        });
    buildTable(img_data);
}

function buildTable(data) {
    // Work on first 30 Elements
    data = data.slice(0, 30);
    document.getElementById("myapp").innerHTML = `<h1>${data.length} Results</h1>
    <div class="img-container">
        ${data.map(d => dataParseHelper(d)).join(' ')}
    </div>
    <p class="footer">End</p>`;
}

function dataParseHelper(d) {
    return `
        <div class="d-flex">
            <img class="thumb" src="${d.thumbnailUrl}">
            <div class="content">
                <p>${d.albumId}</p>
                <p>${d.id}</p>
                <p>${d.title}</p>
                <p>${d.url}</p>
            </div>
        </div>
    `
}