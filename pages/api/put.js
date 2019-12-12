const faunadb = require("faunadb");

// your secret hash
//! -- Replace with secret for prod.
const secret = "fnADeg6Q2bACAeUR3I6Vyqj8PkkDxRHL46JG2JEw";
const q = faunadb.query;
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
  return client
    .query(
      q.Create(q.Collection("pages"), {
        data: {
          name: req.body.name,
          email: req.body.email,
          title: req.body.title,
          body: req.body.body
        }
      })
    )
    .then(ret => console.log(ret))
    .catch(err => console.log("error", err));
};
