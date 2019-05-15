import usersReducer from './usersReducer';
import carsReducer from './carsReducer';
import detailModalReducer from './detailModalReducer';
import actualCarReducer from './actualCarReducer';

const mainReducer = (state, action) => {
  const { users, cars, showDetailModal, actualCarId } = state;

  return {
    ...state,
    users: usersReducer(users, action),
    cars: carsReducer(cars, action),
    showDetailModal: detailModalReducer(showDetailModal, action),
    actualCarId: actualCarReducer(actualCarId, action)
  };
};

export default mainReducer;
