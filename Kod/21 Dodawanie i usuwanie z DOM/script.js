window.onload = function () {

    setTimeout(function () {
        let newElement = document.createElement('div');
        newElement.textContent = '5';
        document.getElementById('big-box').appendChild(newElement);
    }, 2000)

    setTimeout(function (){
        let elementToRemove = document.getElementById('box-two');
        let parent = document.getElementById('big-box');
        parent.removeChild(elementToRemove);
    }, 4000)

};