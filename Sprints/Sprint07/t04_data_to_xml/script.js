window.onload = () => {
    fetch('/toXML')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#before').innerText = data.before;
            document.querySelector('#after').innerText = data.after;
            render('#before', data);
        });
};