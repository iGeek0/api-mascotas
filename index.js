const express = require('express')
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT;

app.use(cors());


app.use(express.json());

app.get('/mascotas', (req, res) => {
    return res.json(
        {
            data: [
                {
                    nombre: "Pelusa",
                    tipo: "GATO",
                    Pais: "Mexico",
                    Color: "Amarillo",
                    Propietario: "Jesus Cardenas"
                },
                {
                    nombre: "Coffe",
                    tipo: "PERRO",
                    Pais: "Mexico",
                    Color: "Cafe",
                    Propietario: "Martin Flores"
                }
            ]
        }
    );
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));