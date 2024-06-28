const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let circulosActivos = 1;

next.addEventListener("click", () => {
  circulosActivos++;

  if (circulosActivos > circles.length) {
    circulosActivos = circles.length;
  }

  update(); 
});

prev.addEventListener("click", () => {
  circulosActivos--; 

  if (circulosActivos < 1) {
    circulosActivos = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < circulosActivos) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active")

  /*progress.style.width =(actives.length - 1) /  (circles. length - 1) * 100 + '%'

  if(circulosActivos === 1){
 prev.disabled = true
  } else if(circulosActivos  !== 1 )
    prev.disabled = false
}*/

  progress.style.width =(actives.length - 1) /  (circles. length - 1) * 100 + '%'

  if(circulosActivos === 1){
 prev.disabled = true
  } else if(circulosActivos  === circles.length){
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
}

}