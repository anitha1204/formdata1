const nodemailer = require('nodemailer');
const Email = require('../models/Email');
const Companys = require('../models/Company');

exports.sendEmail = async (req, res) => {
  try {
    const { subject, content, recipients = [], categories = [] } = req.body;

    // Ensure recipients is an array or an empty array if not provided
    if (!Array.isArray(recipients)) {
      return res.status(400).json({ message: 'Recipients must be an array' });
    }

    // Find all companies that match the selected categories and positions
    const companies = await Companys.find({
      category: { $in: categories },
      position: { $in: recipients.map(r => r.position) }
    });

    const emailAddresses = companies.map(company => company.email);

    // Save email to database
    const newEmail = new Email({
      subject,
      content,
      recipients: companies.map(company => company._id),
      categories
    });
    await newEmail.save();

    // Send email using nodemailer
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: emailAddresses.join(', '),
      subject: subject,
      text: content,
      html: content,
    });

    res.json({ message: 'Email sent successfully', messageId: info.messageId });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.saveDraft = async (req, res) => {
  try {
    const { subject, content, recipients = [] } = req.body;

    // Ensure recipients is an array or an empty array if not provided
    if (!Array.isArray(recipients)) {
      return res.status(400).json({ message: 'Recipients must be an array' });
    }

    const newDraft = new Email({
      subject,
      content,
      recipients,
      isDraft: true
    });

    const draft = await newDraft.save();
    res.json(draft);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getAllDrafts = async (req, res) => {
  try {
    const drafts = await Email.find({ isDraft: true }).populate('recipients');
    res.json(drafts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
