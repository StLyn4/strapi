import { isFunction } from 'lodash/fp';
import { file as fileUtils } from '@strapi/utils';
import type { Readable } from 'node:stream';
import type { Strapi } from '@strapi/types';

import { Config, File } from '../types';

type UploadableFile = File & {
  getStream: () => Readable;
  stream?: Readable;
  buffer?: Buffer;
};

export default ({ strapi }: { strapi: Strapi }) => ({
  async checkFileSize(file: File) {
    const { sizeLimit } = strapi.config.get<Config>('plugin::upload');
    await strapi.plugin('upload').provider.checkFileSize(file, { sizeLimit });
  },

  async upload(file: UploadableFile) {
    if (isFunction(strapi.plugin('upload').provider.uploadStream)) {
      file.stream = file.getStream();
      await strapi.plugin('upload').provider.uploadStream(file);
      delete file.stream;
    } else {
      file.buffer = await fileUtils.streamToBuffer(file.getStream());
      await strapi.plugin('upload').provider.upload(file);
      delete file.buffer;
    }
  },
});
