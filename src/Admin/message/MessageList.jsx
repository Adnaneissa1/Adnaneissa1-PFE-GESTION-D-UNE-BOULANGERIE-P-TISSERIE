import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/messages');
        setMessages(response.data.messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/messages');
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleReply = async (id) => {
    // handle reply logic
  };

  const handleRead = async (id) => {
    // handle read logic
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/messages/${id}`);
      setMessages(messages.filter(message => message.id !== id)); // Remove deleted message from state
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <div id='main' className="main container">
      <table className="table">
        <thead>
          <tr>
            <th>Contenu</th>
            <th>Type</th>
            <th>Statut</th>
            <th>Client</th>
            <th>Email du client</th>
            <th>Adresse du client</th>
            <th>Numéro de téléphone du client</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(message => (
            <tr key={message.id}>
              <td>{message.content}</td>
              <td>{message.type}</td>
              <td>{message.status}</td>
              <td>{message.client.user ? message.client.user.nom : 'Unknown'}</td>
              <td>{message.client.user ? message.client.user.email : 'Unknown'}</td>
              <td>{message.client.address}</td>
              <td>{message.client.phone_number}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleReply(message.id)}>Répondre</button>
                <button className="btn btn-info" onClick={() => handleRead(message.id)}>Marquer comme lu</button>
                <button className="btn btn-danger" onClick={() => handleDelete(message.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessageList;
