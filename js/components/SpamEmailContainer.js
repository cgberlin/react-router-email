import React from 'react'
import EmailList from './emailList'
import EMAILS from '../emails'

const SpamEmailContainer = (prop) => {return <EmailList emails={EMAILS.spam} whatType = 'spam' />};

export default SpamEmailContainer;
