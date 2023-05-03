const notFound = (req, res) => res.status(404).send(`this route doesn't exit`);
module.exports = notFound;
