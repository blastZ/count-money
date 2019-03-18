import React from 'react';
import FoodIcon from '@material-ui/icons/RestaurantMenu';
import SnackIcon from '@material-ui/icons/Fastfood';
import TransportIcon from '@material-ui/icons/DirectionsBus';
import GameIcon from '@material-ui/icons/VideogameAsset';
import SalaryIcon from '@material-ui/icons/AccountBalanceWallet';
import DrinkIcon from '@material-ui/icons/LocalBar';
import MovieIcon from '@material-ui/icons/LocalMovies';

const IconList = ({ category }) => {
  switch (category) {
    case 'food':
      return <FoodIcon />;
    case 'transport':
      return <TransportIcon />;
    case 'game':
      return <GameIcon />;
    case 'salary':
      return <SalaryIcon />;
    case 'drink':
      return <DrinkIcon />;
    case 'snack':
      return <SnackIcon />;
    case 'movie':
      return <MovieIcon />;
    default:
      return <FoodIcon />;
  }
};

export default IconList;
