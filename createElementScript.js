window.onload = function () {
  const addElement = (el, content) => {
    const newDiv = document.createElement(el);

    const newContent = document.createTextNode(content);

    newDiv.appendChild(newContent);

    document.body.appendChild(newDiv);
  };

  const addUList = () => {
    const newUl = document.createElement("ul");
    newUl.classList.add("list");

    let newLi = document.createElement("li");
    let newContent = document.createTextNode("🍎");
    newLi.appendChild(newContent);
    newUl.appendChild(newLi);

    newLi = document.createElement("li");
    newContent = document.createTextNode("🍒");
    newLi.appendChild(newContent);
    newUl.appendChild(newLi);

    newLi = document.createElement("li");
    newContent = document.createTextNode("🍑");
    newLi.appendChild(newContent);
    newUl.appendChild(newLi);

    newLi = document.createElement("li");
    newContent = document.createTextNode("🍉");
    newLi.appendChild(newContent);
    newUl.appendChild(newLi);

    newLi = document.createElement("li");
    newContent = document.createTextNode("🍇");
    newLi.appendChild(newContent);
    newUl.appendChild(newLi);

    document.querySelector(".list-parent").appendChild(newUl);
  };

  const removeElement = (elementParentClass, childElementClass) => {
    let parent = document.querySelector(elementParentClass);
    let child = document.querySelector(childElementClass);
    let throwawayNode = parent.removeChild(child);
  };

  //Button logic
  let toggleButton = document.querySelector(".remover-button");
  toggleButton.addEventListener("click", () => {
    if (document.querySelector(".list-parent").children.length === 0) {
      addUList();
      let nestedUlist = document.querySelector(".list");
      nestedUlist.childNodes.forEach((liChild) => {
        liChild.style.backgroundColor = "yellow";
        liChild.style.padding = "10px";
        liChild.style.borderRadius = "3px";
      });
    } else {
      removeElement(".list-parent", ".list");
    }
  });
};
