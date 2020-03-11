exports.time = (req, res) => {
  res.json({ Time: Date().toString() });
};
