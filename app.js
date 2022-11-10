//** === === Backend APIREST ExpressJs === ===  */

const express = require(`express`);
const app = express();
const port = process.env.port || 3000;
//*? === Routing === */
app.get('/', (req, res) => {
  res.send('Hello World');
});
//*? === Listen Port === */
app.listen(port, () => {
  console.log(`Server is running in Port http://localhost:${PORT}...`);
});
