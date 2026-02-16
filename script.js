window.addEventListener('DOMContentLoaded', function() {
    const enterButton = document.getElementById('enterButton');
    const item = document.getElementById('item');
    const myList = document.getElementById('myList');

    enterButton.addEventListener('click', function() {
        console.log(item.value);

        const li = document.createElement('li');
        const liText = document.createTextNode(item.value);
        li.appendChild(liText);
        myList.appendChild(li);


    });
});