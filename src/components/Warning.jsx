import React from "react";
import { Dialog } from 'primereact/dialog';


function Warning(props){
    return (
        <div className="card flex justify-content-center">
            {/* <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}> */}
            <Dialog header="Header" visible={props.visible} style={{ width: '95vw' }} onHide={() => props.func}>
                <p className="m-0">
                    {props.text}
                </p>
            </Dialog>
        </div>
    )
}

export default Warning