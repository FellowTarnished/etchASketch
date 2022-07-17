function addLine() {

    for (i=1;i<17;i++){
        const container = document.querySelector('#container');
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (j=1;j<17;j++){
            const box = document.createElement('div');
            box.textContent = ` Hi! `;
            row.appendChild(box);
        }
    }
}

function mouseOver() {

    const parent = document.querySelectorAll('.row div');
    console.log(parent)
    for (const p of parent) {
    p.addEventListener("mouseenter", () => {

        p.style.backgroundColor = "purple";
    
        }
    )
}}


addLine();
mouseOver();

