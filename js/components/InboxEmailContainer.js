import React from 'react'
import EmailList from './emailList'
import EMAILS from '../emails'

const InboxEmailContainer = (prop) => {return <EmailList emails={EMAILS.inbox} />};

export default InboxEmailContainer;
