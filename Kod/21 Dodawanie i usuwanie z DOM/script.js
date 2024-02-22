window.onload = function () {

    setTimeout(function () {
        let newElement = document.createElement('div');
        newElement.textContent = '5';
        document.getElementById('big-box').appendChild(newElement);
    }, 2000)

    console.log("Sample text");

    setTimeout(function () {
        let elementToRemove = document.getElementById('box-two');
        let parent = document.getElementById('big-box');
        parent.removeChild(elementToRemove);
    }, 4000)

};