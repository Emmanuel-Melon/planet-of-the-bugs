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
  type?: 'button' | 'submit';
  requestState?: RequestState;
  classes?: string;
  onClick?: () => void;
}

export type RequestState = 'idle' | 'processing' | 'completed' | 'failed';
