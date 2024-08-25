interface SendMessageButtonProps {
  json: string
}

const SendMessageButton: React.FC<SendMessageButtonProps> = (props) => {
  const sendMessage = () => {
    fetch('http://localhost:8080/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: props.json
    })
    .then(response => response.text())
    .then(data => {
      console.log('Response from Unity:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default SendMessageButton;
