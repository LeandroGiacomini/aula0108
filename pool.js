import sql from 'mssql';
import { sqlConfig } from './src/Utils/database.js';

export async function CreatePool(){
    try {
        const pool = new sql.ConnectionPool(sqlConfig)
        await pool.connect()
        
        return pool
    } 
    catch (error) {
        return(error)
    }
}