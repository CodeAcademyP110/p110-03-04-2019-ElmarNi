"use strict"

const userInputTagName = document.querySelector(".input-tag-name");
const mainDiv = document.querySelector(".main-div")
userInputTagName.onkeydown = function(e)
{
    if (e.keyCode == 9) {
        const tagName = document.createElement("div");
        const icon = document.createElement("i");
        const tagNameValue = userInputTagName.value.trim();
        icon.classList = "far fa-window-close ml-2";
        tagName.classList = "tag-div d-flex align-items-center"
        tagName.innerHTML = tagNameValue;
        if (tagNameValue === "") {
            return
        }
        tagName.appendChild(icon)
        icon.onclick = () => icon.parentNode.remove()
        const el = [...mainDiv.children].find(n=> n.innerText == tagNameValue);
        if(el !== undefined){
            alert("This tag is already exsist ! But don't worry about it because we'll solve it");
            el.remove();
        }
        mainDiv.insertBefore(tagName,userInputTagName.previousSibling)
        userInputTagName.value = ""
    }
}



