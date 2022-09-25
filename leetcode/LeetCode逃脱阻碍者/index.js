function escapeGhosts(ghosts, target) {
    var initCoord = [0, 0];
    var flag = true;
    ghosts.forEach(function (ghostsCoord) {
        console.log(getDistance(ghostsCoord, target), getDistance(initCoord, target));
        if (getDistance(initCoord, target) >= getDistance(ghostsCoord, target)) {
            flag = false;
        }
    });
    return flag;
}
function getDistance(start, target) {
    return Math.abs(target[0] - start[0]) + Math.abs(target[1] - start[1]);
}
escapeGhosts([[1, 0], [0, 3]], [0, 1]);
