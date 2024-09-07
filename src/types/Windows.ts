import { FileSystemNode } from './FileSystemNode';

export type Windows = {
  desktop: FileSystemNode[];
  myComputer: FileSystemNode[];
  recycleBin: FileSystemNode[];
  documents: FileSystemNode[];
  desktopBackgroundImage: string;
};
