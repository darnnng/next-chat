export interface IButtonProps {
  onClick?: () => void;
  variant?: string;
  size?: string;
  text: string;
  isLoading: boolean;
  styleProps?: unknown;
}