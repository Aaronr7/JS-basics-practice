window.onload = function() {
    const addElement = (el, content) => {
        const newDiv = document.createElement(el);
    
        const newContent = document.createTextNode(content);
    
        newDiv.appendChild(newContent);
    
        document.body.appendChild(newDiv);
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
