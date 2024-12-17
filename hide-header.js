function hideHeader() {
  const header = document.getElementById("header");
  const getInTouch = document.getElementById("get-in-touch");

  const getInTouchPosition = getInTouch.getBoundingClientRect().top;

  if (getInTouchPosition <= window.innerHeight && getInTouchPosition > 0) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
}

document.addEventListener("scroll", hideHeader);