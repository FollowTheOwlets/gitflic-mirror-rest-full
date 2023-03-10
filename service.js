import {Repository} from "./repository.js";

const MSG = {
    WORK: 'API работает',
    HELP: "Репозиторий проекта: ",
    NOT_FOUND: "Пользователя с таким id не найдено",
    ERROR_REQ: "Отсутствует тело запроса"
}

class Service {

    static generateId() {
        const maxId = Repository.infoDB.length > 0
            ? Math.max(...Repository.infoDB.map(i => i.id))
            : 0;
        return maxId + 1;
    }

    static async work(req, res) {
        res.send(MSG.WORK);
    }

    static async help(req, res) {
        res.send(MSG.WORK);
    }

    static async read(req, res) {
        res.status(200).json(Repository.getDB());
    }

    static async readById(req, res) {
        const id = Number(req.params.id);
        const infoObject = Repository.getInfoById(id);
        infoObject
            ? res.status(200).json(infoObject).end()
            : res.status(404).json({
                msg: MSG.NOT_FOUND
            }).end();
    }

    static async create(req, res) {
        const body = req.body
        if (!body.info) {
            return res.status(400).json({
                msg: MSG.ERROR_REQ
            });
        }
        const infoObject = {
            id: Service.generateId(),
            info: body.info,
            date: new Date()
        };
        Repository.append(infoObject);
        res.status(201).json(infoObject).end();
    }

    static async delete(req, res) {
        const id = Number(req.params.id);
        Repository.delete(id);
        res.status(204).end();
    }

    static async update(req, res) {
        const body = req.body
        if (!body.info) {
            return res.status(400).json({msg: MSG.ERROR_REQ});
        }
        const id = Number(req.params.id);
        const infoToModify = Repository.getInfoById(id)
        const modifiedInfo = {
            id: infoToModify.id,
            info: body.info,
            date: infoToModify.date
        }
        Repository.update(id, modifiedInfo);
        res.status(200).json(modifiedInfo).end();
    }
}


export {
    Service
};