const faunadb = require("faunadb");

// your secret hash
//! -- Replace with secret for prod.
const secret = "fnADeg6Q2bACAeUR3I6Vyqj8PkkDxRHL46JG2JEw";
const q = faunadb.query;
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
  try {
    const dbs = await client.query(
      q.Map(q.Paginate(q.Match(q.Index("all_pages"))), ref => q.Get(ref))
    );
    res.status(200).json(dbs.data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
