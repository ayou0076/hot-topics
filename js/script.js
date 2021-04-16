const container = document.querySelector('article.main-content');

const links = document.querySelectorAll('header li button');

let url = 'partials/home.html';

function loadContent(url){
    fetch(url).then(function (rsp) {
        return rsp.text();
    }).then(function (data) {
        container.innerHTML = data;
    });
}

loadContent(url);

function selectContent(e){
    e.preventDefault();
    let elem = e.target.value;

    for (let btn of links){
        if(btn.hasAttribute('id')){
            btn.removeAttribute('id');
        }
    }
    e.target.setAttribute('id', 'active');

    loadContent(elem);
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", selectContent);
}