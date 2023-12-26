const express = require('express')
const app = express()

// Construção de uma Rota.

  // Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
    // GET - Pega uma info.
    // POST - Cria uma info.
    // PUT - Altera toda a info.
    // PATH - Altera parte da info.
    // DELETE - Apaga uma info
  
  // Name - Um identificador da rota.

  // Function (Callback) - Responsavel por executar algum comando.

app.get("/soma", (req, res) => {

  const soma = 100 + 1;

  res.json({soma: soma})

}); // Arrow function (função anonima.)


app.listen(3000);