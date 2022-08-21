document.addEventListener("DOMContentLoaded", function() {
    let lazy = document.querySelectorAll("img.lazy");    
    let numb = document.getElementById('numb');
    let images = document.getElementsByTagName('img');

    let collect;
    let checked = true;
    let timeout;
        
    function lazyload () {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(function() {
            let scroll_top = window.pageYOffset;
            lazy.forEach(function(img) {
                if (img.offsetTop < (window.innerHeight + scroll_top)) {                
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    collect = document.getElementsByClassName('lazy');
                    numb.innerHTML = '';
                    numb.insertAdjacentHTML('beforeend', `${images.length - collect.length}`);
                    if (checked && collect.length === 0) {
                        checked = false;
                        let label = document.getElementsByTagName('label')[0];
                        label.classList.add('finish');
                        setTimeout(function() { label.style.display = 'none'; }, 3000);
                    }
                }
            });

            if(lazy.length == 0) { 
                document.removeEventListener("scroll", lazyload);
            }
        }, 250);
    }

    document.addEventListener("scroll", lazyload);
});
