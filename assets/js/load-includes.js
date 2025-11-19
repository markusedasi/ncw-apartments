async function loadInclude (elementId, filePath) {
    const container = document.getElementById(elementId);
    if (!container) return;

    try {
        const response = await fetch(filePath);
        const html = await response.text();
        container.innerHTML = html;
    } catch (error) {
        console.error("Failed to load include:", filePath);
    }
}

loadInclude("header-placeholder", "includes/header.html");
loadInclude("footer-placeholder", "includes/footer.html");
