const Student = require("../Model/Studentmodel");
const catchAsyncerror = require('../middleware/CatchAsyncError');
const ErrorHandler = require('../utils/ErrorHandler');

//get all students 
exports.StudentsList = catchAsyncerror(async(req,res,next) => {
   
   const allStudents =  await Student.find();

  
   res.status(200).json(allStudents);

})

//create a new student
exports.CreateStudent = catchAsyncerror(async(req, res, next) => {
    //get data from user
   const {StudentId , StudentName ,  StudentClass  ,StudentMark} = req.body;

 //validate the student fileds 
   if(!StudentId || !StudentName || !StudentClass){
    return next(new ErrorHandler("please fill the required all fields",400));
   }
  //create a new student from db
   const student =await Student.create({
    StudentId, StudentName, StudentClass, StudentMark
   })
   //send a response 
   res.status(200).json(
    {
      success: true,
      message: "added"
    }
   )
})
//find the students by id 
exports.Findstudent = catchAsyncerror( async (req ,res, next) => {
  const studentid = req.params.id;
 const student = await Student.findById(studentid);
  res.status(200).json(student);
})


//update the student by id
exports.Updatestudent = catchAsyncerror( async (req ,res, next) => {
   const studentid = req.params.id;
  const student = await Student.findById(studentid);
  if(!student){
    return next(new ErrorHandler('student not found check student id'));
  }
  const {StudentName,StudentClass,StudentMark} = req.body;
 
  if(StudentMark < 0 || StudentMark >500){
    console.log('error')
       return next(new ErrorHandler('student mark only allow 0 to 500'));
     
  }

  const student1 = await Student.updateOne({_id : studentid},{
    
    StudentName: StudentName,
    StudentClass: StudentClass,
    StudentMark: StudentMark
  })

res.status(200).json({
  success: true,
  message: 'Student updated successfully'
});

} );
//delete student by id 
exports.deleteStudent = catchAsyncerror( async (req , res , next) => {
 const studentid = req.params.id;
 const student = await Student.findById(studentid);
if(!student){
    return next(new ErrorHandler('Student not found or already deleted'));
}
 
 await Student.deleteOne(student);

 res.status(200).json(
    {
        success:true,
        message : 'Student deleted successfully'
    }
 );
});