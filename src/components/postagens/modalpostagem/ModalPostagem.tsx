import Popup from 'reactjs-popup';
import FormPostagem from '../formpostagem/FormPostagem';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css';

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <div className="flex justify-center items-center min-h-4 w-60">
                        <button
                            className="bg-pink-400 text-white font-bold py-2.5 px-30 text-lg rounded-xl animate-pulse">
                            NEW_POST
                        </button>
                    </div>





                }
                modal
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;
