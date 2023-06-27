export const winCondition = (field) => {
  if (field[0][0] === "X" && field[1][1] === "X" && field[2][2] === "X")
    return "X";
  if (field[0][2] === "X" && field[1][1] === "X" && field[2][0] === "X")
    return "X";
  if (field[0][0] === "X" && field[0][1] === "X" && field[0][2] === "X")
    return "X";
  if (field[1][0] === "X" && field[1][1] === "X" && field[1][2] === "X")
    return "X";
  if (field[2][0] === "X" && field[2][1] === "X" && field[2][2] === "X")
    return "X";
  if (field[0][0] === "X" && field[1][0] === "X" && field[2][0] === "X")
    return "X";
  if (field[0][1] === "X" && field[1][1] === "X" && field[2][1] === "X")
    return "X";
  if (field[0][2] === "X" && field[1][2] === "X" && field[2][2] === "X")
    return "X";
  if (field[0][0] === "O" && field[1][1] === "O" && field[2][2] === "O")
    return "O";
  if (field[0][2] === "O" && field[1][1] === "O" && field[2][0] === "O")
    return "O";
  if (field[0][0] === "O" && field[0][1] === "O" && field[0][2] === "O")
    return "O";
  if (field[1][0] === "O" && field[1][1] === "O" && field[1][2] === "O")
    return "O";
  if (field[2][0] === "O" && field[2][1] === "O" && field[2][2] === "O")
    return "O";
  if (field[0][0] === "O" && field[1][0] === "O" && field[2][0] === "O")
    return "O";
  if (field[0][1] === "O" && field[1][1] === "O" && field[2][1] === "O")
    return "O";
  if (field[0][0] === "O" && field[1][1] === "O" && field[2][2] === "O")
    return "O";
};
