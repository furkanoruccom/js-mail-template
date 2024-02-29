var editor = new Jodit('#editor', {
    allowDragWords: false,
    uploader: {
        insertImageAsBase64URI: true
    },
    buttons: 'bold,italic,underline',
});

$(document).ready(function () {
    $('.field').on('dragstart', function (event) {
        event.originalEvent.dataTransfer.setData('text/plain', $(this).html());
    });
});


function checkAndRestorePlaceholder() {
    var editorDiv = document.getElementById("editor");
    var placeholder = document.createElement("span");

    placeholder.className = "placeholderx";
    placeholder.setAttribute("contenteditable", "false");
    editorDiv.appendChild(placeholder);
}