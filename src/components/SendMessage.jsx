import React from 'react';

export const SendMessage = () => {
  return (
    <form action=''>
      <div className='type_msg row'>
        <div className='input_msg_write col-sm-9'>
          <input type='text' className='write_msg' placeholder='Mensaje...' />
        </div>
        <div className='col-sm-3 text-center'>
          <button className='msg_send_btn mt-3' type='submit'>
            send
          </button>
        </div>
      </div>
    </form>
  );
};
