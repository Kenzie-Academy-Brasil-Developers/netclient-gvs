import { TClientCreate, TClientRead } from "../interfaces/client.interface";
import { ClientService } from "../services/client.service";
import { Request, Response, json } from "express"

export class ClientController{
    constructor(private clientService:ClientService){ }
    async create(req: Request, res: Response) {
        const reqBody: TClientCreate = req.body
        const newClient = await this.clientService.create(reqBody)
        return res.status(201).json(newClient)
    }

    async list(_: Request, res: Response) {
        const clients = await this.clientService.list()
        return res.json(clients)
    }
    async update(req: Request, res: Response) {
        const reqBody = req.body
        const client = req.params.id
        const updateClient = await this.clientService.update(reqBody, client)
        return res.status(200).json(updateClient)
    }
    async delete(req: Request, res: Response): Promise<void> {
        const client = req.params.id
        const removeClient = await this.clientService.remove(client)
    }
}