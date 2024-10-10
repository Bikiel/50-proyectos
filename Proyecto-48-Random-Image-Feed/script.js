const container = document.querySelector('.container');
const picsumURL = 'https://picsum.photos/';


const width = 600;
const height = 400;
const rows = 5;


for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    
    
    img.src = `${picsumURL}${width}/${height}?random=${Math.random()}`; 

    img.alt = "Ramdon Image";

    img.onerror = () => {
        console.error(`Error loading image: ${img.src}`);
    };

    container.appendChild(img);
}
