import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import './message.component.css'

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username == message.username;

  return (
    <div ref={ref} className={`message ${isUser && 'mssage__user'}`}>
      <div className="message__username">{!isUser && `${message.username || 'Unknown User'}`}</div>
      <Card className={isUser ? "mssage__userCard" : "mssage__guestCard"}>
         
        <CardContent>
          <Typography
            color="white"
            variant="h5"
            component="h2"
          >
          
          {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
})

export default Message;
