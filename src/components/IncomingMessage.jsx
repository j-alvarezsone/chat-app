import React from 'react';
import { hourMonth } from '../helpers/hourMonth';

export const IncomingMessage = ({ msg }) => {
  return (
    <div className='incoming_msg'>
      <div className='incoming_msg_img'>
        <img src='/assets/user.png' alt='sunil' width='30px' height='30px' />
      </div>
      <div className='received_msg'>
        <div className='received_withd_msg'>
          <p>{msg.message}</p>
          <span className='time_date'>{hourMonth(msg.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};
