
let who = ['el perro','mi abuela','mi tortuga','mi Pajaro', ];
let what = ['se comió','se meó','aplastó','rompió', ];
let when = ['antes de clases','justo a tiempo', 'cuando terminé', 'mientras almorzaba','mientras yo rezaba'];

function excuseGenerator(quien, que, cuando){
    numQuien = Math.floor(Math.random() * quien.length);
    numQue = Math.floor(Math.random() * que.length);
    numCuando = Math.floor(Math.random() * cuando.length);
    return quien[numQuien] + " " + que[numQue] + " " + "mi tarea" + " " + cuando[numCuando];
}
function onLoad(){
    var excusa = document.getElementById('excuse');
    excusa.innerHTML = excuseGenerator(who, what, when);
}
window.onload = onLoad;