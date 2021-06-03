import React from 'react';
import { SendMessage } from '../components/SendMessage';
import { IncomingMessage } from '../components/IncomingMessage';
import { OutgoingMessage } from '../components/OutgoingMessage';

export const Messages = () => {
  const msgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className='mesgs'>
      {/* <!-- Historia inicio --> */}
      <div className='msg_history'>
        {msgs.map((msg) => (msg % 2 ? <IncomingMessage key={msg} /> : <OutgoingMessage key={msg} />))}
      </div>
      {/* <!-- Historia Fin --> */}

      <SendMessage />
    </div>
  );
};