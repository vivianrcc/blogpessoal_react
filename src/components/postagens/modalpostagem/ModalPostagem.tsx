import Popup from 'reactjs-popup';
import FormPostagem from '../formpostagem/FormPostagem';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css';

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='bg-pink-400 text-white py-1 px-3 '>
                        Novas  Postagems
                    </button>
                }
                modal
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;
