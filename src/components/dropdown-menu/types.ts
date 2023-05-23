import { FC, ForwardRefExoticComponent, MutableRefObject, RefAttributes } from 'react';
import { Icon } from "react-feather";

export type DropdownItemProps = {
  text: string;
  Icon: Icon;
  callback?: () => void;
};

export type DropdownViewProps = {
  isActive: boolean;
  triggerElementRef: MutableRefObject<HTMLElement | null>;
};

export type TriggerElementProps = {
  onClick: () => void;
};

export type DropdownTriggerProps = {
  TriggerElement: ForwardRefExoticComponent<TriggerElementProps & RefAttributes<HTMLButtonElement>>;
};

export type DropdownComponentProps = {
  menuElements: DropdownItemProps[];
  id: string;
  className?: string;
};

export type DropdownMenuProps = DropdownTriggerProps & DropdownComponentProps;
