import { resolve } from 'path';
import { statSync, existsSync } from 'fs';
import { yup, importDefault } from '@strapi/utils';

import type { Strapi } from '@strapi/types';

const srcSchema = yup
  .object()
  .shape({
    bootstrap: yup.mixed().isFunction(),
    register: yup.mixed().isFunction(),
    destroy: yup.mixed().isFunction(),
  })
  .noUnknown();

const validateSrcIndex = (srcIndex: unknown) => {
  return srcSchema.validateSync(srcIndex, { strict: true, abortEarly: false });
};

export default (strapi: Strapi) => {
  if (!existsSync(strapi.dirs.dist.src)) {
    return;
  }

  for (const indexFile of ['index.js', 'index.ts']) {
    const pathToSrcIndex = resolve(strapi.dirs.dist.src, indexFile);

    if (existsSync(pathToSrcIndex) && statSync(pathToSrcIndex).isFile()) {
      const srcIndex = importDefault(pathToSrcIndex);

      try {
        validateSrcIndex(srcIndex);
      } catch (e) {
        if (e instanceof yup.ValidationError) {
          strapi.stopWithError({ message: `Invalid file \`./src/${indexFile}\`: ${e.message}` });
        }

        throw e;
      }

      return srcIndex;
    }
  }

  return {};
};
