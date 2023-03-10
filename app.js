import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {Service} from "./service.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

const PORT =  process.env.PORT || 3080;

app.get('/', Service.work);
app.get('/help', Service.help);
app.get('/api/read', Service.read);
app.get('/api/read/:id', Service.readById);
app.post('/api/create', Service.create)
app.delete('/api/delete/:id', Service.delete)
app.put('/api/update/:id', Service.update)

app.listen(PORT, () => {
    console.log(`server running on localhost with port ${PORT}`)
})
