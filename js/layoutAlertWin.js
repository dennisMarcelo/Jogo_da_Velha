
window.addEventListener('resize', function(){
    center()
})

function center(){
    var container = document.querySelector('#alertWinner'),
    w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    
    container.style.left = (x / 2) - (container.clientWidth / 2) + 'px';
}