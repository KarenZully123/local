import { config } from 'dotenv';
config(); // Cargar las variables del archivo .env

// config.js
export const BD_HOST = process.env.MYSQL_ADDON_HOST || 'bnhldsljkhupvzdzojfb-mysql.services.clever-cloud.com';
export const BD_DATABASE = process.env.MYSQL_ADDON_DB || 'bnhldsljkhupvzdzojfb';
export const DB_USER = process.env.MYSQL_ADDON_USER || 'usfm2yoguq58rvln';
export const DB_PASSWORD = process.env.MYSQL_ADDON_PASSWORD || 'VIh8knbMfYSLtfLVnsGy';
export const DB_PORT = process.env.MYSQL_ADDON_PORT || '3306';

export const PORT = process.env.PORT || 3000;
