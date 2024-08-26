// const mongoose = require('mongoose');

// const companySchema = new mongoose.Schema({
//     companyName: { type: String, required: true },
//     address: { type: String },
//     registeredOfficeAddress: { type: String },
//     chiefExecutiveName: { type: String, required: true },
//     designation: { type: String, required: true },
//     yearOfEstablishment: { type: String, required: true },
//     telephone: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     mobile: { type: String },
//     website: { type: String },
//     businessActivity: { type: String },
//     paidUpCapital: { type: String },
//     numberOfEmployees: { type: String },
//     annualTurnover: { type: String },
//     gstNo: { type: String },
//     natureOfCompany: { type: String },
//     keyContactPerson: { type: String },
//     keyContactMobile: { type: String },
//     secondaryContactPerson: { type: String },
//     secondaryContactMobile: { type: String }
// });

// module.exports = mongoose.model('Company', companySchema);



// const mongoose = require('mongoose');

// const companySchema = new mongoose.Schema({
//   companyName: { type: String, required: true },
//   address: { type: String, required: true, maxlength: 100 },
//   registeredOfficeAddress: { type: String, required: true, maxlength: 100 },
//   chiefExecutiveName: { type: String, required: true },
//   designation: { type: String, required: true },
//   yearOfEstablishment: { 
//     type: Number, 
//     required: true,
//     min: 1800,
//     max: new Date().getFullYear()
//   },
//   telephone: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: function(v) {
//         return /^\d{10,12}$/.test(v);
//       },
//       message: props => `${props.value} is not a valid telephone number!`
//     }
//   },
//   email: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: function(v) {
//         return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
//       },
//       message: props => `${props.value} is not a valid email address!`
//     }
//   },
//   mobile: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: function(v) {
//         return /^\d{10}$/.test(v);
//       },
//       message: props => `${props.value} is not a valid mobile number!`
//     }
//   },
//   website: { 
//     type: String,
//     validate: {
//       validator: function(v) {
//         return /^https?:\/\/.+/.test(v);
//       },
//       message: props => `${props.value} is not a valid URL!`
//     }
//   },
//   businessActivity: { type: String, required: true },
//   paidUpCapital: { type: Number, required: true, min: 0 },
//   numberOfEmployees: { type: Number, required: true, min: 1 },
//   annualTurnover: { type: Number, required: true, min: 0 },
//   gstNo: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: function(v) {
//         return /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(v);
//       },
//       message: props => `${props.value} is not a valid GST number!`
//     }
//   },
//   natureOfCompany: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: function(v) {
//         return /^[A-Za-z\s]+$/.test(v);
//       },
//       message: props => `${props.value} should contain only letters!`
//     }
//   },
//   keyContactPerson: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: function(v) {
//         return /^[A-Za-z\s]+$/.test(v);
//       },
//       message: props => `${props.value} should contain only letters!`
//     }
//   },
//   keyContactMobile: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: function(v) {
//         return /^\d{10}$/.test(v);
//       },
//       message: props => `${props.value} is not a valid mobile number!`
//     }
//   },
//   secondaryContactPerson: { 
//     type: String,
//     validate: {
//       validator: function(v) {
//         return /^[A-Za-z\s]+$/.test(v);
//       },
//       message: props => `${props.value} should contain only letters!`
//     }
//   },
//   secondaryContactMobile: { 
//     type: String,
//     validate: {
//       validator: function(v) {
//         return /^\d{10}$/.test(v);
//       },
//       message: props => `${props.value} is not a valid mobile number!`
//     }
//   }
// });

// module.exports = mongoose.model('Company', companySchema);




const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyName: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true, 
    maxlength: 100 
  },
  registeredOfficeAddress: { 
    type: String, 
    required: true, 
    maxlength: 100 
  },
  chiefExecutiveName: { 
    type: String, 
    required: true 
  },
  designation: { 
    type: String, 
    required: true 
  },
  yearOfEstablishment: { 
    type: Number, 
    required: true,
    min: 1800, 
    max: new Date().getFullYear() 
  },
  telephone: { 
    type: String, 
    required: true,
    validate: {
      validator: v => /^\d{10,12}$/.test(v),
      message: props => `${props.value} is not a valid telephone number!`
    }
  },
  email: { 
    type: String, 
    required: true,
    validate: {
      validator: v => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v),
      message: props => `${props.value} is not a valid email address!`
    }
  },
  mobile: { 
    type: String, 
    required: true,
    validate: {
      validator: v => /^\d{10}$/.test(v),
      message: props => `${props.value} is not a valid mobile number!`
    }
  },
  website: { 
    type: String,
    validate: {
      validator: v => /^https?:\/\/.+/.test(v),
      message: props => `${props.value} is not a valid URL!`
    }
  },
  businessActivity: { 
    type: String, 
    required: true 
  },
  paidUpCapital: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  numberOfEmployees: { 
    type: Number, 
    required: true, 
    min: 1 
  },
  annualTurnover: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  gstNo: { 
    type: String, 
    required: true,
    validate: {
      validator: v => /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(v),
      message: props => `${props.value} is not a valid GST number!`
    }
  },
  natureOfCompany: { 
    type: String, 
    required: true,
    validate: {
      validator: v => /^[A-Za-z\s]+$/.test(v),
      message: props => `${props.value} should contain only letters!`
    }
  },
  keyContactPerson: { 
    type: String, 
    required: true,
    validate: {
      validator: v => /^[A-Za-z\s]+$/.test(v),
      message: props => `${props.value} should contain only letters!`
    }
  },
  keyContactMobile: { 
    type: String, 
    required: true,
    validate: {
      validator: v => /^\d{10}$/.test(v),
      message: props => `${props.value} is not a valid mobile number!`
    }
  },
  secondaryContactPerson: { 
    type: String,
    validate: {
      validator: v => /^[A-Za-z\s]+$/.test(v),
      message: props => `${props.value} should contain only letters!`
    }
  },
  secondaryContactMobile: { 
    type: String,
    validate: {
      validator: v => /^\d{10}$/.test(v),
      message: props => `${props.value} is not a valid mobile number!`
    }
  }
});

module.exports = mongoose.model('Company', companySchema);
