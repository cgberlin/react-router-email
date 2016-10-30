import React from 'react'
import EmailList from './emailList'
import EMAILS from '../emails'

const InboxEmailContainer = (props) => { return <EmailList emails={EMAILS.inbox} whatType = 'inbox' />};

export default InboxEmailContainer;
