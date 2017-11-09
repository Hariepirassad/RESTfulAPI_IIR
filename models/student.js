const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create student Schema & model
const StudentSchema = new Schema({
  studentID:{
    type: Number,
    required: [true, 'StudentID field is required']
  },
  name:{
    type: String
  },
  surname:{
    type: String
  },
  course:{
    courseID:{
      type: String
    },
    name:{
      type: String
    },
    modules:[
      {
        moduleID:{
          type: Number
        },
        name:{
          type: String
        },
        lecturer:{
          lecturerID:{
            type: Number
          },
          name:{
            type: String
          },
          surname:{
            type: String
          }
        }
      },
      {
        moduleID:{
          type: Number
        },
        name:{
          type: String
        },
        lecturer:{
          lecturerID:{
            type: Number
          },
          name:{
            type: String
          },
          surname:{
            type: String
          }
        }
      }
    ]
  }
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;
