import { Client } from "../Models/ClientModel.js";

export class ClientController{

    static async listarTodos( req, res){
        try {
            const clientes = await Client.SelectAll()
            return res.status(200).json(clientes)
        } 
        catch(error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    static async novoCliente(req, res){
        try {
            const {nome, idade, cpf} = req.body
            const novoCliente = await new Client(nome, idade, cpf).Insert()
            return res.status(200).json(novoCliente);

        } 
        catch (error) 
        {
            console.log ('error novocliente' + error)
            res.status(500).json(error)
        }
    }

    static async altClient(req, res){
        try {
            const {nome, idade, cpf} = req.body
            const { id } = req.params
            const altCliente = await new Client(nome, idade, cpf,id).Update()
            return res.status(200).json(altCliente);
            
        } 
        catch (error) 
        {
            
        }

    }

}