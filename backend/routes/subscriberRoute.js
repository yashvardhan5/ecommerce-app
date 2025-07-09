import express from 'express';
import { subscribeUser }  from '../controllers/subscriberController.js';

const newsrouter = express.Router();

newsrouter.post('/',subscribeUser);


export default newsrouter; 