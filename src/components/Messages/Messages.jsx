import { useEffect, useState } from 'react';
import { slugify } from '../../lib/slugify';

const Messages = ({ messageType }) => {
  const [message, setMessage] = useState({});
  useEffect(() => {
    const storedMessages = localStorage.getItem('messages');
    const messages = storedMessages ? JSON.parse(storedMessages) : null;
    const message = messages.filter((msg) => slugify(msg.title) == messageType);
    setMessage(message[0]);
  }, []);
  return (
    <>
      {/* <div className='rts-campus-life mt--50'>
        <div className='container'>
          <div className='row'>
            <div className='campus-life'>
              <div className='text-center'>
                <h1 className='section-title'>{message.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='rts-faculty-details mt--30 mb--50'>
        <div className='container'>
          <div className='row'></div>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='faculty-image text-center mb--10'>
                <img
                  src={message.image}
                  alt='faculty image'
                  style={{
                    width: '300px',
                    aspectRatio: '1 / 1',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <div className='h5 mb-2 mt-5'>{message.name}</div>
                <div className='h5 mb-2'>{message.title}</div>
                <p className='text-center mb-2' style={{ fontWeight: 600 }}>Canadian University of Bangladesh</p>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='faculty-content-text ms-lg-5 mt-5 mt-lg-0 text-center' dangerouslySetInnerHTML={{ __html: message.description }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
