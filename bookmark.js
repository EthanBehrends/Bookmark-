let localBook = []

function visit(num) {
    alert("Visiting " + localBook[num].name);
}

function setBookmarks() {
    chrome.storage.sync.set({book: localBook}, function() {
        alert("Saved");
    });
}

function collectBookmarks() {
    return new Promise(resolve => {
        chrome.storage.sync.get(['book'], function(result) {
            localBook = result.book;
            resolve(result.book);
        });
    });
}

function renderBookmarks() {
    let html = "";
    localBook.forEach((bkmrk, i) => {
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
    collectBookmarks().then(() => {renderBookmarks()});
    
});