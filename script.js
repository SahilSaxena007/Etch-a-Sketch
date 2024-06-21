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
                

            }else if (choice == 'rainbow'){

            }else{
                block.style.backgroundColor = 'black';
            }            
            
        });
    }
}

function isClearOrNot(){
    const blocks = document.querySelectorAll('.block-item');
    isClear = true;
    blocks.forEach((item) => {
        // Use getComputedStyle to get the actual computed background color
        const backgroundColor = window.getComputedStyle(item).backgroundColor;
        if (backgroundColor !== 'rgb(255, 255, 255)' && backgroundColor !== 'white') {
            isClear = false;
        }
    });
    
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
        const blocks = document.querySelector('.block-item');
        
    }
)

color_button.addEventListener('click', () => 
    {
        choice = 'color';
        const blocks = document.querySelector('.block-item');
        
    }
)



slider.addEventListener('input',()=>
    {
        isClearOrNot()
        if (isClear){
            size = slider.value;
            removeAllChildNodes(sketch_block);
            place_blocks(size);
            slider_info.textContent = `${size}x${size}`;
        }
        
    }
)




