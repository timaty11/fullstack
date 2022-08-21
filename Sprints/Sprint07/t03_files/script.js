let fieldset = document.getElementById('selected_file');
let filename = document.getElementById('file_name')
let content = document.getElementById('file_content');

if (filename.innerText || content.innerText) {
    fieldset.style.display = 'block';
}
