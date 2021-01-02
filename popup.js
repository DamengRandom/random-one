// function createChoice(event) {
//   let currentChoice = event.target.value;
//   // let currentChoice = 'fake one'; // will remove
//   let choicesArray = [];
//   choicesArray.push(currentChoice);
//   for(let i = 0; i < choicesArray.length; i++) {
//     const eleLi = document.getElementById('addChoice').appendChild('li');
//     eleLi.innerHTML = "Choice: " + choicesArray[i];
//   }
// }
// alert("alert: 1");

document.getElementById('inputChoice').addEventListener('input', getCurrentChoice);
document.getElementById('addChoice').addEventListener('click', createNewNode);

function getCurrentChoice(event) {
  document.getElementById('choiceValue').textContent = event.target.value;
}

function createNewNode() {
  var li=document.createElement("li");
  document.getElementById("choiceList").appendChild(li);
  li.innerText=document.getElementById("choiceValue").textContent;
}

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     code: 'var div=document.createElement("div"); document.body.appendChild(div); div.innerText="test123";'
//   });
// });
