class Helpers {
  getUsersByAge(response, ageMin, ageMax) {
    const users = [];
    // console.log("Start Function")
    //console.log(response.users[0].role)

    // Your code here
    for (let i = 0; i < response.users.length; i++) {
      if (response.users[i].age >= ageMin && response.users[i].age <= ageMax) {
        //console.log(response.users[i].name)
        users.push(response.users[i].name);
      }
    }
    return users;
  }

  getUsersByRole(response, role) {
    const users = [];

    // Your code here
    for (let i = 0; i < response.users.length; i++) {
      if (response.users[i].role === role) {
        //console.log(response.users[i])
        users.push(response.users[i].name);
      }
    }
    return users;
  }

  getUsersByCountry(response, country) {
    const users = [];

    // Your code here
    for (let i = 0; i < response.users.length; i++) {
      if (response.users[i].country === country) {
        //console.log(response.users[i])
        users.push(response.users[i].name);
      }
    }
    return users;
  }

  getUsersByBalance(response, minBalance, maxBalance) {
    const users = [];

    for (let i = 0; i < response.users.length; i++) {
        if (response.users[i].balance >= minBalance && response.users[i].balance <= maxBalance) {
          //console.log(response.users[i])
          users.push(response.users[i].name);
        }
      }
      return users;
  }
}

export default new Helpers();