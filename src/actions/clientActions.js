export const saveReservation = reservation => {
  return {
    type: 'SAVE_RESERVATION',
    payload: reservation
  };
};
