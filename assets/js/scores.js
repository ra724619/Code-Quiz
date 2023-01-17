// The button and trigger
let clearBtn = document.getElementById('clear')
// The container element
let rankEl = document.getElementById('highscores')


// Check highmask logic: click the highmask tag and redirect to the highmask page.

let renderPlayerFromStorage = function() {
    let playerRecord = JSON.parse(localStorage.getItem("playerRecord"))||[];
    playerRecord.sort(function(a,b){
        return b.score - a.score;
    });
    playerRecord.forEach(function(score) {
    let liEl = document.createElement('li');
    liEl.textContent = "Player: " + score.name + ' ' + "Score:" + score.score;
    rankEl.appendChild(liEl);
    });
}

let clearHighscores = function() {
    localStorage.clear();
}

renderPlayerFromStorage();
// Clear Highscores button logic: click clear Highscores button to clear Highscores
clearBtn.addEventListener('click',clearHighscores);
