// moreOffers
let more = document.querySelector('.hidden'),
    btn = document.querySelector('#hidden-btn');

    btn.addEventListener('click', function () {
            if (more.style.display === 'block') {
                more.style.display = 'none';
            }   else {
                more.style.display = 'block';
            }
    });
// Popup
    let openPopup = document.querySelector('.last-btn'),
        form = document.querySelector('.popup-bg'),
        openP = document.querySelector('.main-btn'),
        closeP = document.querySelector('.close-popup');

        openP.addEventListener('click', function () {
            form.style.display = 'block';
        });

        openPopup.addEventListener('click', function () {
            form.style.display = 'block';
        });

        closeP.addEventListener('click', function () {
            form.style.display = 'none';
        });

        window.addEventListener('click', function (event) {
            if (event.target == form) {
                form.style.display = 'none';
            }
                         
        });

    let sub = document.querySelector('#close-btn'),
        inp = document.querySelectorAll('.input'),
        check = document.querySelector('.checkbox');

        sub.addEventListener('click', function () {
            form.style.display = 'none';
            popupS.style.display = 'block';
        });

        sub.setAttribute('disabled', true);

        inp.oninput = function () {
            if(inp.value.length > 5) {
                sub.removeAttribute('disabled');
            } else {
                sub.setAttribute('disabled', true);
            }
        };

        check.oninput = function () {
            if(check.checked) {
                sub.style.backgroundColor = "#E9862A";
                sub.removeAttribute('disabled');
            } else {
                sub.style.backgroundColor = "silver";
                sub.setAttribute('disabled', true);
            }
        };

// lastPopup
        
        let closeLastPopup = document.querySelector('.popup-end'),
            popupS = document.querySelector('.success');

        closeLastPopup.addEventListener('click', function () {
            popupS.style.display = 'none';
        });
        



        

        

