const login = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    res.status(200).json({ username, password });
};
module.exports = { login };
