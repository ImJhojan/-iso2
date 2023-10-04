import Joi from 'joi'; // validar un esquema de tipo json
import Boom from '@hapi/boom';
import { BLUR_FILTER, GREYSCALE_FILTER, NEGATIVE_FILTER } from '../src/commons/constans.mjs';

class ProcessService {
  processRepository = null;

  minioService = null;

  payloadValidation = Joi.object({
    filters: Joi.array().items(Joi.string().valid(
      
      BLUR_FILTER,
      GREYSCALE_FILTER,
      NEGATIVE_FILTER,

    )).min(1),
    files: Joi.array().required(),
  }).required();

  constructor({ processRepository, minioService }) {

    this.processRepository = processRepository;

    this.minioService = minioService;
  }

  async applyFilters(payload) {
    try {

      await this.payloadValidation.validateAsync(payload);
    } catch (error) {

      throw Boom.badData(error.message, { error });
    }

    const { files, filters } = payload;

    const process = await this.processRepository.save({ filters });


    return process;
  }
}

export default ProcessService;
