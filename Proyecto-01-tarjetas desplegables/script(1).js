const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        EleminarActive()
        panel.classList.add('active')



    });
    
});

function EleminarActive() {
    panels.forEach(panel => { 
     panel.classList.remove ('active')
    })
}