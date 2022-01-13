const patronGanador = [
  ["A0", "A1", "A2"],
  ["B0", "B1", "B2"],
  ["C0", "C1", "C2"],
  ["A0", "B0", "C0"],
  ["A1", "B1", "C1"],
  ["A2", "B2", "C2"],
  ["A0", "B1", "C2"],
  ["A2", "B1", "C0"],
];
//winning verifying function
export const winningCheck = (jugadorMoves) => {
  let response = { status: false, coordenates: [] };
  patronGanador.forEach((pattern) => {
    let aux = [];
    pattern.forEach((el) => {
      const finded = jugadorMoves.find((item) => item === el);
      if (finded) {
        aux.push(finded);
      }
    });
    if (aux.length === 3) {
      response = { status: true, coordenates: [...response.coordenates, aux] };
      return;
    }
  });
  return response;
};

// Draw verifying function
export const drawCheck = (jugadorMoves) => {
  if (!winningCheck(jugadorMoves).status && jugadorMoves.length === 5)
    return true;
  return false;
};
