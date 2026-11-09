import { Router } from "express";
import UserController from '../controller/student.controller.js'
import { validate } from "../middleware/validate.middleware.js";
import { creatStudentSchema,idParamSchema,updateStudentSchema } from "../validation/students.validation.js";



const router = new Router()

router
.get('/',UserController.getAll)
.get('/:id',UserController.getId)
.post('/',validate(creatStudentSchema),UserController.creat)
.put('/:id', validate(idParamSchema, 'params'), validate(updateStudentSchema), UserController.update)
.delete('/:id',UserController.delete)



export{router}