const missions =
{
  "basic": [
    {
      "title": "Edge of the forest",
      "description": "You get one point for each forest field adjacent to the edge of your map."
    },
    {
      "title": "Sleepy valley",
      "description": "For every row with three forest fields, you get four points."
    },
    {
      "title": "Watering potatoes",
      "description": "You get two points for each water field adjacent to your farm fields."
    },
    {
      "title": "Borderlands",
      "description": "For each full row or column, you get six points."
    }
  ],
  "extra": [
    {
      "title": "Tree line",
      "description": "You get two points for each of the fields in the longest vertically uninterrupted continuous forest. If there are two or more tree lines with the same longest length, only one counts."
    },
    {
      "title": "Watering canal",
      "description": "For each column of your map that has the same number of farm and water fields, you will receive four points. You must have at least one field of both terrain types in your column to score points."
    },
    {
      "title": "Wealthy town",
      "description": "You get three points for each of your village fields adjacent to at least three different terrain types."
    },
    {
      "title": "Magicians' valley",
      "description": "You get three points for your water fields adjacent to your mountain fields."
    },
    {
      "title": "Empty site",
      "description": "You get two points for empty fields adjacent to your village fields."
    },
    {
      "title": "Terraced house",
      "description": "For each field in the longest village fields that are horizontally uninterrupted and contiguous you will get two points."
    },
    {
      "title": "Odd numbered silos",
      "description": "For each of your odd numbered full columns you get 10 points."
    },
    {
      "title": "Rich countryside",
      "description": "For each row with at least five different terrain types, you will receive four points."
    }
  ],
}



