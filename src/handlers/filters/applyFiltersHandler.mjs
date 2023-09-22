import Boom from '@hapi/boom';
import HttpStatusCodes from 'http-status-codes';

import multer from 'multer';
import applyFilters from '../../controllers/filters/applyFilters.mjs';

const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 1024 * 1024 * 50 } });

const applyFiltersHandler = async (req, res, next) => {
  try {
    upload.array('files[]')(req, res, async (err) => {
      if (err) {
        return next(Boom.badRequest('Error al subir archivos ', { error: err }));
      }
      const archivos = req.files;

      const { body } = req;

      console.log(body);

      const bodyParsed = JSON.parse(`{"filters": ${body.filters}}`);

      const bodyParsed2 = JSON.parse(req.body.filters);

      console.log(`hola ${JSON.stringify(bodyParsed)}`);

      const response = await applyFilters(archivos, bodyParsed, bodyParsed2);

      return res.status(HttpStatusCodes.OK).json(response);
    });
  } catch (error) {
    const err = Boom.isBoom(error) ? error : Boom.internal(error);
    next(err);
  }
};
export default applyFiltersHandler;
