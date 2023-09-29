function gameObject() {
    const game = {
        home: {
            teamName: "Brooklyn Nets",
            colors: "Black, White",
            players: {
                "Alan Anderson": {
                    "number": "0",
                    "shoe": "16",
                    "points": "22",
                    "rebounds": "12",
                    "assists": "12",
                    "steals": "3",
                    "blocks": "1",
                    "slamDunks": "1"
                },
                "Reggie Evans": {
                    "number": "30",
                    "shoe": "14",
                    "points": "12",
                    "rebounds": "12",
                    "assists": "12",
                    "steals": "12",
                    "blocks": "12",
                    "slamDunks": "7"
                },
                "Brook Lopez": {
                    "number": "11",
                    "shoe": "17",
                    "points": "17",
                    "rebounds": "19",
                    "assists": "10",
                    "steals": "3",
                    "blocks": "1",
                    "slamDunks": "15"
                },
                "Mason Plumlee": {
                    "number": "1",
                    "shoe": "19",
                    "points": "26",
                    "rebounds": "12",
                    "assists": "6",
                    "steals": "3",
                    "blocks": "8",
                    "slamDunks": "5"
                },
                "Jason Terry": {
                    "number": "31",
                    "shoe": "15",
                    "points": "19",
                    "rebounds": "2",
                    "assists": "2",
                    "steals": "4",
                    "blocks": "11",
                    "slamDunks": "1"
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: "Turquoise, Purple",
            players: {
                "Jeff Adrien": {
                    "number":   "4",
                    "shoe":     "18",
                    "points":   "10",
                    "rebounds": "1",
                    "assists":  "1",
                    "steals":   "2",
                    "blocks":   "7",
                    "slamDunks":"2"
                },
                "Bismak Biyombo": {
                    "number":   "0",
                    "shoe":     "16",
                    "points":   "12",
                    "rebounds": "4",
                    "assists":  "7",
                    "steals":   "7",
                    "blocks":   "15",
                    "slamDunks":"10"
                },
                "DeSagna Diop": {
                    "number":   "2",
                    "shoe":     "14",
                    "points":   "24",
                    "rebounds": "12",
                    "assists":  "12",
                    "steals":   "4",
                    "blocks":   "5",
                    "slamDunks":"5"
                },
                "Ben Gordon": {
                    "number":   "8",
                    "shoe":     "15",
                    "points":   "33",
                    "rebounds": "3",
                    "assists":  "2",
                    "steals":   "1",
                    "blocks":   "1",
                    "slamDunks":"0"
                },
                "Brendan Haywood": {
                    "number":   "33",
                    "shoe":     "15",
                    "points":   "6",
                    "rebounds": "12",
                    "assists":  "12",
                    "steals":   "22",
                    "blocks":   "5",
                    "slamDunks":"12"
                }
            } 
        }

    }
    return game;
}

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}

function awayTeamName() {
    let object = gameObject();
    return object["away"]["teamName"];
}

//console.log(gameObject());

function bigShoeRebounds(){
    let game = gameObject();
    let rebounds;
    let shoeSize = "0";
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        //console.log(teamObj);
        for (let teamKey in teamObj) {
            //console.log(teamKey);
            if(teamKey === 'players'){
                let allPlayers = teamObj[teamKey];
                //console.log(allPlayers);
                for(let playerInfo in allPlayers){
                    //console.log(playerInfo);
                    let playerKey = allPlayers[playerInfo];
                    console.log(playerKey['shoe']);
                    if(Number(playerKey['shoe']) > shoeSize){
                        shoeSize = Number(playerKey['shoe']);
                        rebounds = playerKey['rebounds'];
                        console.log("biggest shoe size:" + shoeSize);
                    }
                }
            }
        }
    }
    console.log(rebounds);
    return rebounds;
}     
//bigShoeRebounds();

function mostPointsScored(){
    let game = gameObject();
    let mostPoints = 0;
    let playerName;
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        //console.log(teamObj);
        for (let teamKey in teamObj) {
            //console.log(teamKey);
            if(teamKey === 'players'){
                let allPlayers = teamObj[teamKey];
                //console.log(allPlayers);
                for(let playerInfo in allPlayers){
                    //console.log(playerInfo);
                    let playerKey = allPlayers[playerInfo];
                    console.log(playerKey['points']);
                    if(Number(playerKey['points']) > mostPoints){
                        mostPoints = Number(playerKey['points']);
                        playerName = playerInfo;
                        console.log("most points scored:" + mostPoints);
                    }
                }
            }
        }
    }
    console.log(playerName);
    return playerName;
}
//mostPointsScored();

function winningTeam(){
    let game = gameObject();
    let mostPoints = 0;
    let teamName;
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let teamPoints = 0;
        //console.log(teamObj);
        for (let teamKey in teamObj) {
            //console.log(teamKey);
            if(teamKey === 'players'){
                let allPlayers = teamObj[teamKey];
                //console.log(allPlayers);
                for(let playerInfo in allPlayers){
                    //console.log(playerInfo);
                    let playerKey = allPlayers[playerInfo];
                    teamPoints += Number(playerKey['points']);
                    console.log(teamPoints);
                }
            }
        }
        if(teamPoints > mostPoints){
            mostPoints = teamPoints;
            teamName = teamObj.teamName;
            console.log(teamObj.teamName);
        }
    }
    console.log("Winning Team: " + teamName);
    return teamName;
}

//winningTeam();

function playerWithLongestName(){
    let game = gameObject();
    let longestNameLength = 0;
    let playerName;
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        //console.log(teamObj);
        for (let teamKey in teamObj) {
            //console.log(teamKey);
            if(teamKey === 'players'){
                let allPlayers = teamObj[teamKey];
                //console.log(allPlayers);
                for(let playerInfo in allPlayers){
                    console.log(playerInfo);
                    console.log(playerInfo.length);
                    if(playerInfo.length > longestNameLength){
                        longestNameLength = playerInfo.length; 
                        playerName = playerInfo;
                        console.log("longest name: " + playerName);
                    }
                }
            }
        }
    }
    console.log(playerName);
    return playerName;
}

//playerWithLongestName();

function doesLongNameStealATon(){
    let game = gameObject();
    let longestNameLength = 0;
    let playerName;
    let doThey = false;
    let mostSteals = 0;
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        //console.log(teamObj);
        for (let teamKey in teamObj) {
            //console.log(teamKey);
            if(teamKey === 'players'){
                let allPlayers = teamObj[teamKey];
                //console.log(allPlayers);
                for(let playerInfo in allPlayers){
                    console.log(playerInfo);
                    console.log(playerInfo.length);
                    let playerKey = allPlayers[playerInfo];
                    console.log("steals: " + playerKey['steals']);
                    if(playerInfo.length > longestNameLength){
                        longestNameLength = playerInfo.length; 
                        playerName = playerInfo;
                        console.log("longest name: " + playerName);
                        if(Number(playerKey['steals']) >= mostSteals){
                            mostSteals = Number(playerKey['steals']);
                            console.log("most steals: " + mostSteals);
                            console.log("name of most stealer: " + playerInfo);
                            doThey = true;
                        }
                        else{
                            doThey = false;
                        }
                    }
                }
            }
        }
    }
    console.log(doThey);
    return doThey;
}

doesLongNameStealATon();