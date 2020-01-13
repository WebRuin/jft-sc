const faunadb = require("faunadb");

// your secret hash
//! -- Replace with secret for prod.
const secret = "fnADeg6Q2bACAeUR3I6Vyqj8PkkDxRHL46JG2JEw";
const q = faunadb.query;
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
  console.log(req.body);
  try {
    const dbs = await client.query(
      q.Get(q.Ref(q.Collection("all_pages"), req.body))
    );
    res.status(200).json(dbs.data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
