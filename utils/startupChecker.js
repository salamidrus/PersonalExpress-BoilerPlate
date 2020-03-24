module.exports = (req, res) =>
  res
    .status(200)
    .send(
      '<title>Project Title</title><h1 style="text-align: center; padding-top: 7em;">Welcome to Project Title!</h1>'
    );
