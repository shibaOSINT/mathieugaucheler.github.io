document.addEventListener("DOMContentLoaded", function () {
  const article = document.querySelector(".post-content");
  const progressBar = document.querySelector(".reading-progress-fill");
  const progressContainer = document.querySelector(".reading-progress");

  if (!article || !progressBar) return;

  function updateProgress() {
    const articleTop = article.getBoundingClientRect().top + window.scrollY;
    const articleHeight = article.offsetHeight;
    const scrollableDistance = articleHeight - window.innerHeight;

    let progress = 0;

    if (scrollableDistance > 0) {
      progress = (window.scrollY - articleTop) / scrollableDistance;
    } else if (window.scrollY >= articleTop) {
      progress = 1;
    }

    progress = Math.min(1, Math.max(0, progress));

    progressBar.style.transform = `scaleX(${progress})`;

    if (progressContainer) {
      progressContainer.setAttribute(
        "aria-valuenow",
        Math.round(progress * 100)
      );
    }
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  updateProgress();
});