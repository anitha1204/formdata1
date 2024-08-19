const express = require('express');
const router = express.Router();
const { sendEmail, saveDraft, getAllDrafts } = require('../controllers/emailController');

router.post('/send', sendEmail);
router.post('/draft', saveDraft);
router.get('/drafts', getAllDrafts);

module.exports = router;
