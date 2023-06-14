document.addEventListener("DOMContentLoaded", function () {
  var bannerItems = document.querySelectorAll(".banner-item");
  var leftArrow = document.querySelector(".left-arrow");
  var rightArrow = document.querySelector(".right-arrow");

  var currentItem = 0;

  function showItem(index) {
    if (index < 0) {
      index = bannerItems.length - 1;
    } else if (index >= bannerItems.length) {
      index = 0;
    }

    bannerItems.forEach(function (item) {
      item.classList.remove("active");
    });

    bannerItems[index].classList.add("active");
  }

  function nextItem() {
    currentItem++;
    showItem(currentItem);
  }

  function previousItem() {
    currentItem--;
    showItem(currentItem);
  }

  leftArrow.addEventListener("click", previousItem);
  rightArrow.addEventListener("click", nextItem);
});