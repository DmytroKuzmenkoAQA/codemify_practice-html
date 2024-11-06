class Helpers {
    getUsersByStatus(response, status) {
        const users = [];

        // Your code here
        for (let i = 0; i < response.users.length; i++) {
            if (response.users[i].role.status === status && response.users[i].role.description !== null && response.users[i].role.description.length > 1) {
                users.push(response.users[i].name)
            }
        }

        return users;
    }

    getUsersByRole(response, role, roleId) {
        const users = [];

        // Your code here
        for (let i = 0; i < response.users.length; i++) {
            if (response.users[i].role.name === role && response.users[i].role.id === 1) {
                users.push(response.users[i].name)
            }
    }
    return users;
}

    getUsersByEmailDomain(response, domain) {
        const users = [];

        // Your code here
        for (let i = 0; i < response.users.length; i++) {
            if (response.users[i].email.includes(domain)) {
                users.push(response.users[i].name)
            }
        }
        return users;
    }

    getUserBalanceByCurrency(response, currency) {
        const balances = [];

        // Your code here
        for (let i = 0; i < response.users.length; i++) {
            if (response.users[i].currency === currency) {
                balances.push(response.users[i].balance.substring(1))
            }
        }
        return balances;
}
}

export default new Helpers()