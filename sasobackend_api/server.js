require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/sasoApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Import and use routes
app.use('/api/user', require('./routes/user'));
app.use('/api/student', require('./routes/student'));
app.use('/api/tutor', require('./routes/tutor'));
app.use('/api/lecturer', require('./routes/lecturer'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/course', require('./routes/course'));
app.use('/api/studentcourse', require('./routes/studentcourse'));
app.use('/api/tutorcourse', require('./routes/tutorcourse'));
app.use('/api/lecturercourse', require('./routes/lecturercourse'));
app.use('/api/session', require('./routes/session'));
app.use('/api/attendance', require('./routes/attendance'));
app.use('/api/message', require('./routes/message'));
app.use('/api/faq', require('./routes/faq'));
app.use('/api/supportrequest', require('./routes/supportrequest'));
app.use('/api/adminactivitylog', require('./routes/adminactivitylog'));

//const PORT = process.env.PORT || 5000;
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const server = app.listen(0, () => {
    console.log(`Server running on port ${server.address().port}`);
  });