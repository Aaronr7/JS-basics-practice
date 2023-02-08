window.onload = function() {
    const addElement = (el, content) => {
        const newDiv = document.createElement(el);
    
        const newContent = document.createTextNode(content);
    
        newDiv.appendChild(newContent);
    
        document.body.appendChild(newDiv);
    };
    
    addElement("div", "Hi there! This text bring to the page by method createTextNode");
    addElement("section", "This is a section.");
    };