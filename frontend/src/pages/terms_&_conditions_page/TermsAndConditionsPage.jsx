const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/mediHub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const termsSchema = new mongoose.Schema({
  content: String,
  updatedAt: { type: Date, default: Date.now },
});
const Terms = mongoose.model('Terms', termsSchema);
app.get('/terms', async (req, res) => {
  try {
    const terms = await Terms.findOne().sort({ updatedAt: -1 });
    if (!terms) {
      return res.status(404).json({ message: 'Terms and Conditions not found' });
    }
    res.json(terms);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
app.put('/terms', async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: 'Content is required' });
  }

  try {
    const newTerms = new Terms({ content });
    await newTerms.save();
    res.json({ message: 'Terms and Conditions updated successfully', terms: newTerms });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
