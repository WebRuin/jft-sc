const faunadb = require("faunadb");

// your secret hash
//! -- Replace with secret for prod.
const secret = "fnADeg6Q2bACAeUR3I6Vyqj8PkkDxRHL46JG2JEw";
const q = faunadb.query;
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
  const data = JSON.parse(req.body)
  console.log("Function `todo-create` invoked", data)
  // const todoItem = {
  //   data: data
  // }
  // /* construct the fauna query */
  // return client.query(q.Create(q.Ref("classes/todos"), todoItem))
  // .then((response) => {
  //   console.log("success", response)
  //   /* Success! return the response with statusCode 200 */
  //   return callback(null, {
  //     statusCode: 200,
  //     body: JSON.stringify(response)
  //   })
  // }).catch((error) => {
  //   console.log("error", error)
  //   /* Error! return the error with statusCode 400 */
  //   return callback(null, {
  //     statusCode: 400,
  //     body: JSON.stringify(error)
  //   })
  })
};
