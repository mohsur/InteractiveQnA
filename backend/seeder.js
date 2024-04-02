const mongoose = require('mongoose');
const QnA = require('./models/qnaModel.js'); 
const connectDB = require('./config/db.js');

const Data = [
    {
      "question": "What is the capital of India?",
      "answer": "The capital of India is New Delhi."
    },
    {
      "question": "Who is known as the Father of the Nation in India?",
      "answer": "Mahatma Gandhi is known as the Father of the Nation in India."
    },
    {
      "question": "Which river is considered the holiest in Hinduism and flows through India?",
      "answer": "The holiest river in Hinduism that flows through India is the Ganges (Ganga)."
    },
    {
      "question": "What is the national animal of India?",
      "answer": "The national animal of India is the Bengal Tiger."
    },
    {
      "question": "Who was the first Prime Minister of India?",
      "answer": "Jawaharlal Nehru was the first Prime Minister of India."
    },
    {
      "question": "Which famous mausoleum is located in Agra, India?",
      "answer": "The famous mausoleum located in Agra, India is the Taj Mahal."
    },
    {
      "question": "What is the national flower of India?",
      "answer": "The national flower of India is the Lotus."
    },
    {
      "question": "Which Indian city is famously known as the 'City of Dreams'?",
      "answer": "Mumbai is famously known as the 'City of Dreams' in India."
    },
    {
      "question": "Who composed the Indian national anthem?",
      "answer": "The Indian national anthem was composed by Rabindranath Tagore."
    },
    {
      "question": "What is the largest state in India by area?",
      "answer": "Rajasthan is the largest state in India by area."
    },
    {
      "question": "Which Indian state is known as the 'Land of Five Rivers'?",
      "answer": "Punjab is known as the 'Land of Five Rivers' in India."
    },
    {
      "question": "Who is the current President of India?",
      "answer": "The current President of India is Ram Nath Kovind."
    },
    {
      "question": "What is the highest civilian award in India?",
      "answer": "The highest civilian award in India is the Bharat Ratna."
    },
    {
      "question": "In which year did India gain independence from British rule?",
      "answer": "India gained independence from British rule on August 15, 1947."
    },
    {
      "question": "Which mountain range forms a natural boundary between India and China?",
      "answer": "The Himalayas form a natural boundary between India and China."
    },
    {
      "question": "What is the currency of India?",
      "answer": "The currency of India is the Indian Rupee."
    },
    {
      "question": "Who is known as the 'Missile Man of India'?",
      "answer": "Dr. APJ Abdul Kalam is known as the 'Missile Man of India'."
    },
    {
      "question": "Which Indian festival is known as the Festival of Lights?",
      "answer": "Diwali is known as the Festival of Lights in India."
    },
    {
      "question": "What is the largest religious gathering in the world, held in India?",
      "answer": "The Kumbh Mela is the largest religious gathering in the world, held in India."
    },
    {
      "question": "Who is the founder of Buddhism, born in modern-day Nepal but attained enlightenment in India?",
      "answer": "Siddhartha Gautama, also known as Buddha, is the founder of Buddhism, born in modern-day Nepal but attained enlightenment in India."
    }
  ];
  


connectDB();

QnA.insertMany(Data)
  .then(() => {
    console.log('Dummy data inserted successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error inserting dummy data:', err);
    mongoose.connection.close();
  });
