import AddFavoriteVoteDefaultIcon from '../../../assets/icons/AddFavoriteVoteDefaultIcon.svg';
import AddFavoriteVoteHoverIcon from '../../../assets/icons/AddFavoriteVoteHoverIcon.svg';
import AddFavoriteVoteActiveIcon from '../../../assets/icons/AddFavoriteVoteActiveIcon.svg';

type AddFavoriteVoteIconProps = {
  state?: 'hover' | 'active' | 'default';
};

export const AddFavoriteVoteIcon = ({
  state = 'default'
}: AddFavoriteVoteIconProps) => {
  switch (state) {
    case 'hover': {
      return <img src={AddFavoriteVoteHoverIcon} alt="" />;
    }
    case 'active': {
      return <img src={AddFavoriteVoteActiveIcon} alt="" />;
    }
    default: {
      return <img src={AddFavoriteVoteDefaultIcon} alt="" />;
    }
  }
};
