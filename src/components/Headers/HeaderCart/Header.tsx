import {headerStyling} from '../headerStyling';

interface HeaderProps {
  route: {
    params: string;
  };
}

export const HeaderCart: Object = ({route}: HeaderProps) => {
  return {
    title: route.params,
    ...headerStyling,
  };
};
