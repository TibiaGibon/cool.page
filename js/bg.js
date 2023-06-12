window.addEventListener("DOMContentLoaded", function () {
  var starsContainer = document.querySelector(".stars");
  var numStars = Math.floor((window.innerWidth + window.innerHeight) / 10);

  for (var i = 0; i < numStars; i++) {
    var star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() + "s";
    starsContainer.appendChild(star);
  }

  var resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      starsContainer.innerHTML = "";
      numStars = Math.floor((window.innerWidth + window.innerHeight) / 10);

      for (var i = 0; i < numStars; i++) {
        var star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() + "s";
        starsContainer.appendChild(star);
      }
    }, 100);
  });
});
