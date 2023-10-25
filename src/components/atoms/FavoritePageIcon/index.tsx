import FavoritePageDefaultIcon from '../../../assets/icons/FavoritePageDefaultIcon.svg';
import FavoritePageActiveIcon from '../../../assets/icons/FavoritePageActiveIcon.svg';

type FavoritePageIconProps = {
  state: 'active' | 'default';
};

export const FavoritePageIcon = ({
  state = 'default'
}: FavoritePageIconProps) => {
  switch (state) {
    case 'active': {
      return <img src={FavoritePageActiveIcon} alt="" />;
    }
    default: {
      return <img src={FavoritePageDefaultIcon} alt="" />;
    }
  }
};
