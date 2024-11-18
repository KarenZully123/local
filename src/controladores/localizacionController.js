import { conmysql } from '../db.js';

export const getLocalizaciones = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM Local');
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al consultar localizaciones" });
    }
};

export const getLocalizacionById = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await conmysql.query('SELECT * FROM Local WHERE id = ?', [id]);
        if (result.length === 0) return res.status(404).json({ message: "Localización no encontrada" });
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ message: "Error al consultar localización" });
    }
};

export const createLocalizacion = async (req, res) => {
    try {
        const { latitud, longitud, titulo, propietario, cedula, medicion, fecha } = req.body;
        
        // Asegúrate de que req.body contiene los datos esperados
        if (!latitud || !longitud || !titulo || !propietario || !cedula || !medicion || !fecha) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const [rows] = await conmysql.query(
          'INSERT INTO Local (latitud, longitud, titulo, propietario, cedula, medicion, fecha) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [latitud, longitud, titulo, propietario, cedula, medicion, fecha]
        );

        res.send({
          id: rows.insertId,
          latitud,
          longitud,
          titulo,
          propietario,
          cedula,
          medicion,
          fecha
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error del lado del servidor' });
    }
};

export const updateLocalizacion = async (req, res) => {
    const { id } = req.params;
    const { latitud, longitud, titulo, propietario, cedula, medicion, fecha } = req.body;
    try {
        const [result] = await conmysql.query(
            'UPDATE Local SET latitud = ?, longitud = ?, titulo = ?, propietario = ?, cedula = ?, medicion = ?, fecha = ? WHERE id = ?',
            [latitud, longitud, titulo, propietario, cedula, medicion, fecha, id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ message: "Localización no encontrada" });
        res.json({ message: "Localización actualizada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar localización" });
    }
};

export const deleteLocalizacion = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await conmysql.query('DELETE FROM Local WHERE id = ?', [id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: "Localización no encontrada" });
        res.json({ message: "Localización eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar localización" });
    }
};
