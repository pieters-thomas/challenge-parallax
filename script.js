
OBSTACLES = [
    'obstacle_crate',
]

let jumping = false;
let sprite = document.getElementById('sprite');
let spawnTime = 3000;

document.addEventListener('keydown', (event)=>{
    if(event.key === ' ' && !jumping){
        jumping = true;
        sprite.classList.add('jumping');

        setTimeout(function (){
            jumping = false;
            sprite.classList.remove('jumping');
        }, 2200)
    }
})

setInterval(function rollObstacles()
    {
        let type = Math.floor((Math.random()*OBSTACLES.length));
        let spawn = Math.floor((Math.random()*2000));
        
        setTimeout(function (){
            let obstacle = document.createElement('div');
            obstacle.setAttribute('class','obstacle')
            obstacle.classList.add(OBSTACLES[type])
            document.body.appendChild(obstacle);
        }, spawn)

        setTimeout(function (){
            let obstacle = document.getElementsByClassName('obstacle')
            document.body.removeChild(obstacle[0]);
        }, 20000)
    }, spawnTime)
