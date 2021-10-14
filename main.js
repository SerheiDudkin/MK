const player1 = {
    name: 'Lion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['gun', 'sword', 'machine'],
    attack: function () {
        console.log('Lion' + 'Fight...')
    }
};

const player2 = {
    name: 'Tiger',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['gun', 'sword', 'machine'],
    attack: function () {
        console.log('Tiger' + 'Fight...')
    }
};
function creatPlayer (playerClass, playerParameters) {
    const $divPlayer = document.createElement('div');
    $divPlayer.className = playerClass;

    const $divProgressBar = document.createElement('div');
    $divProgressBar.className = 'progressbar';

    const $divLife = document.createElement('div');
    $divLife.className = 'life';
    $divLife.style.width = playerParameters.hp;

    const $divName = document.createElement('div');
    $divName.className = 'name';
    $divName.innerText = playerParameters.name;

    const $divCharacter = document.createElement('civ');
    $divCharacter.className = 'character';

    const $characterImg = document.createElement('img');
    $characterImg.src = playerParameters.img;

    $divPlayer.appendChild($divProgressBar);
    $divPlayer.appendChild($divCharacter);
    $divProgressBar.appendChild($divLife);
    $divProgressBar.appendChild($divName);
    $divCharacter.appendChild($characterImg);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($divPlayer);
};

creatPlayer('player1', player1);
creatPlayer('player2', player2);

player1.attack();
player2.attack();
