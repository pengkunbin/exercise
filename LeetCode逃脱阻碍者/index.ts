function escapeGhosts(ghosts: number[][], target: number[]): boolean {
  const initCoord = [0, 0];
  let flag = true;
  ghosts.forEach((ghostsCoord) => {
    console.log(getDistance(ghostsCoord, target), getDistance(initCoord, target))
    if (getDistance(initCoord, target) >= getDistance(ghostsCoord, target)) {
      flag = false;
    }
  });
  return flag;
}

function getDistance(start, target): number {
  return Math.abs(target[0] - start[0]) + Math.abs(target[1] - start[1]);
}

escapeGhosts([[1,0],[0,3]], [0,1])