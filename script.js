const shuffleBtn = document.getElementById("shuffle-div");

const sortBtn = document.getElementById("sort-div");

const container = document.getElementById("shuffle-area");

shuffleBtn.addEventListener("click", () => {
  let elementsArray = Array.prototype.slice.call(
    container.getElementsByClassName("cell")
  );

  shuffleArray(elementsArray);

  elementsArray.forEach(function (element) {
    container.appendChild(element);
  });
});

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  this.ShuffledData = array;
  return array;
}

sortBtn.addEventListener("click", () => {
  let elementsArray = Array.prototype.slice.call(
    container.getElementsByClassName("cell")
  );

  elementsArray.sort(function (a, b) {
    if (a.textContent < b.textContent) {
      return -1;
    } else {
      return 1;
    }
  });

  elementsArray.forEach(function (element) {
    container.appendChild(element);
  });
});
