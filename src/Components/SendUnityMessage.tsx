import GenerateObj from './GenerateObj';
import SendUIText from './SendUIText';

const SendUnityMessage = () => {
    return (
        <div>
            <h2>UI更新</h2>
            <SendUIText/>

            <hr />
            <h2>オブジェクト生成</h2>
            <GenerateObj/>
        </div>
    )
}

export default SendUnityMessage;