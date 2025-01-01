const artworks = [
    {
        imageUrl: "image/forest.jpg",
        title: "Sunset",
        artist: "Aleana",
        description: "A beautiful sunset over the ocean.",
        year: 2021,
        medium: "Oil on canvas"
    },
    {
        imageUrl: "image/mountain.jpg",
        title: "Mountain",
        artist: "James Smith",
        description: "A majestic mountain view.",
        year: 2020,
        medium: "Acrylic"
    },
    {
        imageUrl: "image/sunset.jpeg",
        title: "Forest",
        artist: "Alex Green",
        description: "A calm forest with tall trees.",
        year: 2019,
        medium: "Digital Art"
    },
    {
        imageUrl: "image/ocean.jpg",  
        title: "Ocean Breeze",       
        artist: "Maria black",      
        description: "A calming ocean view.",  
        year: 2018,               
        medium: "Watercolor"        
    },
    {
        imageUrl: "image/desert.jpg", 
        title: "Desert Landscape",   
        artist: "Gruceli Stone",       
        description: "The vastness of the desert.",  
        year: 2025,               
        medium: "Oil on canvas"  
    }
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("artworkModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalArtist = document.getElementById("modalArtist");
const modalDescription = document.getElementById("modalDescription");
const modalYear = document.getElementById("modalYear");
const modalMedium = document.getElementById("modalMedium");
const closeModal = document.getElementById("closeModal");
const darkModeToggle = document.getElementById("darkmodetoggle");

artworks.forEach((artwork, index) => {
    const img = document.createElement("img");
    img.src = artwork.imageUrl;
    img.alt = artwork.title;
    img.dataset.index = index; 
    img.addEventListener("click", openModal); 
    gallery.appendChild(img);
});

function openModal(event) {
    const index = event.target.dataset.index;
    const artwork = artworks[index];

    modalImage.src = artwork.imageUrl;
    modalTitle.textContent = artwork.title;
    modalArtist.textContent = `Artist: ${artwork.artist}`;
    modalDescription.textContent = artwork.description;
    modalYear.textContent = `Year: ${artwork.year}`;
    modalMedium.textContent = `Medium: ${artwork.medium}`;

    modal.classList.add("show");  
    modal.setAttribute("aria-hidden", "false");  
}

closeModal.addEventListener("click", closeModalFunction);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModalFunction();
    }
});


function closeModalFunction() {
    modal.classList.remove("show");  
    modal.setAttribute("aria-hidden", "true");  
}

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
