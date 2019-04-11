module.exports = async (req, res) => {
  try {
    const { userId } = req.userInfo;
    const list = await Bill.find({
      where: {
        userId,
        deleted: false
      }
    });

    return res.ok(list);
  } catch (err) {
    console.error('bill.list: list failed');
    console.log(err);
    return res.ok(null, 'Get Bill List Failed');
  }
};
