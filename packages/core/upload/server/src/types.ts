export interface File {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: Record<string, unknown>;
  hash: string;
  ext?: string;
  mime: string;
  size: number;
  sizeInBytes: number;
  url: string;
  previewUrl?: string;
  path?: string;
  provider?: string;
  provider_metadata?: Record<string, unknown>;
  isUrlSigned?: boolean;
}

export interface Folder {
  id: number;
  name: string;
  pathId: number;
  /**
   * parent id
   */
  parent?: number;
  /**
   * children ids
   */
  children?: number[];
  path: string;
  files?: File[];
}

export interface Config {
  provider: string;
  sizeLimit?: number;
  providerOptions: Record<string, unknown>;
  actionOptions: Record<string, unknown>;
}
