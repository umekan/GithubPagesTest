import "../App.css";
import { useState } from 'react';
import SendMessageButton from './SendMessageButton';
import { SketchPicker } from 'react-color';

const GenerateObj = () => {
    const objects = ["Cube", "Sphere", "Capsule"];
    const [object, setObject] = useState("Cube");
    const [color, setColor] = useState("#ffffff");

    const createJson = () => {
        const bodyJson = JSON.stringify({objectType: object, color: color});
        const generalJson = JSON.stringify({method: "CreateObj", body: bodyJson});
        return generalJson;
    }

    return (
        <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label>
                <select onChange={(e) => setObject(e.currentTarget.value)}>
                    {objects.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
            </label>
            <br/>
            <label>
                <SketchPicker
                    color={color}
                    onChangeComplete={(color) => setColor(color.hex)}
                />
                <SendMessageButton json={createJson()}/>
            </label>
        </div>
    )
}

export default GenerateObj;