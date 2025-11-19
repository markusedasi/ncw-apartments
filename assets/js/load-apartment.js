async function loadApartment() {
    const params = new URLSearchParams(window.location.search);
    const unit = params.get("unit");

    if (!unit) {
        document.getElementById("apt-title").textContent = "No apartment selected.";
        return;
    }

    try {
        const response = await fetch("data/apartments.json");
        const data = await response.json();

        const apt = data[unit];
        if (!apt) {
            document.getElementById("apt-title").textContent = "Apartment not found.";
            return;
        }

        document.getElementById("apt-title").textContent = apt.title;
        document.getElementById("apt-description").textContent = apt.description;

        const amenitiesEl = document.getElementById("apt-amenities");
        amenitiesEl.innerHTML = "";
        apt.amenities.forEach(a => {
            const li = document.createElement("li");
            li.textContent = a;
            amenitiesEl.appendChild(li);
        });

        const imagesEl = document.getElementById("apt-images");
        imagesEl.innerHTML = "";
        apt.images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = apt.title;
            img.classList.add("apt-image");
            imagesEl.appendChild(img);
        });

    } catch (err) {
        console.error("Failed to load apartment data", err);
    }
}

loadApartment();
