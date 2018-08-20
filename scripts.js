document.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement('div');
    div.className = 'header-container';
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let h5 = document.createElement('h5');
    let h6 = document.createElement('h6');
    let h1Text = document.createTextNode('This is an h1.');
    let h2Text = document.createTextNode('This is an h2.');
    let h3Text = document.createTextNode('This is an h3.');
    let h4Text = document.createTextNode('This is an h4.');
    let h5Text = document.createTextNode('This is an h5.');
    let h6Text = document.createTextNode('This is an h6.');
    h1.className = 'h1';
    h2.className = 'h2';
    h3.className = 'h3';
    h4.className = 'h4';
    h5.className = 'h5';
    h6.className = 'h6';
    h1.appendChild(h1Text);
    h2.appendChild(h2Text);
    h3.appendChild(h3Text);
    h4.appendChild(h4Text);
    h5.appendChild(h5Text);
    h6.appendChild(h6Text);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);
    document.body.appendChild(div);


    let color = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'indigo']

    h1.addEventListener("dblclick", function () {
        let ranCol = randomize();
        h1.style.color = ranCol;
    });
    h2.addEventListener("dblclick", function () {
        let ranCol = randomize();
        h2.style.color = ranCol;
    });
    h3.addEventListener("dblclick", function () {
        let ranCol = randomize();
        h3.style.color = ranCol;
    });
    h4.addEventListener("dblclick", function () {
        let ranCol = randomize();
        h4.style.color = ranCol;
    });
    h5.addEventListener("dblclick", function () {
        let ranCol = randomize();
        h5.style.color = ranCol;
    });
    h6.addEventListener("dblclick", function () {
        let ranCol = randomize();
        h6.style.color = ranCol;
    });
    function randomize() {
        return color[Math.floor(Math.random() * color.length)]
    };

    let item = 0;
    let butt1 = document.getElementsByClassName('ClickMe');
    let buttDiv = document.getElementsByClassName('buttDiv');
    let bye = document.getElementsByClassName('bye')
    butt1[0].addEventListener('click', function () {
        item++
        let buttonText = document.createTextNode('This is list item ' + item);
        let listItem = document.createElement('div');
        listItem.setAttribute("id", "bye");
        buttDiv[0].appendChild(listItem)
        listItem.appendChild(buttonText)
    });
    
    bye.addEventListener("dblclick", function () {
        buttDiv.removeChild(bye);
    });

    console.log(bye)
});



// the div, header and text do not show up before being placed inside a listener.

