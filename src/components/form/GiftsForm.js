import React from 'react';

import { GiftsFormModal } from './GiftsFormModal';

export const GiftsForm = ({ handleAddGift }) => {
  return (
    <GiftsFormModal handleAddGift={handleAddGift} />
  )
}