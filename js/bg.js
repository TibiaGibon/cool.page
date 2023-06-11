window.addEventListener("DOMContentLoaded", function () {
  var starsContainer = document.querySelector(".stars");
  var vh = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  var vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  var numStars = (vh + vw) / 10;
  var resizeTimeout;

  function generateStars() {
    starsContainer.innerHTML = "";

    for (var i = 0; i < numStars; i++) {
      var star = document.createElement("div");
      star.className = "star";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() + "s";
      starsContainer.appendChild(star);
    }
    // console.log(numStars);
  }
  generateStars();

  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(function () {
      vh = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
      vw = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      numStars = (vh + vw) / 10;

      generateStars();
    }, 10);
  });
});
