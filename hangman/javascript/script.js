    
    //When choosing the easy option
    function facil(){
        document.getElementById("easy").addEventListener("click", startGameEasy);
    }
    //Showing up what the user have to guess
    function colorGuess() {
        var h = document.createElement("p");
        var t = document.createTextNode("Adivinhe a cor:");
        h.appendChild(t);
        document.getElementById('whatToGuess').appendChild(h);
      }
    //color options
    var cores = [
        "amarelo",
        "azul",
        "verde",
        "vermelho",
        "roxo",
        "rosa",
        "preto",
        "lilas",
        "magenta",
        "branco",
        "cinza",
        "marrom",
        "laranja",
        "violeta",
        "dourado",
        "prata",
        "bege",
        "vinho",
        "turquesa",
        "purpura"
    ]

    let answer = '';
    let maxWrong = 8;
    let mistakes = 0;
    let guessed = [];
    let wordStatus = null;
    let timesPlayed = 0;

    //choosing a random color fo the user to guess
    function randomWordE(){
        answer = cores[Math.floor(Math.random() * cores.length)];
    }
    
    //Showing up the alphabet to select letter
    function generateButtonsE(){
        let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
        `
        <button
            class='btn btn-lg btn-secondary m-2'
            id='` + letter + `'
            onClick="handleGuess('`+ letter +`')"
        >
        ` + letter +`
        </button>
        `).join('');

        document.getElementById('keyboard').innerHTML = buttonsHTML;
    }

    //Applying the chosen letter
    function handleGuess(chosenLetter){
        guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
        document.getElementById(chosenLetter).setAttribute('disabled', true);

        if(answer.indexOf(chosenLetter) >= 0){
            guessedWordE();
            checkIfGameWon();
        }
        else if(answer.indexOf(chosenLetter) === -1){
            mistakes++;
            updateMistakesE();
            checkIfGameLost();
            updateHangmanPicture();
        }
    }

    //If the user chose the wrong letter, update picture
    function updateHangmanPicture(){
        document.getElementById("hangmanPic").src="img/" + mistakes + '.png';
    }

    //Check if the user won the game, if yes, show winning message
    function checkIfGameWon(){
        if(wordStatus === answer){
            document.getElementById("keyboard").innerHTML = "Voce venceu!!!";
            document.getElementById("keyboard").style.color = "green";
        }
    }
    //Check if the user lost the game, if yes, show losing message
    function checkIfGameLost(){
        if(mistakes === maxWrong){
            document.getElementById('wordSpotLight').innerHTML = "A resposta era: " + answer;
            document.getElementById("keyboard").innerHTML = "Voce perdeu ;(";
            document.getElementById('keyboard').style.color = "red";
        }
    }

    function guessedWordE(){
        wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : ' _ ')).join('');

        document.getElementById('wordSpotLight').innerHTML = wordStatus;
    }

    //Every letter applied, if mistaken, update how many mistakes until now
    function updateMistakesE(){
        document.getElementById('mistakes').innerHTML = mistakes;
    }

    //Reset the game
    function reset(){
        window.location.reload();
    }

    document.getElementById('maxWrong').innerHTML = maxWrong;

    //Start the game in easy mode
    function startGameEasy()
    {
    randomWordE();
    generateButtonsE();
    guessedWordE();
    colorGuess();
    timesPlayed++;
    this.disabled = true;
    }

