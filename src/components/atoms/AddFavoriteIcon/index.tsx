import AddFavoriteHoverIcon from '../../../assets/icons/AddFavoriteHoverIcon.svg';
import AddFavoriteActiveIcon from '../../../assets/icons/AddFavoriteActiveIcon.svg';
import AddFavoriteDefaultIcon from '../../../assets/icons/AddFavoriteDefaultIcon.svg';

type TypeSize = {
  small: number;
  middle: number;
};
const sizeIcon: TypeSize = {
  small: 20,
  middle: 30
};

type AddFavoriteIconProps = {
  state?: 'hover' | 'active' | 'default';
  size?: 'small' | 'middle';
};

export const AddFavoriteIcon = ({
  state = 'default',
  size = 'middle'
}: AddFavoriteIconProps) => {
  switch (state) {
    case 'hover': {
      return <img src={AddFavoriteHoverIcon} alt="" width={sizeIcon[size]} />;
    }
    case 'active': {
      return <img src={AddFavoriteActiveIcon} alt="" width={sizeIcon[size]} />;
    }
    default: {
      return <img src={AddFavoriteDefaultIcon} alt="" width={sizeIcon[size]} />;
    }
  }
};
