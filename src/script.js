function enter(){
  let input = document.getElementsByTagName("input")[0];
  let options = document.getElementsByClassName("options")[0];

  if(input.value === "")
    alert("You have to write something!")
  else
    options.innerHTML += ("<button id='delete' onclick='del()'>del</button><h2>" + input.value + "</h2>");
    input.value = "";
}

function del(){
  
}

function run(){
  let options = document.getElementsByClassName("options")[0];
  let h2 = document.getElementsByTagName("h2");
  let random = Math.floor(Math.random() * h2.length);
  let runButton = document.getElementById("runit");
  let input = document.getElementsByTagName("input")[0];
  let backButton = document.getElementById("back")
  
  options.innerHTML = "<h3>" + h2[random].innerText + "!<spam>is the right choice!</spam></h3>";
  
  runButton.style.display = "none";
  input.style.display = "none";
  
  return backButton.style.display = "block";
}