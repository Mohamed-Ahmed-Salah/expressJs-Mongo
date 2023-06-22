import { getUsers , createUser ,getUserById , editUser , deleteUser} from '../controller/users.js';
import  express  from "express";
const router =express.Router();

router.get('/', getUsers);


router.post('/', createUser);



    router.get('/:id',getUserById);


        router.delete('/:id',deleteUser);


            router.patch('/:id',editUser);

export default router;
