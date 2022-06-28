const container = document.querySelector(".container");

for(let i=0; i < 16;i++){
    const di = document.createElement('div');
    di.classList.add('child1');
    
    for(let y=0; y<16; y++){
    const d = document.createElement('div');
        d.classList.add('child2');
        d.style.display="flex";
        d.style.height="100px";
        d.style.width="100px";
        d.onmouseover = ()=>{
       d.style.backgroundColor="blue";};
    di.appendChild(d);
    container.appendChild(di);
    
    }
    
 
}

