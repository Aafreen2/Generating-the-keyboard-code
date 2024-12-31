const displayKey = document.querySelector('.key h2');
const displayKeyCode = document.querySelector('.keyCode h2');
const keyCodeDiv = document.querySelector('.keyCode');


 
    window.addEventListener('keydown',(e) => {
        displayKey.innerText = e.key;
        displayKeyCode.innerText = e.keyCode;
         console.log(e);
         
        // for space that is not visible 
        if(e.keyCode === 32){
            displayKey.innerText = 'Space';
        }
         

    })
 