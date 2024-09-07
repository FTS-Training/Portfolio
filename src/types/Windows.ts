import { FileSystemNode } from './FileSystemNode';

export type Windows = {
  config: {
    desktopBackgroundImage: string;
  };
  FileSystem?: { [key: string]: FileSystemNode };
};
