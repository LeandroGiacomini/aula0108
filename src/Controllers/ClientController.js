import { Client } from "../Models/ClientModel.js";

export class ClientController{

    static async listarTodos( req, res){
        try {
            const clientes = await Client.SelectAll()
            console.log(clientes)
            return res.status(200).json(clientes)
        } 
        catch(error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    static novoCliente(req, res){
        const { nome , idade } = req.body;
        const cliente = new Client(nome, idade).Insert();
        return res.status(200).json({
            msg : 'Cadastrado com sucesso!'
        });
    }
}