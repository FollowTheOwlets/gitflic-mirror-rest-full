class Repository {
    static infoDB = [
        {
            id: 1,
            info: {
                name: "Lev",
                login: "19000168",
                password: "ertysd89"
            },
            date: "01.05.2021"
        },
        {
            id: 2,
            info: {
                name: "Mihail",
                login: "2000090",
                password: "setr_yu7"
            },
            date: "14.05.2022"
        },
        {
            id: 3,
            info: {
                name: "Dmitry",
                login: "2000149",
                password: "po9065rdgw"
            },
            date: "25.06.2013"
        },
        {
            id: 4,
            info: {
                name: "Aleksandr",
                login: "2100110",
                password: "asdfghbnm0"
            },
            date: "25.05.2022"
        }
    ];

    static append(infoObject) {
        Repository.infoDB = Repository.infoDB.concat(infoObject);
    }

    static delete(id) {
        Repository.infoDB = Repository.infoDB.filter(i => i.id !== id);
    }

    static update(id, info) {
        Repository.infoDB[id - 1] = info;
    }

    static getDB() {
        return this.infoDB;
    }

    static getInfoById(id) {
        return Repository.infoDB.find(info => info.id === id);
    }
}

export {Repository};