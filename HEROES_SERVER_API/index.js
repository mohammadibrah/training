import express from 'express';
import bodyParser from 'body-parser';
import heroesRoutes from './routes/heroes.js';
import mongoose from 'mongoose';
import cors from 'cors';



// Connect to MongoDB database
const dburl = "mongodb+srv://root:root@cluster0.tnerh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
	.connect( dburl, { useNewUrlParser: true })
	.then(() => {
		console.log('Connected successfully to hero database')
	})
    .catch(error => console.log('Database connection faild'))

const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use(cors());
app.use('/', heroesRoutes);
app.listen(PORT, ( ) => console.log(`Server is running on port: http://localhost:${PORT}`));

//app.get('/', (req, res) => res.send('Hello from my first server'));

