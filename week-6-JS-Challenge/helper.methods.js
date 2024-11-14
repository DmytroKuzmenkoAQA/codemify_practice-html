class Helpers {
  filterMatchesByLocationAndStatus(response) {
    // Your code here

    const result = []
    for (let i = 0; i < response.matches.length; i++) {
        if (response.matches[i].locationlvl1 === "Germany" && response.matches[i].status === "canceled") {
            result.push(response.matches[i].matchId);
        }
    }
    return result;
  }

  filterMatchesByCoatingAndShower(response) {
    // Your code here

    const result = []
    for (let i = 0; i < response.matches.length; i++) {
        if (response.matches[i].matchInfo.coating === "Main.artificialGrass" && response.matches[i].matchInfo.isShower === true) {
            result.push(response.matches[i].matchId);
        }
    }

    return result;
  }

  filterMatchesByLocationAndPrice(response) {
    // Your code here

    const result = []
    for (let i = 0; i < response.matches.length; i++) {
        if (response.matches[i].locationlvl2 === "Berlin" && response.matches[i].price > 0) {
            result.push(response.matches[i].matchId);
        }
    }

    return result;
  }

  filterMatchesByCreatorFeeAndStatus(response) {

    // Your code here
    const result = []
    for (let i = 0; i < response.matches.length; i++) {
        if (response.matches[i].creatorFeePerPlayer > 3 && response.matches[i].status === "canceled") {
            result.push(response.matches[i].matchId);
        }
    }

    return result;
  }

  filterMatchesByCoveringAndDressingRoom(response) {

    // Your code here
    const result = []
    for (let i = 0; i < response.matches.length; i++) {
        if (response.matches[i].matchInfo.covering === "Main.onTheStreet" && response.matches[i].matchInfo.isDressingRoom === true) {
            result.push(response.matches[i].matchId);
        }
    }

    return result;
  }
}

export default new Helpers();
