export type CursorVariant = 'default' | 'hover' | 'button' | 'icon';

export interface CursorContextType {
  cursorVariant: CursorVariant;
  setCursorVariant: (variant: CursorVariant) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
}

export interface NavItem {
  label: string;
  href: string;
}
