window.onload = function () {

    //pojedynczy po id
    // document.getElementById('box-one')
    //     .style
    //     .border = '3px solid red';

    // pojedynczy element za pomocą selektora
    // document.querySelector('#box-one')
    //     .style
    //     .border = '3px solid pink';

    // jest wiele ale wybrane bedzie pierwszy:
    // document.querySelector('.boxes')
    //     .style
    //     .border = '3px solid yellow';

    //-----------------------------

    // WIELE ELEMENTOW po nazwie klasy
    // let arr = document.getElementsByClassName('boxes');

    //Wiele elementow po nazwie znacznika
    // let arr = document.getElementsByTagName('div');

    //wiele za pomocą selektora css
    // let arr = document.querySelectorAll('#big-box div')

    // for (let element of arr) {
    //     element
    //         .style
    //         .border = '5px solid green';
    // }

    //węzeł rodzica
    // let element = document.getElementById('box-two');
    // element.style.border = '3px solid red';
    // element.parentNode.style.border = '3px solid blue';

    //węzeł sąsiadów
    // let element = document.getElementById('box-two');
    // element.style.border = '3px solid red';
    // element.previousElementSibling.style.border = '3px solid purple';
    // element.nextElementSibling.style.border = '3px solid pink';

    //węzeł dziecka
    let element = document.getElementById('big-box');
    element.style.border = '3px solid red';
    element.firstElementChild.style.border = '3px solid purple';
    element.lastElementChild.style.border = '3px solid pink';
}
