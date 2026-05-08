function start(){
    document.querySelector('#startScrn').classList.add('hide');

    let team = Number(document.querySelector('#team').value);
    console.log(team);

    let userCon = document.querySelector("#users");

    for(let i = 0; i < team; i++){
        let div = document.createElement('div');
        div.className = 'userOuter';
        div.style = `height:${100 / team}%;`;

        let inner = document.createElement('div');
        inner.className = 'userInner';

        let name = document.createElement('div');
        name.className = 'userBox';

        let input = document.createElement('input');
        input.placeholder = 'Enter name here.';

        name.appendChild(input);

        let score = document.createElement('div');
        score.className = 'userBox';
        score.innerHTML = '99999';

        inner.appendChild(name);
        inner.appendChild(score);
        div.appendChild(inner);
        userCon.appendChild(div);
    }


}

window.onload = function () {
    document.addEventListener('contextmenu', event => event.preventDefault());
}