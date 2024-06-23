function place_blocks(size){

    // In order to set a changeable grid size, We need to first take input from the user in the form of a length bar. 
    let block_length = (100/size);
    for (let i = 1; i <= (size * size); i++){
        const block = document.createElement('div');
        block.classList.add('block-item');
        block.setAttribute('style',`border:1px solid;height:${block_length}%;width:${block_length}%;box-sizing:border-box;`);
        sketch_block.appendChild(block);
        block.addEventListener('mouseenter', () => {
            if (choice == 'eraser'){
                block.style.backgroundColor = 'white';     
                isClear = true;          
            }else if (choice == 'rainbow'){
                const color_list = ['#ff0000','#ff7f00','#ffff00','#7fff00','#00ff00','#00ff7f','#00ffff','#007fff','#0000ff','#7f00ff'
                ]
                let chosenColor = color_list[Math.floor(Math.random() * color_list.length)];
                block.style.backgroundColor = chosenColor;
                isClear = false;

            }else{
                block.style.backgroundColor = 'black';
                isClear = false;  
                
            }   
                    
            
        });
    }
}


function clear(){
    const blocks = document.querySelectorAll('.block-item');
    blocks.forEach((item) => {
        item.style.backgroundColor = 'White';
    })
    isClear = true;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


const sketch_block = document.querySelector('.sketch-block');
const clear_button = document.querySelector('#clear_button');
let choice = 'color';
const eraser_button = document.querySelector('#eraser-mode');
const rainbow_button = document.querySelector('#rainbow-mode');
const color_button = document.querySelector('#color-mode');
const slider = document.querySelector('.slider');
const slider_info = document.querySelector('#sliderValue');
let isClear  = true;
let size = slider.value;

place_blocks(size);

clear_button.addEventListener('click',clear);
eraser_button.addEventListener('click', () => 
    {
        choice = 'eraser';        
    }
)

color_button.addEventListener('click', () => 
    {
        choice = 'color';
    }
)

rainbow_button.addEventListener('click', () => 
    {
        choice = 'rainbow';
    }
)


slider.addEventListener('input',()=>
    {
        if (isClear){
            size = slider.value;
            removeAllChildNodes(sketch_block);
            place_blocks(size);
            slider_info.textContent = `${size}x${size}`;
        }
        
    }
)




