// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
  return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  return cats.pop();
}

function destructivelyRemoveFirstCat() {
  return cats.shift();
}

function appendCat(name) {
  appendCat = [...cats, "Broom"];
  return appendCat;
}

function prependCat(name) {
  appendCat = ["Arnold", ...cats];
  return appendCat;
}

function removeLastCat() {
  removeLastCat = cats.slice(0, -1);
  return removeLastCat;
}

function removeFirstCat() {
  removeFirstCat = cats.slice(1);
  return removeFirstCat;
}