//---------------------------------------------------------------------- MEDIUM DIFFICULTY --------------------------------------------------------------------------------------
    //When choosing the medium option
    function medio(){
        document.getElementById("medium").addEventListener("click", startGameMedium);
    }

    function countryGuess() {
        var y = document.createElement("p");
        var u = document.createTextNode("Adivinhe o pais:");
        y.appendChild(u);
        document.getElementById('whatToGuess').appendChild(y);
      }

    var paises = [
        "brasil",
        "italia",
        "inglaterra",
        "china",
        "japao",
        "irlanda",
        "canada",
        "alemanha",
        "india",
        "russia",
        "portugal",
        "ira",
        "holanda",
        "australia",
        "mexico",
        "belgica",
        "argentina",
        "chile",
        "peru",
        "espanha"
    ]

    function randomWordM(){
        answer = paises[Math.floor(Math.random() * paises.length)];

    }

    function generateButtonsM(){
        let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
        `
        <button
            class='btn btn-lg btn-secondary m-2'
            id='` + letter + `'
            onClick="handleGuess('`+ letter +`')"
        >
        ` + letter +`
        </button>
        `).join('');

        document.getElementById('keyboard').innerHTML = buttonsHTML;
    }

    function handleGuess(chosenLetter){
        guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
        document.getElementById(chosenLetter).setAttribute('disabled', true);

        if(answer.indexOf(chosenLetter) >= 0){
            guessedWordM();
            checkIfGameWon();
        }
        else if(answer.indexOf(chosenLetter) === -1){
            mistakes++;
            updateMistakesM();
            checkIfGameLost();
            updateHangmanPicture();
        }
    }

    function updateHangmanPicture(){
        document.getElementById("hangmanPic").src="img/" + mistakes + '.png';
    }

    function checkIfGameWon(){
        if(wordStatus === answer){
            document.getElementById("keyboard").innerHTML = "Voce venceu!!!";
            document.getElementById("keyboard").style.color = "green";
        }
    }

    function checkIfGameLost(){
        if(mistakes === maxWrong){
            document.getElementById('wordSpotLight').innerHTML = "A resposta era: " + answer;
            document.getElementById("keyboard").innerHTML = "Voce perdeu ;(";
            document.getElementById('keyboard').style.color = "red";
        }
    }

    function guessedWordM(){
        wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : ' _ ')).join('');

        document.getElementById('wordSpotLight').innerHTML = wordStatus;
    }

    function updateMistakesM(){
        document.getElementById('mistakes').innerHTML = mistakes;
    }

    function reset(){
        window.location.reload();
    }

    document.getElementById('maxWrong').innerHTML = maxWrong;

    //Start the game in easy mode
    function startGameMedium()
    {
    randomWordM();
    generateButtonsM();
    guessedWordM();
    countryGuess();
    timesPlayed++;
    this.disabled = true;
    }

    //---------------------------------------------------------------------- HARD DIFFICULTY --------------------------------------------------------------------------------------
    //When choosing the hard option
    function dificil(){
        document.getElementById("hard").addEventListener("click", startGameHard);
    }

    function gameGuess() {
        var a = document.createElement("p");
        var b = document.createTextNode("Adivinhe o jogo:");
        a.appendChild(b);
        document.getElementById('whatToGuess').appendChild(a);
    }

    var jogo = [
        "tetris",
        "rockband",
        "thesims",
        "residentevil",
        "callofduty",
        "starcraft",
        "godofwar",
        "supermario",
        "sanandreas",
        "crysis",
        "uncharted",
        "warcraft",
        "portal",
        "counterstrike",
        "thelastofus",
        "thewitcher",
        "minecraft",
        "leagueoflegends",
        "skyrim",
        "thelegendofzelda"
    ]

    function randomWordH(){
        answer = jogo[Math.floor(Math.random() * jogo.length)];

    }

    function generateButtonsH(){
        let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
        `
        <button
            class='btn btn-lg btn-secondary m-2'
            id='` + letter + `'
            onClick="handleGuess('`+ letter +`')"
        >
        ` + letter +`
        </button>
        `).join('');

        document.getElementById('keyboard').innerHTML = buttonsHTML;
    }

    function handleGuess(chosenLetter){
        guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
        document.getElementById(chosenLetter).setAttribute('disabled', true);

        if(answer.indexOf(chosenLetter) >= 0){
            guessedWordH();
            checkIfGameWon();
        }
        else if(answer.indexOf(chosenLetter) === -1){
            mistakes++;
            updateMistakesH();
            checkIfGameLost();
            updateHangmanPicture();
        }
    }

    function updateHangmanPicture(){
        document.getElementById("hangmanPic").src="img/" + mistakes + '.png';
    }

    function checkIfGameWon(){
        if(wordStatus === answer){
            document.getElementById("keyboard").innerHTML = "Voce venceu!!!";
            document.getElementById("keyboard").style.color = "green";
        }
    }

    function checkIfGameLost(){
        if(mistakes === maxWrong){
            document.getElementById('wordSpotLight').innerHTML = "A resposta era: " + answer;
            document.getElementById("keyboard").innerHTML = "Voce perdeu ;(";
            document.getElementById('keyboard').style.color = "red";
        }
    }

    function guessedWordH(){
        wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : ' _ ')).join('');

        document.getElementById('wordSpotLight').innerHTML = wordStatus;
    }

    function updateMistakesH(){
        document.getElementById('mistakes').innerHTML = mistakes;
    }

    function reset(){
        window.location.reload();
    }

    document.getElementById('maxWrong').innerHTML = maxWrong;

    //Start the game in hard mode
    function startGameHard()
    {
    randomWordH();
    generateButtonsH();
    guessedWordH();
    gameGuess();
    timesPlayed++;
    this.disabled = true;
    }
