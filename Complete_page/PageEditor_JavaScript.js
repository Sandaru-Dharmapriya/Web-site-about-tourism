const details = document.getElementById('details');

function updateDetailsWidth() {
    const detailsWidth = window.innerWidth;
    detailsWidthDisplay.textContent = `Detail Width: ${viewportWidth}px`;
}

// Initial update on page load
updateDetailsWidth();

// Update on window resize
window.addEventListener('resize', updateDetailsWidth);