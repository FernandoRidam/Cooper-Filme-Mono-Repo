import { Button, Color, Variant } from "./styles";

export { Variant } from "./styles";

export interface IconButonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element;
  color?: Color;
  variant?: Variant;
};

export const IconButton: React.FC<IconButonProps> = ({
  children,
  color,
  variant,
  ...rest
}) => {
  return (
    <Button
      $color={ color }
      $variant={ variant }
      { ...rest }
    >
      { children }
    </Button>
  );
};
