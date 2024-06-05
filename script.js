// To essential place 16 * 16 div containers exactly of the same size in the grid which is 700 * 700

function place_blocks(size){

    // In order to set a changeable grid size, We need to first take input from the user in the form of a length bar. 
    let block_length = (100/size);
    for (let i = 1; i <= (size * size); i++){
        const block = document.createElement('div');
        block.classList.add('block-item');
        block.setAttribute('style',`border:1px solid;height:${block_length}%;width:${block_length}%;box-sizing:border-box;`);
        sketch_block.appendChild(block);
        block.addEventListener('mouseenter', () => {
            block.style.backgroundColor = 'black';
            isClear = false;
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


// Creating a function where we enter a div and it becomes coloured and only that element becomes coloured.

const sketch_block = document.querySelector('.sketch-block');
const clear_button = document.querySelector('#clear_button');
const slider = document.querySelector('.slider');
const slider_info = document.querySelector('#sliderValue');
let isClear  = true;
let size = slider.value;

place_blocks(size);

//Events
clear_button.addEventListener('click',clear);
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




