import { useState } from 'react';
import SendMessageButton from './SendMessageButton';

const SendUIText = () => {

    const indexes = [0, 1, 2];
    const [index, setIndex] = useState(0);
    const [body, setBody] = useState("Body");

    const createJson = () => {
        const bodyJson = JSON.stringify({id: index, body: body});
        const generalJson = JSON.stringify({method: "UpdateUIText", body: bodyJson});
        return generalJson;
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label>
                <select onChange={(e) => setIndex(parseInt(e.currentTarget.value))}>
                    {indexes.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
            </label>
            <br/>
            <label>
                <input
                id="unity-message-body"
                onChange={(e) => setBody(e.currentTarget.value)}
                placeholder="Enter a name..."
                />
                <br/>
                <SendMessageButton json={createJson()}/>
            </label>
        </div>
    )
}

export default SendUIText;