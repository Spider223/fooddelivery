const menuList = async (req, res) => {
  try {
    res.send(global.menus);
  } catch (error) {
    res.send("server error");
  }
};

module.exports = { menuList };
