window.onload = function() {
    const addElement = (el, content) => {
        const newDiv = document.createElement(el);
    
        const newContent = document.createTextNode(content);
    
        newDiv.appendChild(newContent);
    
        document.body.appendChild(newDiv);
    };
    
    const removeElement = (elementParentClass, childElementClass) => {
        let parent = document.querySeletor(elementParentClass);
        let child = document.querySelector(childElementClass);
        parent.removeChild(child);
    }
    
    addElement("div", "Hi there! This text bring to the page by method createTextNode");
    addElement("section", "This is a section.");
    
    //Button logic
    let button = document.querySelector(".button");
    button.addEventListener("click", removeElement(".list-parent",".list"));
    };
