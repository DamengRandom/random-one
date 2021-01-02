// "content_security_policy": "script-src 'self' https://apis.google.com; object-src 'self'"

"content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["popup.js"],
      "css": ["popup.css"]
    }
  ],



  ,
  "content_security_policy": "default-src 'self'; script-src 'self' 'sha256-jF3B+I+InpltL1rtZ0Cyp8mGMHntyIiR8pv3QOswkkw='"



  () {
  // const childNode = document.createElement('li');
  // childNode.textContent = document.getElementById('choiceValue').textContent;
  // document.getElementById('choiceList').appendChild(childNode);
  
}



"permissions": [
    "tabs",
    "http://*/*",
    "activeTab"
  ],