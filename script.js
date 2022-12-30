let buttons = document.querySelectorAll('.button');

buttons.forEach(add => {
    let newnew = add.addEventListener('click', reveal);
})

let letters = document.querySelectorAll('.letters h1');

function reveal() {
    if (this.classList.contains('one')) {
        letters[0].classList.toggle('remove');
        }else if(this.classList.contains('two')){
            letters[1].classList.toggle('remove');
        }else if(this.classList.contains('three')){
            letters[2].classList.toggle('remove')

    }
}