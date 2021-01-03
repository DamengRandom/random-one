var choicesList = [];

// DOM with Id

function domWithId(id) {
  return document.getElementById(id);
}

// actions

domWithId('inputChoice').addEventListener('input', getCurrentChoice);
domWithId('inputChoice').addEventListener('keypress', preventEnterPress);
domWithId('addChoice').addEventListener('click', createNewNode);
domWithId('maker').addEventListener('click', choiceMaker);

// helper functions

function preventEnterPress(event) {
  if(event.keyCode === 13 || event.key === 'Enter') {
    return event.preventDefault();
  }
}

function getCurrentChoice(event) {
  domWithId('choiceValue').textContent = event.target.value;
  const existedChoice = choicesList.some(choice => choice === domWithId('choiceValue').textContent);

  if (domWithId('choiceValue').textContent.length > 20) {
    domWithId('invalidInput').textContent = 'Oops, maximum input characters are 20 ..';
    domWithId('addChoice').disabled = true;
  } else if(
    domWithId('choiceValue').textContent.length === 0 || domWithId('choiceValue').textContent === '') {
    domWithId('invalidInput').textContent = 'Oops, choice input cannot be empty ..';
    domWithId('addChoice').disabled = true;
  } else if(existedChoice) {
    domWithId('invalidInput').textContent = 'Oops, choice already existed ..';
    domWithId('addChoice').disabled = true;
  } else {
    domWithId('invalidInput').textContent = '';
    domWithId('addChoice').style.display = 'block';
    domWithId('addChoice').disabled = false;
  }
}

function createNewNode() {
  // add new node
  var li = document.createElement("li");
  domWithId("choiceList").appendChild(li);
  li.innerText = domWithId("choiceValue").textContent;
  choicesList.push(domWithId("choiceValue").textContent);

  // reset input & display value to empty
  domWithId("inputChoice").value = "";
  domWithId('choiceValue').textContent = "";

  // show choice maker button
  if (choicesList.length > 1 && domWithId("maker").classList.contains('hide')) {
    domWithId("maker").classList.remove('hide');
    domWithId("maker").style.display = "block";
  }
}

function choiceMaker() {
  domWithId('spinner').style.display = "block";
  domWithId('choiceForm').style.display = "none";

  setTimeout(() => {
    domWithId('spinner').style.display = "none";
    domWithId('addChoice').disabled = true;
    domWithId('choiceForm').style.display = "block";
    domWithId("fateBox").classList.remove('hide');
    domWithId('fateValue').textContent = choicesList[Math.floor(Math.random() * choicesList.length)];
  }, 3000);
}
