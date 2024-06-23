function place_blocks(size){
    let block_length = (100/size);
    for (let i = 1; i <= (size * size); i++){
        const block = document.createElement('div');
        block.classList.add('block-item');
        block.setAttribute('style',`border:1px solid;height:${block_length}%;width:${block_length}%;box-sizing:border-box;opacity:1`);
        sketch_block.appendChild(block);
        block.addEventListener('mouseenter', () => {
            if (choice == 'eraser'){
                block.style.backgroundColor = 'white';    
                block.style.opacity = '1'; 
                isClear = true;         
            }else if (choice == 'rainbow'){
                const color_list = ['#ff0000','#ff7f00','#ffff00','#7fff00','#00ff00','#00ff7f','#00ffff','#007fff','#0000ff','#7f00ff'
                ]
                let chosenColor = color_list[Math.floor(Math.random() * color_list.length)];
                block.style.backgroundColor = chosenColor;
                block.style.opacity = '1';
                isClear = false;

            }else if(choice == 'shading'){
                const current_opacity_str = block.style.opacity;
                const current_opacity = parseFloat(current_opacity_str) || 1;
                let new_opacity = current_opacity - 0.1;

                if (new_opacity < 0) {
                    new_opacity = 1; 
                }

                block.style.opacity = new_opacity.toString();

                if (block.style.backgroundColor === 'white' || block.style.backgroundColor === '') {
                    block.style.backgroundColor = 'black';
                }


            }else{
                block.style.backgroundColor = 'black';
                block.style.opacity = '1';
                isClear = false;  
                
            }   
                    
            
        });
    }
}


function clear(){
    const blocks = document.querySelectorAll('.sketch-block div');
    blocks.forEach((item) => {
        item.style.backgroundColor = 'White';
        item.style.opacity = '1';
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
const shading_button = document.querySelector('#shading-mode');
const slider = document.querySelector('.slider');
const slider_info = document.querySelector('#sliderValue');
let isClear  = true;

place_blocks(10);

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

shading_button.addEventListener('click', () => 
    {
        choice = 'shading';
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




