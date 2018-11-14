var first = document.querySelector("h1.first");
first.innerHTML = "<b><i>This is the first line of the web page.</b></i>";


var listElementArray = document.getElementsByTagName("li");
var containingList = listElementArray[0].parentNode;
containingList.setAttribute("class", "first");

var createdElement = document.createElement("li");
var createdTextNode = document.createTextNode("sample textJa");
createdElement.appendChild(createdTextNode);
containingList.appendChild(createdElement);
