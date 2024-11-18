import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import localizacionRoutes from './routes/localizacionRoutes.js';

dotenv.config();

const app = express();

// Configuración de CORS
app.use(cors());
app.use(express.json()); // Middleware para analizar JSON

// Rutas
app.use('/api', localizacionRoutes);

// Controlador de errores de ruta no encontrada
app.use((req, res, next) => {
    res.status(400).json({
        message: 'Endpoint not found'
    });
});

export default app;