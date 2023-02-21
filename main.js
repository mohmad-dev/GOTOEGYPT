const scrollContainer = document.getElementById("horizontal-scroll");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

prevButton.addEventListener("click", function () {
  scrollContainer.scrollLeft -= 200;
});

nextButton.addEventListener("click", function () {
  scrollContainer.scrollLeft += 200;
});

window.onscroll = function () {
  var header = document.getElementById("header");
  if (window.pageYOffset > 5) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

//
function updateProgressBar() {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent =
    (scrollTop / (scrollHeight - window.innerHeight)) * 100 + "%";
  document
    .querySelector("#progress-bar")
    .style.setProperty("--progress", scrollPercent);
}

document.addEventListener("scroll", updateProgressBar);

/*
-------------------------------------
------------------------------------- The image changue  every 10 Secons
-------------------------------------
-------------------------------------
*/

var Cont = 0;
function inic() {
  if (Cont % 2 != 0) {
    document.querySelector(".img_1").style.opacity = "0";
    document.querySelectorAll(".img_1")[1].style.opacity = "0";

    setTimeout(function () {
      document.querySelector(".img_1").className = "img_1 img_d_n";
      document.querySelectorAll(".img_1")[1].className = "img_1 img_d_n";

      document.querySelector(".img_2").className = "img_2 img_d_b";

      document.querySelectorAll(".img_2")[1].className = "img_2 img_d_b";
    }, 500);
    setTimeout(function () {
      document.querySelector(".img_2").style.opacity = "0.2";
      document.querySelectorAll(".img_2")[1].style.opacity = "1";
    }, 600);
    Cont++;
  } else {
    document.querySelector(".img_2").style.opacity = "0";
    document.querySelectorAll(".img_2")[1].style.opacity = "0";

    setTimeout(function () {
      document.querySelector(".img_2").className = "img_2 img_d_n";
      document.querySelectorAll(".img_2")[1].className = "img_2 img_d_n";

      document.querySelector(".img_1").className = "img_1 img_d_b";
      document.querySelectorAll(".img_1")[1].className = "img_1 img_d_b";
    }, 500);

    setTimeout(function () {
      document.querySelector(".img_1").style.opacity = "0.2";
      document.querySelectorAll(".img_1")[1].style.opacity = "1";
    }, 600);
    Cont++;
  }
}

window.onload = function () {
  inic();
  document.querySelector(".cont_text_img").className =
    "cont_text_img cont_text_img_act";
  setTimeout(function () {
    document.querySelector(".cont_img_frond").className =
      "cont_img_frond  cont_img_frond_active";
  }, 1700);
};

setInterval(function () {
  inic();
}, 10000);

document.getElementById("checkbox").checked = true;

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
});



window.onload = function (){
  let txr =  document.getElementById("txr")
  txr.classList.add("txr");
  document.getElementById("triangles").style.display = "none";

};





var added = false;
function myFunction() {
  var x = document.querySelectorAll(".dll");
  if (added == false) {
    x.forEach(function(element) {
      element.classList.add("ddd");
    });
    added = true;
    document.getElementById("myBtn").innerHTML = "disple none";
  } else {
    x.forEach(function(element) {
      element.classList.remove("ddd");
    });
    added = false;
    document.getElementById("myBtn").innerHTML = "show more";
  }
}



