const app = require('./app');
require("dotenv").config();

app.listen(process.env.PORT || 3001, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
