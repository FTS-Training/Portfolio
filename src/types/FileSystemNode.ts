type FileSystemBase = {
  name: string;
  id: string;
  icon: string;
  location: string;
  index: number;
};

export type FileDir = FileSystemBase & {
  type: 'file';
  content: string;
};

export type FolderDir = FileSystemBase & {
  type: 'folder';
  children: FileSystemNode[];
};

export type FileSystemNode = FileDir | FolderDir;
