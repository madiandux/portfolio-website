if(window.location.href.indexOf("index.html") !== -1)  {
    alert("Greetings traveler! Welcome to Madi Leang's portfolio site. Please use the navigation to find what you seek!");
}
function myFunction () {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}
    