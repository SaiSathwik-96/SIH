// report.js - Handles report page interactions
window.onload = function() {
  // Remove uploaded image preview
  const removeBtn = document.querySelector('.report-img-remove');
  const imgPreview = document.querySelector('.report-img-preview');
  const imgName = document.querySelector('.report-img-name');
  const imgSize = document.querySelector('.report-img-size');
  if (removeBtn) {
    removeBtn.onclick = function() {
      if (imgPreview) imgPreview.style.display = 'none';
      if (imgName) imgName.style.display = 'none';
      if (imgSize) imgSize.style.display = 'none';
      removeBtn.style.display = 'none';
    };
  }

  // Location button (can be extended to use geolocation)
  const locationBtn = document.querySelector('.report-location-btn');
  if (locationBtn) {
    locationBtn.onclick = function() {
      alert('Location feature coming soon!');
    };
  }

  // Submit button
  const reportForm = document.querySelector('.report-form');
  if (reportForm) {
    reportForm.onsubmit = function(e) {
      e.preventDefault();
      alert('Complaint submitted!');
    };
  }
};
