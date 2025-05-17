document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const modal = document.getElementById('popupModal');

  hamburger.addEventListener('click', function () {
    modal.classList.toggle('active');
  });

  // Optional: Close modal when clicking outside
  window.addEventListener('click', function (e) {
    if (!modal.contains(e.target) && e.target !== hamburger) {
      modal.classList.remove('active');
    }
  });
});
