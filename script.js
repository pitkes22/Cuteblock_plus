console.log("=== CUTEBLOCK Plus+ STARTED ===");
function removeDailycutes() {
    var posts = document.querySelectorAll(".post");
    var count = 0;
    for (var i = 0; i < posts.length; i++) {

        var post = posts[i];
        var nameElement = post.querySelector(".name");
        var titleElement = post.querySelector("h2 a");

        if (nameElement !== null) {
            var name = nameElement.innerHTML
        }
        if (titleElement !== null) {
            var title = titleElement.innerHTML
        }

        if (name.toLocaleLowerCase().indexOf("pitkes22") !==  -1 && title.toLocaleLowerCase().indexOf("dailycute") !== -1) {
            post.remove();
            count++;
        }
    }
    return count;
}

function listener() {
    var count = removeDailycutes();
    if (count) {
        console.log(count + " Dailycute/s removed!");
    }
}

var timeout = null;
document.addEventListener("DOMSubtreeModified", function () {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(listener, 500);
}, false);
removeDailycutes();