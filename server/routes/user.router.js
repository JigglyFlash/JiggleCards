import {Router} from express;
import userController from '../controllers/userController';
const user = Router();

user.post('/signup', userController.createUser, (req,res) => (
    res.status(201).json({ message: 'User created successfully', user: res.locals.newUser })
))