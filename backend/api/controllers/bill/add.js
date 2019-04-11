module.exports = async (req, res) => {
  const { type, category, value, info = '' } = req.body;

  if (!type || !category || !value) {
    return res.bad('Wrong Attributes');
  }

  try {
    const { userId } = req.userInfo;
    const bill = await Bill.create({
      userId,
      type,
      category,
      value,
      info
    }).fetch();

    return res.ok({
      id: bill.id
    });
  } catch (err) {
    console.error('bill.add: add failed');
    console.log(err);
    return res.ok(null, 'Add Bill Failed', false);
  }
};
