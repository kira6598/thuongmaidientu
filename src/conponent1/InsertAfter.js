function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    var el = document.getElementById("LaptopAsus");   
    var div = document.getElementById("sorting");
    insertAfter(div, el);