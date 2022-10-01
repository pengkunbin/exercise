function translateBuildings(buildings: number[][]) {
    const buildingCoords: number[][] = []
    buildings.forEach(building => {
        buildingCoords.push([building[0], building[2]])
        buildingCoords.push([building[1], building[2]])
        buildingCoords.push([building[1], 0])
    });
    return buildingCoords;
}

function filterBuildingCoord(buildings: number[][]) {
    let filterCoords: number[][] = []
    buildings = buildings.sort((a, b) => a[0] - b[0])

    let singleTag = 0;
    for (let i = 0; i < buildings.length; i++) {
        if(buildings[i][0] === singleTag){
            continue;
        }
        singleTag = buildings[i][0];
        filterCoords.push(buildings[i])
    }


    console.log("🚀 ~ file: index.ts ~ line 15 ~ filterBuildingCoord ~ filterCoords", buildings)

    return filterCoords;

    let standard = 0;
    const standardslist: number[] = [];

    for (let i = 0; i < buildings.length; i++) {
        if (i === 0) {
            filterCoords.push(buildings[i])
            continue;
        }

        if (buildings[i][1] !== standard) {
            if (!standardslist.find(s => s === buildings[i][1])) {
                filterCoords.push(buildings[i])
                standardslist.push(buildings[i][1])
            } else {
                console.log("buildings[i][1]:", buildings[i], filterCoords[filterCoords.length - 1][1])
                while (filterCoords[filterCoords.length - 1][1] !== buildings[i][1]) {
                    filterCoords.pop()
                    standardslist.pop()
                    console.log("filterCoords:", filterCoords)
                }
            }


            // if (buildings[i][1] > top) {
            //     top = buildings[i][1]
            // }

            // else if(buildings[i][1] < bottom){

            // }
        }

    }
    return filterCoords;
}

function getSkyline(buildings: number[][]): number[][] {
    const result = filterBuildingCoord(translateBuildings(buildings))


    return result;
};

console.log("getSkyline:", getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]))



// [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]