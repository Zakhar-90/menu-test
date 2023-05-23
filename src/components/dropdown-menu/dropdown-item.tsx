import { FC } from 'react';
import { DropdownItemProps } from './types';
import styles from './styles/dropdown-item.module.css';

export const DropdownItem: FC<DropdownItemProps> = ({ text, Icon, callback }) => {
  return (
    <button className={styles.container} onClick={callback}>
      <div className={styles.content}>{text}</div>
      <div className={styles.icon}>
        <Icon size={20} />
      </div>
    </button>
  );
};
