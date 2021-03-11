let book = [
    {
        name: 'Socialism Wiki',
        url: 'https://en.wikipedia.org/wiki/Socialism',
        scroll: 100
    },
    {
        name: 'Creating Extension',
        url: 'https://www.sitepoint.com/create-chrome-extension-10-minutes-flat/',
        scroll: 300
    },
    {
        name: 'VSCode Download',
        url: 'https://visualstudio.microsoft.com/downloads/',
        scroll: 300
    },
    {
        name: 'Get Favicon',
        url: 'https://stackoverflow.com/questions/10282939/how-to-get-favicons-url-from-a-generic-webpage-in-javascript',
        scroll: 300
    },
    {
        name: 'Publish Extension to Chrome Web Store',
        url: 'https://developer.chrome.com/docs/webstore/publish/',
        scroll: 300
    },
    {
        name: 'The Best Flexbox Tutorial',
        url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
        scroll: 300
    },
    {
        name: 'Royalty Free Images',
        url: 'https://unsplash.com/',
        scroll: 500
    }
]

function visit(num) {
    alert("Visiting " + book[num].name);
}

function collectBookmarks() {

}

function renderBookmarks() {
    let html = "";
    book.forEach((bkmrk, i) => {
        html += parseBookmark(bkmrk, i);
    });
    document.getElementById("mainBody").innerHTML = html;
    document.querySelectorAll(".bookmark").forEach(elm => {
        elm.addEventListener('click', () => {
            visit(elm.getAttribute("num"));
        });
    });
}

function parseBookmark(bkmrk,num) {
    return("<div num=" + num + " class='bookmark'><div class='icon'><img src=https://s2.googleusercontent.com/s2/favicons?domain_url=" + bkmrk.url + " /></div><div class='text'><div class='name'>" + bkmrk.name + "</div><div class='link'>"+ bkmrk.url + "</div></div></div>");
}

window.addEventListener("DOMContentLoaded", function () {
    renderBookmarks();
});