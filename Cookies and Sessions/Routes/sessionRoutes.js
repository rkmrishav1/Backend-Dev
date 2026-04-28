const express = require("express");
const router = express.Router();

const {
  step1, step2,
  setLang, getLang,
  loginAdmin, adminPanel,
  checkSession,
  addToCart, getCart
} = require("../controllers/sessionControllers");

const { isAdmin } = require("../Middleware/auth");

router.post("/step1", step1);
router.post("/step2", step2);

router.get("/set-lang/:lang", setLang);
router.get("/get-lang", getLang);

router.get("/login-admin", loginAdmin);
router.get("/admin", isAdmin, adminPanel);

router.get("/check-session", checkSession);

router.post("/add-to-cart", addToCart);
router.get("/cart", getCart);

module.exports = router;