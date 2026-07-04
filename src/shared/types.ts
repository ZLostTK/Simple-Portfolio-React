export type FileId =
  | 'home'
  | 'about'
  | 'projects'
  | 'skills'
  | 'experience'
  | 'contact'
  | 'readme';

export type FileExtension = 'tsx' | 'html' | 'js' | 'json' | 'ts' | 'css' | 'md' | 'pdf';

export interface FileInfo {
  id: FileId;
  name: string;
  ext: FileExtension;
  path: string;
  icon: string;
  iconColor: string;
}

export interface Tab {
  id: FileId;
  pinned?: boolean;
}

export interface TerminalEntry {
  type: 'command' | 'output' | 'error';
  text: string;
}

export interface CopilotMessage {
  role: 'user' | 'assistant';
  text: string;
}
