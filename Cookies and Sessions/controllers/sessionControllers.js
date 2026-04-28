exports.step1 = (req, res) => {
  req.session.user = { name: req.body.name };
  res.send("Step 1 saved");
};

exports.step2 = (req, res) => {
  req.session.user.email = req.body.email;
  res.json(req.session.user);
};

exports.setLang = (req, res) => {
  res.cookie("lang", req.params.lang);
  res.send("Language set");
};

exports.getLang = (req, res) => {
  res.send(req.cookies.lang || "Not set");
};

exports.loginAdmin = (req, res) => {
  req.session.role = "admin";
  res.send("Admin logged in");
};

exports.adminPanel = (req, res) => {
  res.send("Welcome Admin");
};

exports.checkSession = (req, res) => {
  res.send(req.session ? "Active" : "Expired");
};

exports.addToCart = (req, res) => {
  if (!req.session.cart) req.session.cart = [];
  req.session.cart.push(req.body.item);
  res.json(req.session.cart);
};

exports.getCart = (req, res) => {
  res.json(req.session.cart || []);
};