const elements = [
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "town",
    shape: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "farm",
    shape: [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "town",
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "farm",
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "town",
    shape: [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "town",
    shape: [
      [1, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "farm",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "farm",
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
];

const mountainLocations = [
  [2, 2],
  [4, 9],
  [6, 4],
  [9, 10],
  [10, 6],
];

const mapTable = document.querySelector(".map");
const imgBox = document.querySelector(".image_box_container");
const rotateBtn = document.querySelector(".rotate");
const flipBtn = document.querySelector(".flip");
const resetBtn = document.querySelector(".reset");
let currentSeason = "Spring";
const springScore = document.querySelector(".spring .score-text");
const summerScore = document.querySelector(".summer .score-text");
const autumnScore = document.querySelector(".autumn .score-text");
const winterScore = document.querySelector(".winter .score-text");
const elemContainer = document.querySelector(".element_container")
let totalTime = 0;
let totalP = 0;
const totalPoint = document.querySelector(".t_point");
const currSeason = document.querySelector("#current_season");
let elapsedTime = 0;
let currentTime = document.querySelector("#elapsed_time");
let cardContainer = document.querySelector(".card_container");
let timeUnit = 28;



function shuffleBasicMissions() {
  const basicMissions = missions.basic.slice();
  for (let i = basicMissions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [basicMissions[i], basicMissions[j]] = [basicMissions[j], basicMissions[i]];
  }
  return basicMissions;
}

let pointsA = 0;
let pointsB = 0;
let pointsC = 0;
let pointsD = 0;

const shuffledBasicMissions = shuffleBasicMissions();

function drawShuffledMission(shuffledBasicMissions) {
  cardContainer.innerHTML = '';
  let count = 0;
  shuffledBasicMissions.forEach(mission => {
    const missionCard = document.createElement('div');
    switch (count) {
      case 0:
        missionCard.className = 'mission_card';
        missionCard.innerHTML = `
      <p class="mission_point_p">points: <span class="mission_point">${pointsA}</span></p>
      <p class="mission_category A">A</p>`;
        missionCard.style.backgroundImage = `url(${getBackgroundImageFromTitle(mission.title)})`;
        cardContainer.appendChild(missionCard);
        
        count++;
        break;
      case 1:
        missionCard.className = 'mission_card';
        missionCard.innerHTML = `
          <p class="mission_point_p">points: <span class="mission_point">${pointsB}</span></p>
          <p class="mission_category B">B</p>`;
        missionCard.style.backgroundImage = `url(${getBackgroundImageFromTitle(mission.title)})`;
        cardContainer.appendChild(missionCard);
        count++;
        break;
      case 2:
        missionCard.className = 'mission_card';
        missionCard.innerHTML = `
          <p class="mission_point_p">points: <span class="mission_point">${pointsC}</span></p>
          <p class="mission_category C">C</p>`;
        missionCard.style.backgroundImage = `url(${getBackgroundImageFromTitle(mission.title)})`;
        cardContainer.appendChild(missionCard);
        count++;
        break;
      case 3:
        missionCard.className = 'mission_card';
        missionCard.innerHTML = `
      <p class="mission_point_p">points: <span class="mission_point">${pointsD}</span></p>
      <p class="mission_category D">D</p>`;
        missionCard.style.backgroundImage = `url(${getBackgroundImageFromTitle(mission.title)})`;
        cardContainer.appendChild(missionCard);
        count++;
        break;
      default:
        break;
    }
  });
}





function getBackgroundImageFromTitle(title) {
  const backgroundMapping = {
    "Edge of the forest": '/basic_missions/1.png',
    "Sleepy valley": '/basic_missions/3.png',
    "Watering potatoes": '/basic_missions/2.png',
    "Borderlands": '/basic_missions/4.png',
  };

  return backgroundMapping[title] || '';
}




const mapMatrix = [];

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

for (let i = 0; i < 11; i++) {
  mapMatrix[i] = [];
  for (let j = 0; j < 11; j++) {
    mapMatrix[i][j] = ".";
    if (mountainLocations.some((ind) => ind[0] === i && ind[1] === j)) {
      mapMatrix[i][j] = "m";
    }
  }
}

function chooseNextElem() {
  const shuffledArr = shuffleArray(elements);
  let randomIndex = Math.floor(Math.random() * shuffledArr.length);
  let chosenElement = shuffledArr[randomIndex];
  return chosenElement;
}

let currElement = chooseNextElem();


rotateBtn.addEventListener("click", () => {
  currElement.shape = rotateElem(currElement.shape);
  drawMap();
});

flipBtn.addEventListener("click", () => {
  currElement.shape = flipElem(currElement.shape);
  drawMap();
})

function rotateElem(shape) {
  const numRows = shape.length;
  const numCols = shape[0].length;
  const rotatedShape = [];

  for (let j = 0; j < numCols; j++) {
    rotatedShape.push([]);
    for (let i = numRows - 1; i >= 0; i--) {
      rotatedShape[j].push(shape[i][j]);
    }
  }

  return rotatedShape;
}

function flipElem(shape) {
  const numRows = shape.length;
  const numCols = shape[0].length;

  const flippedShape = new Array(numRows).fill(0).map(() => new Array(numCols).fill(0));

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      flippedShape[i][j] = shape[i][numCols - 1 - j];
    }
  }

  return flippedShape;
}


function drawShapeInImgBox(element) {
  imgBox.innerHTML = "";
  const time = document.createElement("p");
  time.innerText = `${element.time}`
  imgBox.append(time);
  const table = document.createElement("table");
  for (let i = 0; i < element.shape.length; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < element.shape[i].length; j++) {
      const td = document.createElement("td");

      if (element.shape[i][j] === 1) {
        if (element.type === "water") {
          td.className = "water";
        } else if (element.type === "forest") {
          td.className = "forest";
        } else if (element.type === "farm") {
          td.className = "farm";
        } else if (element.type === "town") {
          td.className = "town";
        }
      }

      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  imgBox.appendChild(table);
}

function addCurrentElement(thisRow, thisCol) {
  if (checkCondition(thisRow, thisCol, currElement)) {
    const currentElem = currElement;
    for (let i = 0; i < currentElem.shape.length; i++) {
      for (let j = 0; j < currentElem.shape[0].length; j++) {
        if (currentElem.shape[i][j] === 1) {
          if (currentElem.type === "water") {
            mapMatrix[thisRow + i][thisCol + j] = "w";
          } else if (currentElem.type === "forest") {
            mapMatrix[thisRow + i][thisCol + j] = "fo";
          } else if (currentElem.type === "farm") {
            mapMatrix[thisRow + i][thisCol + j] = "fa";
          } else if (currentElem.type === "town") {
            mapMatrix[thisRow + i][thisCol + j] = "t";
          }
        }
      }
    }
    
    elapsedTime += currElement.time;
    totalTime += currElement.time;
    currentTime.innerText = elapsedTime

    if (elapsedTime >= 7) {
      elapsedTime = 0;
      switch (currSeason.innerText) {
        case "Spring":
          console.log(checkMountainCondition());
          if (checkMountainCondition()) {
            console.log("hohu");
            springScore.innerText = `Score: ${pointsA + pointsB + 1}`
          }
          else{
            springScore.innerText = `Score: ${pointsA + pointsB}`;
          }
          currSeason.innerText = "Summer";
          break;
        case "Summer":
          if (checkMountainCondition()) {
          summerScore.innerText = `Score: ${pointsB + pointsC + 1}`;
          }
          else{
            `Score: ${pointsB + pointsC}`;
          }
          currSeason.innerText = "Autumn";
          break;
        case "Autumn":
          if (checkMountainCondition()) {
          autumnScore.innerText = `Score: ${pointsC + pointsD + 1}`;
          }
          else{
          autumnScore.innerText = `Score: ${pointsC + pointsD}`;
          }
          currSeason.innerText = "Winter";
          break;
        case "Winter":
          if (checkMountainCondition()) {
          winterScore.innerText = `Score: ${pointsD + pointsA + 1}`;
          }
          else{
          winterScore.innerText = `Score: ${pointsD + pointsA}`;
          }
          currSeason.innerText = "Spring";
          break;
        default:
          break;
      }

      

      if(timeUnit - 7 <= 0){
        console.log("Game Over");
        elemContainer.style.display = "none";
        resetBtn.style.display = "block";
        totalPoint.innerText = pointsA + pointsB + pointsC + pointsD
      }
      else{
        timeUnit -= 7;
      }
    }

    currElement = chooseNextElem();
    drawMap();
  }
}

resetBtn.addEventListener("click", () =>{
  window.location.reload(true); 
})

function checkCondition(thisRow, thisCol, element) {
  for (let i = 0; i < element.shape.length; i++) {
    for (let j = 0; j < element.shape[i].length; j++) {
      if (element.shape[i][j] === 1) {
        const gridD = mapMatrix[thisRow + i] && mapMatrix[thisRow + i][thisCol + j];
        if (!gridD || gridD !== ".") {
          return false;
        }
      }
    }
  }
  return true;
}

function updateScore(season) {
  let missionOne = "";
  let missionTwo = "";
  switch (season) {
    case "Spring":
      missionOne = shuffledBasicMissions[0].title;
      missionTwo = shuffledBasicMissions[1].title;
      break;
    case "Summer":
      missionOne = shuffledBasicMissions[1].title;
      missionTwo = shuffledBasicMissions[2].title;
      break;
    case "Autumn":
      missionOne = shuffledBasicMissions[2].title;
      missionTwo = shuffledBasicMissions[3].title;
      break;
    case "Winter":
      missionOne = shuffledBasicMissions[3].title;
      missionTwo = shuffledBasicMissions[0].title;
      break;
    default:
      break;

    

  }


  switch (missionOne) {
    case "Edge of the forest":
      let count = 0

      for (let i = 0; i < 11; i++) {
        if (mapMatrix[0][i] == "fo") {
          count++;
        }
        else if (mapMatrix[10][i] == "fo") {
          count++;
        }
        else if (mapMatrix[i][0] == "fo") {
          count++;
        }
        else if (mapMatrix[i][10] == "fo") {
          count++;
        }
      }

      switch (season) {
        case "Spring":
          pointsA = count;
          break;
        case "Summer":
          pointsB = count;
          break;
        case "Autumn":
          pointsC = count;

          break;
        case "Winter":
          pointsD = count;
          break;
        default:
          break;
      }
      break;
    case "Watering potatoes":
      let points7 = 0;

      for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
          if (mapMatrix[i][j] === 'w') {
            if (i > 0 && mapMatrix[i - 1][j] === 'fa') points7 += 2; 
            if (i < 10 && mapMatrix[i + 1][j] === 'fa') points7 += 2; 
            if (j > 0 && mapMatrix[i][j - 1] === 'fa') points7 += 2; 
            if (j < 10 && mapMatrix[i][j + 1] === 'fa') points7 += 2; 
          }
        }
      }

      switch (season) {
        case "Spring":
          pointsA = points7;
          break;
        case "Summer":
          pointsB = points7;
          break;
        case "Autumn":
          pointsC = points7;

          break;
        case "Winter":
          pointsD = points7;
          break;
        default:
          break;
      }
      break;

    case "Sleepy valley":
      let count3 = 0;
      let points = 0;
      for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
          if (mapMatrix[i][j] == "fo") {
            count3++;
          }
        }
        if (count3 >= 3) {
          points += 4;
        }
        count3 = 0;
      }
      switch (season) {
        case "Spring":
          pointsA = points;
          break;
        case "Summer":
          pointsB = points;
          break;
        case "Autumn":
          pointsC = points;

          break;
        case "Winter":
          pointsD = points;
          break;
        default:
          break;
      }

      break;

    case "Borderlands":
      let points2 = 0;
      let condition = true;
      for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
          if (mapMatrix[i][j] == ".") {
            condition = false;
          }
        }
        if (condition) {
          points2 = points2 + 6;
        }
        condition = true;
      }
      switch (season) {
        case "Spring":
          pointsA = points2;
          break;
        case "Summer":
          pointsB = points2;
          break;
        case "Autumn":
          pointsC = points2;

          break;
        case "Winter":
          pointsD = points2;
          break;
        default:
          break;
      }
      break;


    default:
      break;
  }

  switch (missionTwo) {
    case "Edge of the forest":
      let count = 0

      for (let i = 0; i < 11; i++) {
        if (mapMatrix[0][i] == "fo") {
          count++;
        }
        else if (mapMatrix[10][i] == "fo") {
          count++;
        }
        else if (mapMatrix[i][0] == "fo") {
          count++;
        }
        else if (mapMatrix[i][10] == "fo") {
          count++;
        }
      }
      switch (season) {
        case "Spring":
          pointsB = count;
          break;
        case "Summer":
          pointsC = count;
          break;
        case "Autumn":
          pointsD = count;

          break;
        case "Winter":
          pointsA = count;
          break;
        default:
          break;
      }
      break;
    case "Watering potatoes":
      let points7 = 0;
      for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
          if (mapMatrix[i][j] === 'w') {
            if (i > 0 && mapMatrix[i - 1][j] === 'fa') points7 += 2; 
            if (i < 10 && mapMatrix[i + 1][j] === 'fa') points7 += 2; 
            if (j > 0 && mapMatrix[i][j - 1] === 'fa') points7 += 2; 
            if (j < 10 && mapMatrix[i][j + 1] === 'fa') points7 += 2; 
          }
        }
      }

      switch (season) {
        case "Spring":
          pointsB = points7;
          break;
        case "Summer":
          pointsC = points7;
          break;
        case "Autumn":
          pointsD = points7;
          break;
        case "Winter":
          pointsA = points7;
          break;
        default:
          break;
      }
      break;

    case "Sleepy valley":
      let count3 = 0;
      let points = 0;
      for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
          if (mapMatrix[i][j] == "fo") {
            count3++;
          }
        }
        if (count3 >= 3) {
          points += 4;
        }
        count3 = 0;
      }
      switch (season) {
        case "Spring":
          pointsB = points;
          break;
        case "Summer":
          pointsC = points;
          break;
        case "Autumn":
          pointsD = points;

          break;
        case "Winter":
          pointsA = points;
          break;
        default:
          break;
      }
      break;

    case "Borderlands":
      let points2 = 0;
      let condition = true;
      for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
          if (mapMatrix[i][j] == ".") {
            condition = false;
          }
        }
        if (condition) {
          points2 = points2 + 6;
        }
        condition = true;
      }

      switch (season) {
        case "Spring":
          pointsB = points2;
          break;
        case "Summer":
          pointsC = points2;
          break;
        case "Autumn":
          pointsD = points2;

          break;
        case "Winter":
          pointsA = points2;
          break;
        default:
          break;
      }
      break;

    default:
      break;
  }
}

