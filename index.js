const express = require('express')
const userRoute = require("./src/routes/user.route")


const app = express();

app.use("/soma", userRoute);

app.listen(3000);



// Construção de uma Rota.

  // Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
    // GET - Pega uma info.
    // POST - Cria uma info.
    // PUT - Altera toda a info.
    // PATCH - Altera parte da info.
    // DELETE - Apaga uma info
  
  // Name - Um identificador da rota.

  // Function (Callback) - Responsavel por executar algum comando.
  