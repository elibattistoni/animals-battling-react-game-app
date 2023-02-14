import { pawns } from "./config";

export function setMachinePreference() {
  const items = Object.keys(pawns);
  const preferred = +items[Math.floor(Math.random() * items.length)];
  const preferences = items.map((i) => (+i === preferred ? 50 : 25));
  return preferences;
}

export function getMachineWeightedDraw(weights) {
  let i;
  const items = Object.keys(pawns);
  for (i = 1; i < weights.length; i++) {
    weights[i] += weights[i - 1];
  }

  const random = Math.random() * weights[weights.length - 1];

  for (i = 0; i < weights.length; i++) {
    if (weights[i] > random) break;
  }

  const machineDraw = items[i];

  return +machineDraw;
}

export function determineWinner(pawnHuman, pawnComputer) {
  if (pawnHuman === pawnComputer) {
    return 0;
  } else if (
    (pawnHuman === 1 && pawnComputer === 2) ||
    (pawnHuman === 2 && pawnComputer === 3) ||
    (pawnHuman === 3 && pawnComputer === 1)
  ) {
    return 22;
  } else {
    return 11;
  }
}
