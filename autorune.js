function getStat() {

  let random;

  let stat1, stat2, stat3;

  //stat 1
  random = Math.floor(Math.random() * 5);
  if (random > 0) {
    random = Math.floor(Math.random() * 10);

    if (random === 1) {
      //hp
      random = Math.floor(Math.random() * 14);
      if (random > 0) {
        return {
          type: "hp",
          val: random
        }
      }
    }
    else if (random === 2) {
      //dp
      random = Math.floor(Math.random() * 14);
      if (random > 0) {
        return {
          type: "dp",
          val: random
        }
      }
    }
    else if (random === 3) {
      //mp
      random = Math.floor(Math.random() * 14);
      if (random > 0) {
        return {
          type: "mp",
          val: random
        }
      }
    }
    else if (random === 4) {
      //str
      random = Math.floor(Math.random() * 14);
      if (random > 0) {
        return {
          type: "str",
          val: random
        }
      }
    }
    else if (random === 5) {
      //def
      random = Math.floor(Math.random() * 14);
      if (random > 0) {
        return {
          type: "def",
          val: random
        }
      }
    }
    else if (random === 6) {
      //dex
      random = Math.floor(Math.random() * 14);
      if (random > 0) {
        return {
          type: "dex",
          val: random
        }
      }
    }
    else if (random === 7) {
      //int
      random = Math.floor(Math.random() * 14);
      if (random > 0) {
        return {
          type: "int",
          val: random
        }
      }
    }
    else if (random === 8) {
      //wis
      random = Math.floor(Math.random() * 14);
      if (random > 0) {
        return {
          type: "wis",
          val: random
        }
      }
    }
    else if (random === 9) {
      //luc
      random = Math.floor(Math.random() * 14);
      if (random > 0) {
        return {
          type: "luc",
          val: random
        }
      }
    }
  }
}

let cont = true;
let runeCount = 0;

//STOP CONDITIONS (EP4.5 MAX 3 STAT WILL BE GAIN)
let arCond = [{
  type: "hp",
  minVal: "12"
}, {
  type: "def",
  minVal: "8"
}, {
  type: "wis",
  minVal: "6"
}]
while (cont) {

  for (cond of arCond) {
    cond.done = false;
  }


  runeCount++;
  let stat1 = getStat();

  let stat2 = getStat();
  while (stat1 && stat2) {
    if (stat2.type == stat1.type) {
      stat2 = getStat();
    }
    else {
      break;
    }
  }

  let stat3 = getStat();
  while (stat3) {
    if (stat1 && stat3.type == stat1.type) {
      stat3 = getStat();
    }
    else if (stat2 && stat3.type == stat2.type) {
      stat3 = getStat();
    }
    else {
      break;
    }
  }

  if (stat1 || stat2 || stat3) {
    console.log("o-o-o-o-o-o-o-o-o-o-o-o")
  }

  //stat1
  if (stat1) {
    console.log(`${stat1.type} +${stat1.val}`)
    for (cond of arCond) {
      if (!cond.done) {
        if (stat1.type == cond.type && stat1.val >= cond.minVal) {
          cond.done = true;
        }
      }
    }
  }

//stat2
  if (stat2) {
    console.log(`${stat2.type} +${stat2.val}`)
    for (cond of arCond) {
      if (!cond.done) {
        if (stat2.type == cond.type && stat2.val >= cond.minVal) {
          cond.done = true;
        }
      }
    }
  }

//stat3
  if (stat3) {
    console.log(`${stat3.type} +${stat3.val}`)
    for (cond of arCond) {
      if (!cond.done) {
        if (stat3.type == cond.type && stat3.val >= cond.minVal) {
          cond.done = true;
        }
      }
    }
  }

  let doneCount = 0;
  for (cond of arCond) {
    if (cond.done == true) {
      doneCount++;
    }
  }

  if (doneCount == arCond.length) {
    console.log(`Rune used: ${runeCount}`);
    cont = false;
  }

  //STOPS AUTORUNE IF RUNECOUNT REACHED THE AMOUNT OF USERS HAVE
//	if(runeCount == 255){
//		console.log(`Rune used: ${runeCount}`)
//		cont = false;
//	}

}
