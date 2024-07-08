var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  loop: true,
  typeSpeed: 50,
});

const footerDate = document.getElementById("date");
if (footerDate) footerDate.textContent = new Date().getFullYear();

function toggleText(id) {
  const testimonial = document.getElementById(id);
  const text = testimonial.querySelector(".text");
  const moreText = text.querySelector(".more-text");
  const btn = testimonial.querySelector(".read-more-btn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    text.style.maxHeight = "none";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    text.style.maxHeight = "150px";
    btn.textContent = "Read More";
  }
}

document.querySelectorAll(".testimonial-content").forEach((testimonial) => {
  const moreText = testimonial.querySelector(".more-text");
  if (moreText) moreText.style.display = "none";
});
