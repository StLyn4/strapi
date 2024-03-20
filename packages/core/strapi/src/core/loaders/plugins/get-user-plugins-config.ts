import { join } from 'path';
import fse from 'fs-extra';
import { merge } from 'lodash/fp';
import { loadFile } from '../../app-configuration/load-config-file';

const PLUGIN_FILES = ['plugins.js', 'plugins.mjs', 'plugins.ts'];

/**
 * Return user defined plugins' config
 * first load config from `config/plugins.js`
 * and then merge config from `config/env/{env}/plugins.js`
 */
export const getUserPluginsConfig = async () => {
  let config = {};

  for (const filename of PLUGIN_FILES) {
    const globalUserConfigPath = join(strapi.dirs.dist.config, filename);
    const currentEnvUserConfigPath = join(
      strapi.dirs.dist.config,
      'env',
      process.env.NODE_ENV as string,
      filename
    );

    // assign global user config if exists
    if (await fse.pathExists(globalUserConfigPath)) {
      config = loadFile(globalUserConfigPath);
    }

    // and merge user config by environment if exists
    if (await fse.pathExists(currentEnvUserConfigPath)) {
      config = merge(config, loadFile(currentEnvUserConfigPath));
    }
  }

  return config;
};
