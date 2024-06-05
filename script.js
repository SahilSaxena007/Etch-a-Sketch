// To essential place 16 * 16 div containers exactly of the same size in the grid which is 700 * 700

function place_blocks(size){
    let block_length = (100/size);
    for (let i = 1; i <= (size * size); i++){
        const block = document.createElement('div');
        block.classList.add('block-item');
        block.setAttribute('style',`border:1px solid;height:${block_length}%;width:${block_length}%;box-sizing:border-box;`);
        sketch_block.appendChild(block);
        block.addEventListener('mouseenter', () => {
            block.style.backgroundColor = 'black';
        });
    }

}


// Creating a function where we enter a div and it becomes coloured and only that element becomes coloured.


const sketch_block = document.querySelector('.sketch-block');
place_blocks(10);