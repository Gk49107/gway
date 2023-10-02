const express = require('express');
const router = express.Router();

const {StudentsList,CreateStudent,Updatestudent,deleteStudent, Findstudent} = require("../controller/studentcontroller")

//get all students
router.get('/all',StudentsList);
router.post('/add',CreateStudent);
router.get('/find/:id',Findstudent);
router.put('/edit/:id',Updatestudent);
router.delete('/delete/:id',deleteStudent);


module.exports = router;