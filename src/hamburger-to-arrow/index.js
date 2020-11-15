import React from 'react';
import './index.css';

const HamburgerToArrow = props => {
    let { burgerOpen, onPress, tintColor, size, thickness, id, speed } = props;
    id = id || '';
    burgerOpen = burgerOpen || false;
    speed = speed || 3;
    thickness = thickness || 2;
    const burgerClicked = () => {
        if (speed === 1) {
            document.getElementById("first" + id).className = burgerOpen ? "bar1s1" : "arrow1s1";
            document.getElementById("second" + id).className = burgerOpen ? "bar2s1" : "arrow2s1";
            document.getElementById("third" + id).className = burgerOpen ? "bar3s1" : "arrow3s1";
        }
        else if (speed === 2) {
            document.getElementById("first" + id).className = burgerOpen ? "bar1s2" : "arrow1s2";
            document.getElementById("second" + id).className = burgerOpen ? "bar2s2" : "arrow2s2";
            document.getElementById("third" + id).className = burgerOpen ? "bar3s2" : "arrow3s2";
        }
        else if (speed === 3) {
            document.getElementById("first" + id).className = burgerOpen ? "bar1s3" : "arrow1s3";
            document.getElementById("second" + id).className = burgerOpen ? "bar2s3" : "arrow2s3";
            document.getElementById("third" + id).className = burgerOpen ? "bar3s3" : "arrow3s3";
        }
        else if (speed === 4) {
            document.getElementById("first" + id).className = burgerOpen ? "bar1s4" : "arrow1s4";
            document.getElementById("second" + id).className = burgerOpen ? "bar2s4" : "arrow2s4";
            document.getElementById("third" + id).className = burgerOpen ? "bar3s4" : "arrow3s4";
        }
        else if (speed === 5) {
            document.getElementById("first" + id).className = burgerOpen ? "bar1s5" : "arrow1s5";
            document.getElementById("second" + id).className = burgerOpen ? "bar2s5" : "arrow2s5";
            document.getElementById("third" + id).className = burgerOpen ? "bar3s5" : "arrow3s5";
        }

        onPress();
    }
    return (
        <div
            className={size === 'small' ? "menuButtonContainer small" :
                size === 'medium' ? "menuButtonContainer medium" :
                    size === 'large' ? "menuButtonContainer" :
                        size === 'xtra-large' ? "menuButtonContainer xl" :
                            "menuButtonContainer"}
            onClick={burgerClicked}>
            <div id={"first" + id} className="bar" style={{ backgroundColor: tintColor || "white", height: thickness, borderRadius: thickness / 2 }} />
            <div id={"second" + id} className="bar" style={{ backgroundColor: tintColor || "white", height: thickness, borderRadius: thickness / 2 }} />
            <div id={"third" + id} className="bar" style={{ backgroundColor: tintColor || "white", height: thickness, borderRadius: thickness / 2 }} />
        </div>
    )
}

export default HamburgerToArrow;