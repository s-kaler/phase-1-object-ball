console.log('Advanced debugging example running.')
//debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    console.log(gameKey);
    //debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      console.log(teamKey);
      //debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.players;
      console.log(data);
      for (let key in data) {
        console.log(key);
        //debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()
