module.exports = async (req, res) => {
  try {
    const user = await User.find({
      where: {
        deleted: false
      }
    });
    console.log(user);
    return res.ok(user);
  } catch (err) {
    console.log(err);
    return res.ok();
  }
};
