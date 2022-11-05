import React, { useState } from "react";
import {
    SwitchContiner,
    SwitchWrapper,
    SwitchBGC,
    ButtonSwitch,
} from './Switch.elements';

const Switch = (props) => {

    const [position, setPosition] = useState(false);

    const changeMode = () => {
        if (props.theme === 'light') {
            props.setTheme('dark');
            changePosition();
        } else {
            props.setTheme('light');
            changePosition();
        }
    }

    const changePosition = () => {
        setPosition(!position);
    };

    return (
        <>
            <SwitchContiner>
                <SwitchWrapper>
                    <SwitchBGC>
                        <ButtonSwitch 
                            onClick={() => changeMode()}
                            position={position}    
                        ></ButtonSwitch>
                    </SwitchBGC>
                </SwitchWrapper>
            </SwitchContiner>
        </>
    )
};

export default Switch; 