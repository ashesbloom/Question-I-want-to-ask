const buttonHeight = 50;
const buttonWidth = 150;
const maxwidth  = window.innerWidth - buttonWidth;
const maxheight = window.innerHeight - buttonHeight;

var loop = 0;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button_no');
    button.addEventListener('click', () => {
        alert('Are you sure?');
        alert('I mean dude you have that *yes* option right there!');
        alert('You sure you want to go with no');
    });
    button.addEventListener('mouseover', () => {
        if (loop == 20){
            alert('Well ¬_¬ !');
            alert('Do whatever you want!');
            confirm("you have selected no! there is no going back!");
            alert('ok then');
            loop++;
        }
        if(loop <= 6){
            button.style.position = 'absolute';
            button.style.left = Math.floor(Math.random() * (maxwidth +1)) + 'px';
            button.style.top = Math.floor(Math.random() * (maxheight +1)) + 'px';
            loop++;
        }
    });
});