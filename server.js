import express from "express";
import cors from "cors";
import { teste_conexao } from './test_bd.js'
import { routes } from "./routes.js";
const port = process.env.PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended : true,
}),
);

app.use(routes);

    teste_conexao().then((res) => {
        if(res == true)
        {
            app.listen(port, () => {
                console.log(`Server runnig on ${ port }`);
            })
        }
    })