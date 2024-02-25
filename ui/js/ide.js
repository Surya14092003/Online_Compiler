let editor;

window.onload = function () {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
}
function changelang() {

    let language = $("#Languages").val();

    if (language == 'C' || language == 'C++') editor.session.setMode("ace/mode/c_cpp");
    else if (language == 'php') editor.session.setMode("ace/mode/php");
    else if (language == 'Phyton') editor.session.setMode("ace/mode/python");
    else if (language == 'node') editor.session.setMode("ace/mode/javascript");
}
function executeCode() {

    $.ajax({

        url: "/IDE/app/compiler.php",

        method: "POST",

        data: {
            language: $("#Languages").val(),
            code: editor.getSession().getValue()
        },

        success: function (response) {
            $(".output").text(response)
        }
    })
}
