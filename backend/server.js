const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = 4000;

// Dummy data
const dummyData = [
    { question: "Q: What is the capital of France?", answer: "A: The capital of France is Paris." },
    { question: "Q: Who is the president of the United States?", answer: "A: The president of the United States is Joe Biden." },
    { question: "Q: What is the largest mammal on Earth?", answer: "A: The largest mammal on Earth is the blue whale." },
    { question: "Q: What is the capital of France?", answer: "A: The capital of France is Paris." },
    { question: "Q: Who is the president of the United States?", answer: "A: The president of the United States is Joe Biden." },
    { question: "Q: What is the largest mammal on Earth?", answer: "A: The largest mammal on Earth is the blue whale." },
    { question: "Q: What is the capital of France?", answer: "A: The capital of France is Paris." },
    { question: "Q: Who is the president of the United States?", answer: "A: The president of the United States is Joe Biden." },
    { question: "Q: What is the largest mammal on Earth?", answer: "A: The largest mammal on Earth is the blue whale." },
    { question: "Q: What is the capital of France?", answer: "A: The capital of France is Paris." },
    { question: "Q: Who is the president of the United States?", answer: "A: The president of the United States is Joe Biden." },
    { question: "Q: What is the largest mammal on Earth?", answer: "A: The largest mammal on Earth is the blue whale." },
   
];

// Enable CORS for all routes
app.use(cors());

// Route to fetch dummy data
app.get('/dummy-data', (req, res) => {
    // Simulate delay to mimic real-world scenario (replace with database query if needed)
    setTimeout(() => {
        res.json(dummyData);
    }, 1000); // 1 second delay
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
