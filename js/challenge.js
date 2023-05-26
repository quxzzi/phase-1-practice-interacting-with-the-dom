"use strict";

function _toConsumableArray(a) {
  if (Array.isArray(a)) {
    var c = Array(a.length);
    for (var b = 0; b < a.length; b++) {
      c[b] = a[b];
    }
    return c;
  }
  return Array.from(a);
}

var playing = true;

var timer = function () {
  return setInterval(function () {
    var a = document.getElementById("counter");
    var b = parseInt(a.innerText);
    a.innerText = b + 1;
  }, 1000);
};

var interval = timer();

var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var heart = document.getElementById("heart");
var pause = document.getElementById("pause");
var commentForm = document.getElementsByTagName("form")[0];


minus.addEventListener("click", function () {
  var a = document.getElementById("counter");
  var b = parseInt(a.innerText);
  a.innerText = b - 1;
});


plus.addEventListener("click", function () {
  var a = document.getElementById("counter");
  var b = parseInt(a.innerText);
  a.innerText = b + 1;
});


heart.addEventListener("click", function () {
  var a = document.getElementById("counter");
  var b = parseInt(a.innerText);
  var c = document.querySelector(".likes");
  var d;
  
  if ([].concat(_toConsumableArray(c.children)).map(function (a) {
    return parseInt(a.dataset.num);
  }).includes(b)) {
    d = document.querySelector('[data-num="' + b + '"]');
    var e = parseInt(d.children[0].innerText);
    d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times";
  } else {

    d = document.createElement("li");
    d.setAttribute("data-num", b);
    d.innerHTML = b + " has been liked <span>1</span> time";
    c.appendChild(d);
  }
});


pause.addEventListener("click", function () {
  if (playing) {

    playing = false;
    clearInterval(interval);
    this.innerText = "resume";
  } else {

    playing = true;
    interval = timer();
    this.innerText = "pause";
  }
  

  [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function (a) {
    if (a.id !== "pause") {
      a.disabled = !playing;
    }
  });
});

commentForm.addEventListener("submit", function (a) {
  a.preventDefault();
  var b = this.children[0];
  var c = b.value;
  b.value = "";
  var d = document.querySelector(".comments");
  var e = document.createElement("p");
  e.innerText = c;
  d.appendChild
});