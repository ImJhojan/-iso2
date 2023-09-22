import Joi from 'joi'; // validar un esquema de tipo json
import Boom from '@hapi/boom';
import Process from '../../models/Process.mjs';//
import { BLUR_FILTER, GREYSCALE_FILTER, NEGATIVE_FILTER } from '../../commons/constans.mjs';

const PayloadValidation = Joi.object({
  filters: Joi.array().min(1).items(Joi.string().valid(NEGATIVE_FILTER, GREYSCALE_FILTER, BLUR_FILTER)),
});

const applyFilters = async (files, filters, filtersBase) => {
  try {
    await PayloadValidation.validateAsync(filters);
  } catch (error) {
    throw Boom.badData(error.message, { error });
  }
  const filesData = [];

  for (const file of files) {
    const fileData = file.buffer;
    filesData.push(fileData);
  }
  const newProcess = new Process();
  newProcess.filters = filtersBase;
  newProcess.files = filesData;

  await newProcess.save();

  return newProcess;
};

export default applyFilters;
