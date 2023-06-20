type User = {
    name: string,
    street: string, 
    city: string
}

interface Users {
    getUsers: (id: string) => Promise<User>
}

class AllUsers implements Users {
    getUsers (id: string): Promise<User> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    name: 'Sérgio',
                    street: 'Avenida',
                    city: 'Curitiba'
                })
            })
        })
    }
}

class ProxyLog implements Users {
    constructor(public user: Users) {

    }

    async getUsers (id: string): Promise<User> {
        console.log("Antes da Chamada real")
        const users = await this.user.getUsers(id)
        users.street = 'Nova Friburgo'
        console.log("Depois da Chamada real modificando-a")
        return  users
    }
}

const mainBlock = async () => {
    const allUsers = new AllUsers()
    const proxy = new ProxyLog(allUsers)
    const users = await proxy.getUsers('1')
    console.log(users)
}

mainBlock()