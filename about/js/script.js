particlesJS.load('particles-js', './js/particlesjs-config.json')

//setting the random logo glow color
const setRandomColour = (() => {
    const random = Math.floor(Math.random() * 5);
    let colourArr = ['green', 'blue', 'yellow', 'red', 'purple', 'cyan']
    
    document.getElementById('div1').classList.add(colourArr[random])
})()

// console.log(window.screen.width);

if(window.screen.width<=769){
    document.querySelector('.center-content').classList.remove('center-content')
    document.querySelector('.container').classList.remove('container')
}
