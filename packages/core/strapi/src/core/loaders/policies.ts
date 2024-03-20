import { join, extname, basename } from 'path';
import fse from 'fs-extra';
import { importDefault } from '@strapi/utils';

import type { Strapi, Common } from '@strapi/types';

const VALID_EXTENSIONS = ['.js', '.ts'];

// TODO:: allow folders with index.js inside for bigger policies
export default async function loadPolicies(strapi: Strapi) {
  const dir = strapi.dirs.dist.policies;

  if (!(await fse.pathExists(dir))) {
    return;
  }

  const policies: Record<string, Common.Policy> = {};
  const paths = await fse.readdir(dir, { withFileTypes: true });

  for (const fd of paths) {
    const { name } = fd;
    const fullPath = join(dir, name);

    if (fd.isFile() && VALID_EXTENSIONS.includes(extname(name))) {
      const key = basename(name, extname(name));
      policies[key] = importDefault(fullPath);
    }
  }

  strapi.container.get('policies').add(`global::`, policies);
}
