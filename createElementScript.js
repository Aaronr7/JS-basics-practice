window.onload = function() {
    const addElement = (el, content) => {
        const newDiv = document.createElement(el);
    
        const newContent = document.createTextNode(content);
    
        newDiv.appendChild(newContent);
    
        document.body.appendChild(newDiv);
    };

    const addUList = () => {
        const newUl = document.createElement("ul");

        let newLi = document.createElement("li");
    
        let newContent = document.createTextNode("🍎");
        newLi.appendChild(newContent);
        newUl.appendChild(newLi);

        newContent = document.createTextNode("🍒");
        newLi.appendChild(newContent);
        newUl.appendChild(newLi);
    
        document.querySelector(".list-parent").appendChild(newUl);
    };
    
    const removeElement = (elementParentClass, childElementClass) => {
        let parent = document.querySelector(elementParentClass);
        let child = document.querySelector(childElementClass);
        let throwawayNode = parent.removeChild(child);
    }
    
    //Button logic
    let removerButton = document.querySelector(".remover-button");
    removerButton.addEventListener("click", () => removeElement(".list-parent",".list"));
    };
