import React, {useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from './ContactsProvider';

const ConversationsContext = React.createContext()

export function useConversations () {
    return useContext(ConversationsContext)
}

export const ConversationsProvider = ({children}) => {
    const [conversations, setConversations] = useLocalStorage('conversations', [])
    const {contacts} = useContacts()

    function createConversations(recipients){
        setConversations(prevConversations => {
            return [...prevConversations, {recipients, message:[]}]
        })
    }

    const formattedConversations = conversations.map(conversation => {
        const recipients = conversation.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient
            })
            const name = (contact && contact.name) || recipient
            return {id: recipient, name}
        })
        return { ...conversations, recipients }
    })

    const value = {
        conversations: formattedConversations,
        createConversations
    }

    return (
        <ConversationsContext.Provider value={value}>
            {children}
        </ConversationsContext.Provider>
    );
};
