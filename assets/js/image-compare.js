document.querySelectorAll(".image-compare").forEach((compare) => {
  const slider = compare.querySelector(".image-compare__slider");
  const first = compare.querySelector(".image-compare__first");
  const second = compare.querySelector(".image-compare__second");

  if (!slider || !first || !second) return;

  function updateImages() {
    const blend = Number(slider.value) / 100;
    first.style.opacity = 1 - blend;
    second.style.opacity = blend;
  }

  slider.addEventListener("input", updateImages);
  updateImages();
});