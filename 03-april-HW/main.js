"use strict"

const userInputTagName = document.querySelector(".input-tag-name");
const mainDiv = document.querySelector(".main-div")
userInputTagName.onkeydown = function(e)
{
    const tagName = document.createElement("div");
    let tagNameValue = userInputTagName.value.trim();
    if (e.keyCode == 9) {
        e.preventDefault();
        const icon = document.createElement("i");
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
        userInputTagName.value = "";
        userInputTagName.focus();
    }
    if (e.keyCode == 8 && tagNameValue == "") {
        let childrensOFmainDiv = [...mainDiv.children];
        userInputTagName.value = childrensOFmainDiv[(childrensOFmainDiv.length)-2].innerText  + " ";
        childrensOFmainDiv[(childrensOFmainDiv.length)-2].remove();
    }
}

