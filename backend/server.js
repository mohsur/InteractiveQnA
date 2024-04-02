const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const QnA = require('./models/qnaModel.js');


const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());


connectDB();


app.post('/get-answer', async (req, res) => {
    try {
        const { question } = req.body; 
        const qna = await QnA.findOne({ question }); 
        if (!qna) {
            res.status(404).json({ message: 'Answer not found' }); 
            return;
        }
        res.json({ answer: qna.answer }); 
    } catch (error) {
        console.error('Error fetching answer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.post('/thumbs-up', async (req, res) => {
    try {
        const { answer } = req.body;
        const qna = await QnA.findOne({ answer });
        if (!qna) {
            res.status(404).json({ message: 'Answer not found' });
            return;
        }
        qna.feedback += 1; 
        await qna.save();
        res.json({ message: 'Thumbs-up feedback received' });
    } catch (error) {
        console.error('Error handling thumbs-up feedback:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.post('/thumbs-down', async (req, res) => {
    try {
        const { answer } = req.body;
        const qna = await QnA.findOne({ answer });
        if (!qna) {
            res.status(404).json({ message: 'Answer not found' });
            return;
        }
        qna.feedback -= 1; 
        await qna.save();
        res.json({ message: 'Thumbs-down feedback received' });
    } catch (error) {
        console.error('Error handling thumbs-down feedback:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
