const express = require("express");


const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth');
const { creatorAdd, getAllvideos } = require("../controllers/creatorController");
const router = express.Router();
router.route("/videos").get(isAuthenticatedUser,getAllvideos);
router.route("/creatorAdd").post(creatorAdd);

module.exports = router;
