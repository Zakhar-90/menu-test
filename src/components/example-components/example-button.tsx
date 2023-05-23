import { MoreVertical } from "react-feather";
import { forwardRef } from 'react';
import { Button } from 'components/button';
import { TriggerElementProps } from '../dropdown-menu/types';

export const ExampleButton = forwardRef<HTMLButtonElement, TriggerElementProps>(({ onClick }, ref) => {
  return (
    <Button ref={ref} onClick={onClick}>
      <MoreVertical />
    </Button>
  );
});
ExampleButton.displayName = 'ExampleButton';
