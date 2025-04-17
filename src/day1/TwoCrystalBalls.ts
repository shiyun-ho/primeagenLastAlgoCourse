export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmt = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmt;
  // Find sqrt(N) occurrence of 1 - is it in first half of sqrtN or not
  for (; i < breaks.length; i += jumpAmt) {
    if (breaks[i]) {
      break;
    }
  }

  // If we have found in first interval 
  i -= jumpAmt;
  for (let j = 0; j < jumpAmt && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}

