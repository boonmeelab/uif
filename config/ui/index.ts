import type { Strategy } from '#ui/types';
import { mergeConfig } from "#ui/utils";

import { badge } from './badge';
import { button } from './button';
import { checkbox } from './checkbox';
import { formGroup } from './formGroup';
import { input } from './input';
import { popover } from './popover';
import { radio } from './radio';
import { radioGroup } from './radioGroup';
import { toggle } from './toggle';
import { tabs } from './tabs';

const defaultConfig = {
  badge,
  button,
  checkbox,
  formGroup,
  input,
  popover,
  radio,
  radioGroup,
  toggle,
  tabs,
}

type Props = { strategy?: Strategy; customConfig?: { [key: string]: any } }

export default function ({ strategy = 'merge', customConfig }: Props = {}) {
  type Ui = typeof defaultConfig & typeof customConfig

  return mergeConfig<Ui>(strategy, customConfig, defaultConfig)
}

