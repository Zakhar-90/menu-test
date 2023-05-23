import { Share2, Edit, Trash2 } from "react-feather";
import { DropdownItemProps } from "components/dropdown-menu/types";
import { DropdownMenu, DropdownProvider } from 'components/dropdown-menu';
import { ExampleButton } from 'components/example-components';
import style from './styles.module.css';

const items:DropdownItemProps[] = [
  {
    text: 'Поделиться в социальных сетях',
    Icon: Share2,
    callback: () => alert('Click!'),
  },
  {
    text: 'Редактировать страницу',
    Icon: Edit,
    callback: () => alert('Click!'),
  },
  {
    text: 'Удалить страницу',
    Icon: Trash2,
    callback: () => alert('Click!'),
  },
];
export function App() {
  return (
    <div className={style.container}>
      <DropdownProvider>
        <div className={style.item}>
          <DropdownMenu id="menu-1" TriggerElement={ExampleButton} menuElements={items} />
        </div>
        <div className={style.item}>
          <DropdownMenu id="menu-2" TriggerElement={ExampleButton} menuElements={items} />
        </div>
        <div className={style.item}>
          <DropdownMenu id="menu-3" TriggerElement={ExampleButton} menuElements={items} />
        </div>
        <div className={style.item}>
          <DropdownMenu id="menu-4" TriggerElement={ExampleButton} menuElements={items} />
        </div>
      </DropdownProvider>
    </div>
  );
}
