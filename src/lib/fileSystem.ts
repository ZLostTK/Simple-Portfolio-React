import type { FileId, FileInfo } from '@/src/shared/types';

export const FILES: FileInfo[] = [
  { id: 'home',       name: 'home',       ext: 'tsx',  path: 'src/',   icon: 'react',   iconColor: '#61DAFB' },
  { id: 'about',      name: 'about',      ext: 'html', path: 'src/',   icon: 'html',    iconColor: '#E34F26' },
  { id: 'projects',   name: 'projects',   ext: 'js',   path: 'src/',   icon: 'js',      iconColor: '#F7DF1E' },
  { id: 'skills',     name: 'skills',     ext: 'json', path: 'data/',  icon: 'json',    iconColor: '#F5A623' },
  { id: 'experience', name: 'experience', ext: 'ts',   path: 'src/',   icon: 'ts',      iconColor: '#3178C6' },
  { id: 'contact',    name: 'contact',    ext: 'css',  path: 'src/',   icon: 'css',     iconColor: '#264DE4' },
  { id: 'readme',     name: 'README',     ext: 'md',   path: './',     icon: 'md',      iconColor: '#6B7280' },
];

export const FILE_MAP: Record<FileId, FileInfo> = Object.fromEntries(
  FILES.map((f) => [f.id, f])
) as Record<FileId, FileInfo>;

export function getFileLabel(file: FileInfo): string {
  return `${file.name}.${file.ext}`;
}

export function getFilePath(file: FileInfo): string {
  return `alexander-martinez > ${file.path} > ${getFileLabel(file)}`;
}