function checkMountainCondition(){
  
let count = 0;
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if(mapMatrix[i][j] == "m"){
        if (mapMatrix[i][j+1] != "." && mapMatrix[i][j-1] != "." && mapMatrix[i+1][j+1] != "." && mapMatrix[i+1][j-1] != "." && mapMatrix[i+1][j] != "." && mapMatrix[i-1][j+1] != "." && mapMatrix[i-1][j-1] != "." && mapMatrix [i-1][j] != ".") {
          count++;
        }
      }
    }
  }
  if(count > 0)
  return true;

  return false;
}


function drawMap() {
  mapTable.innerHTML = "";
  for (let i = 0; i < 11; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 11; j++) {
      const td = document.createElement("td");
      if (mapMatrix[i][j] == "w") {
        td.className = "water";
      } else if (mapMatrix[i][j] == "fo") {
        td.className = "forest";
      } else if (mapMatrix[i][j] == "fa") {
        td.className = "farm";
      } else if (mapMatrix[i][j] == "t") {
        td.className = "town";
      } else if (mapMatrix[i][j] == "m") {
        td.className = "mountain";
      }
      tr.appendChild(td);
      td.addEventListener("click", () => {
        addCurrentElement(i, j);
      });
    }
    mapTable.appendChild(tr);
  }

  drawShapeInImgBox(currElement);



  switch (currSeason.innerText) {
    case "Spring":
      updateScore("Spring");
      break;
    case "Summer":
      updateScore("Summer");
      break;
    case "Autumn":
      updateScore("Autumn");
      break;
    case "Winter":
      updateScore("Winter");
      break;
    default:
      break;
  }

  drawShuffledMission(shuffledBasicMissions);

}

drawMap();