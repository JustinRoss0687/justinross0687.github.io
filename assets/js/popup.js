function closePopup(popupId) {
    // Hide the popup by setting its opacity and visibility
    var popup = document.getElementById(popupId);
    popup.style.visibility = 'hidden';
    popup.style.opacity = 0;

    // Remove the hash from the URL to prevent scroll
    history.pushState(null, null, window.location.pathname);
  }

  function openPopup(popupId) {
    // Show the popup by setting its opacity and visibility
    var popup = document.getElementById(popupId);
    popup.style.visibility = 'visible';
    popup.style.opacity = 0.95;

    // Update the URL hash to reflect the open popup
    history.pushState(null, null, '#' + popupId);
  }