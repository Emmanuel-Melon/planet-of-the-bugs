export interface ButtonProps {
  CTA: string;
  icon?: string;
  ButtonType?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'link'
    | 'outline';
  ButtonSize?: 'xs' | 'sm' | 'base' | 'lg';
  state?: 'info' | 'success' | 'warning' | 'error';
  requestState?: RequestState;
  onClick?: () => void;
}

export type RequestState = 'idle' | 'processing' | 'completed' | 'failed';
