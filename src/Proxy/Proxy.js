"use strict";
class AllUsers {
    getUsers(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    name: 'Sérgio',
                    street: 'Avenida',
                    city: 'Curitiba'
                });
            });
        });
    }
}
class ProxyLog {
    constructor(user) {
        this.user = user;
    }
    async getUsers(id) {
        console.log("Antes da Chamada real");
        const users = await this.user.getUsers(id);
        users.street = 'Nova Friburgo';
        console.log("Depois da Chamada real modificando-a");
        return users;
    }
}
const mainBlock = async () => {
    const allUsers = new AllUsers();
    const proxy = new ProxyLog(allUsers);
    const users = await proxy.getUsers('1');
    console.log(users);
};
mainBlock();
