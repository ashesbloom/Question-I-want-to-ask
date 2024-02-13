const buttonHeight = 50;
const buttonWidth = 150;
const maxwidth  = window.innerWidth - buttonWidth;
const maxheight = window.innerHeight - buttonHeight;


window.addEventListener('DOMContentLoaded', () => {
    const pos = document.documentElement;
    const light = document.getElementById('light');

    pos.addEventListener('mousemove', e => {
        pos.style.setProperty('--x', e.clientX + 'px');
        pos.style.setProperty('--y', e.clientY + 'px');
        light.style.removeProperty('background');
        light.style.background = `radial-gradient(circle at var(--x) var(--y), transparent 3%, rgba(0,0,0,0.93) 15%)`;

    });
});
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
        if(loop <= 20 ){
            button.style.position = 'absolute';
            button.style.left = Math.floor(Math.random() * (maxwidth +1)) + 'px';
            button.style.top = Math.floor(Math.random() * (maxheight +1)) + 'px';
            loop++;
        }
    });
});

let doctitle = document.title;

window.addEventListener('blur', () => {
    document.title = 'Come back! 😒';
})
window.addEventListener('focus', () => {
    document.title = doctitle;
});