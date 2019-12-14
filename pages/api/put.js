const faunadb = require("faunadb");

// your secret hash
//! -- Replace with secret for prod.
const secret = "fnADeg6Q2bACAeUR3I6Vyqj8PkkDxRHL46JG2JEw";
const q = faunadb.query;
const client = new faunadb.Client({ secret });

function setDate() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!

  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return `${dd}/${mm}/${yyyy}`;
}

module.exports = async (req, res) => {
  return client
    .query(
      q.Create(q.Collection("pages"), {
        data: {
          body: req.body.body,
          date: Date.now(),
          email: req.body.email,
          name: req.body.name,
          readableDate: setDate(),
          title: req.body.title
        }
      })
    )
    .then(res.status(200).json(req.body))
    .catch(e => res.status(500).json({ error: e.message }));
};
