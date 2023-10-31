const userController = require("../controllers/user");
const express = require("express")
const md_auth = require("../middlewares/autheticatedValidations");

const router = express.Router();

router.post('/new-user',[md_auth.ensureAuth], userController.createUser);

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

//router.patch('/:id', userController.updateUserById);
router.put('/:id', userController.updateUserById);

router.delete('/:id', userController.deleteUserById);
module.exports = router;
