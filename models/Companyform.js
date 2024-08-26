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
//   companyName: { 
//     type: String, 
//     required: true 
//   },
//   address: { 
//     type: String, 
//     required: true, 
//     maxlength: 100 
//   },
//   registeredOfficeAddress: { 
//     type: String, 
//     required: true, 
//     maxlength: 100 
//   },
//   chiefExecutiveName: { 
//     type: String, 
//     required: true 
//   },
//   designation: { 
//     type: String, 
//     required: true 
//   },
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
//       validator: v => /^\d{10,12}$/.test(v),
//       message: props => `${props.value} is not a valid telephone number!`
//     }
//   },
//   email: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: v => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v),
//       message: props => `${props.value} is not a valid email address!`
//     }
//   },
//   mobile: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: v => /^\d{10}$/.test(v),
//       message: props => `${props.value} is not a valid mobile number!`
//     }
//   },
//   website: { 
//     type: String,
//     validate: {
//       validator: v => /^https?:\/\/.+/.test(v),
//       message: props => `${props.value} is not a valid URL!`
//     }
//   },
//   businessActivity: { 
//     type: String, 
//     required: true 
//   },
//   paidUpCapital: { 
//     type: Number, 
//     required: true, 
//     min: 0 
//   },
//   numberOfEmployees: { 
//     type: Number, 
//     required: true, 
//     min: 1 
//   },
//   annualTurnover: { 
//     type: Number, 
//     required: true, 
//     min: 0 
//   },
//   gstNo: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: v => /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(v),
//       message: props => `${props.value} is not a valid GST number!`
//     }
//   },
//   natureOfCompany: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: v => /^[A-Za-z\s]+$/.test(v),
//       message: props => `${props.value} should contain only letters!`
//     }
//   },
//   keyContactPerson: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: v => /^[A-Za-z\s]+$/.test(v),
//       message: props => `${props.value} should contain only letters!`
//     }
//   },
//   keyContactMobile: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: v => /^\d{10}$/.test(v),
//       message: props => `${props.value} is not a valid mobile number!`
//     }
//   },
//   secondaryContactPerson: { 
//     type: String,
//     validate: {
//       validator: v => /^[A-Za-z\s]+$/.test(v),
//       message: props => `${props.value} should contain only letters!`
//     }
//   },
//   secondaryContactMobile: { 
//     type: String,
//     validate: {
//       validator: v => /^\d{10}$/.test(v),
//       message: props => `${props.value} is not a valid mobile number!`
//     }
//   }
// });

// module.exports = mongoose.model('Company', companySchema);




const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyName: { 
    type: String, 
    required: [true, 'Company name is required'] 
  },
  address: { 
    type: String, 
    required: [true, 'Address is required'], 
    maxlength: [100, 'Address cannot exceed 100 characters']
  },
  registeredOfficeAddress: { 
    type: String, 
    required: [true, 'Registered office address is required'], 
    maxlength: [100, 'Registered office address cannot exceed 100 characters']
  },
  chiefExecutiveName: { 
    type: String, 
    required: [true, 'Chief Executive Name is required'] 
  },
  designation: { 
    type: String, 
    required: [true, 'Designation is required'] 
  },
  yearOfEstablishment: { 
    type: Number, 
    required: [true, 'Year of establishment is required'],
    min: [1800, 'Year of establishment must be no earlier than 1800'], 
    max: [new Date().getFullYear(), 'Year of establishment cannot be in the future']
  },
  telephone: { 
    type: String, 
    required: [true, 'Telephone number is required'],
    validate: {
      validator: v => /^\d{10,12}$/.test(v),
      message: props => `Invalid telephone number: ${props.value}. It should be between 10 to 12 digits.`
    }
  },
  email: { 
    type: String, 
    required: [true, 'Email address is required'],
    validate: {
      validator: v => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v),
      message: props => `Invalid email address: ${props.value}.`
    }
  },
  mobile: { 
    type: String, 
    required: [true, 'Mobile number is required'],
    validate: {
      validator: v => /^\d{10}$/.test(v),
      message: props => `Invalid mobile number: ${props.value}. It should be 10 digits.`
    }
  },
  website: { 
    type: String,
    validate: {
      validator: v => /^https?:\/\/.+/.test(v),
      message: props => `Invalid URL: ${props.value}. It should start with "http://" or "https://".`
    }
  },
  businessActivity: { 
    type: String, 
    required: [true, 'Business activity is required'] 
  },
  paidUpCapital: { 
    type: Number, 
    required: [true, 'Paid up capital is required'], 
    min: [0, 'Paid up capital cannot be negative']
  },
  numberOfEmployees: { 
    type: Number, 
    required: [true, 'Number of employees is required'], 
    min: [1, 'Number of employees must be at least 1']
  },
  annualTurnover: { 
    type: Number, 
    required: [true, 'Annual turnover is required'], 
    min: [0, 'Annual turnover cannot be negative']
  },
  gstNo: { 
    type: String, 
    required: [true, 'GST number is required'],
    validate: {
      validator: v => /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(v),
      message: props => `Invalid GST number: ${props.value}.`
    }
  },
  natureOfCompany: { 
    type: String, 
    required: [true, 'Nature of company is required'],
    validate: {
      validator: v => /^[A-Za-z\s]+$/.test(v),
      message: props => `Invalid nature of company: ${props.value}. Only letters are allowed.`
    }
  },
  keyContactPerson: { 
    type: String, 
    required: [true, 'Key contact person is required'],
    validate: {
      validator: v => /^[A-Za-z\s]+$/.test(v),
      message: props => `Invalid key contact person: ${props.value}. Only letters are allowed.`
    }
  },
  keyContactMobile: { 
    type: String, 
    required: [true, 'Key contact mobile number is required'],
    validate: {
      validator: v => /^\d{10}$/.test(v),
      message: props => `Invalid key contact mobile number: ${props.value}. It should be 10 digits.`
    }
  },
  secondaryContactPerson: { 
    type: String,
    validate: {
      validator: v => /^[A-Za-z\s]+$/.test(v),
      message: props => `Invalid secondary contact person: ${props.value}. Only letters are allowed.`
    }
  },
  secondaryContactMobile: { 
    type: String,
    validate: {
      validator: v => /^\d{10}$/.test(v),
      message: props => `Invalid secondary contact mobile number: ${props.value}. It should be 10 digits.`
    }
  }
});

module.exports = mongoose.model('Company', companySchema);
