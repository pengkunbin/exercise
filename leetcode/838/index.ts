function pushDominoes(dominoes: string): string {
    const forces: number[] = Array(dominoes.length).fill(0)
    const revserForces: number[] = Array(dominoes.length).fill(0)

    const result = Array.from(dominoes);

    let force = 0;
    let revserForce = 0;

    for (let i = 0; i < dominoes.length; i++) {
        if (dominoes[i] === "L") {
            force = 0;
        } else if (dominoes[i] === "R") {
            force = dominoes.length;
        } else {
            force = Math.max(force - 1, 0)
        }
        forces[i] = force
    }


    for (let i = dominoes.length - 1; i >= 0; i--) {
        if (dominoes[i] === "R") {
            revserForce = 0;
        } else if (dominoes[i] === "L") {
            revserForce = dominoes.length;
        } else {
            revserForce = Math.max(revserForce - 1, 0)
        }
        revserForces[i] = revserForce
    }

    for (let i = 0; i < forces.length; i++) {
        forces[i] = forces[i] - revserForces[i]
        if (forces[i] > 0) {
            result[i] = 'R'
        }else if (forces[i] < 0) {
            result[i] = 'L'
        } else {
            result[i] = '.'
        }

    }

    return result.join('');
};
