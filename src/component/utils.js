export function calculateNextValue(squares) {
    const xSquaresCount = squares.filter(r => r === 'X').length;
    const oSquaresCount = squares.filter(r => r === 'O').length;
    return oSquaresCount === xSquaresCount ? 'X' : 'O';
  }
  
  export function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  export function calculateStatus(winner, squares, nextValue) {
    return winner
      ? `Player Winner: ${winner}`
      : squares.every(Boolean)
        ? `Match in Draw`
        : `Next player: ${nextValue}`;
  }
  