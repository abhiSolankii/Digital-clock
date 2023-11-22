function display() {
  const d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}
setInterval(display, 1000);

function visibleDots() {
  const dd = new Date();
  var sec = dd.getSeconds();
  if (sec % 2 === 0) {
    document.getElementById("dots-1").innerHTML = ":";
    document.getElementById("dots-2").innerHTML = ":";
  } else {
    document.getElementById("dots-1").innerHTML = " ";
    document.getElementById("dots-2").innerHTML = " ";
  }
}
setInterval(visibleDots, 100);
