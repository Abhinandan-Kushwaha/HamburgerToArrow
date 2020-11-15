import React from 'react';
import './index.css';

const HamBurgerToArrow = props => {
    let { visible, tintColor, size, thickness, id, speed } = props;
    id = id || '';
    speed = speed || 3;
    thickness = thickness || 2;
    const burgerClicked = () => {
        if (speed === 1) {
            document.getElementById("first" + id).className = visible ? "bar1s1" : "arrow1s1";
            document.getElementById("second" + id).className = visible ? "bar2s1" : "arrow2s1";
            document.getElementById("third" + id).className = visible ? "bar3s1" : "arrow3s1";
        }
        else if (speed === 2) {
            document.getElementById("first" + id).className = visible ? "bar1s2" : "arrow1s2";
            document.getElementById("second" + id).className = visible ? "bar2s2" : "arrow2s2";
            document.getElementById("third" + id).className = visible ? "bar3s2" : "arrow3s2";
        }
        else if (speed === 3) {
            document.getElementById("first" + id).className = visible ? "bar1s3" : "arrow1s3";
            document.getElementById("second" + id).className = visible ? "bar2s3" : "arrow2s3";
            document.getElementById("third" + id).className = visible ? "bar3s3" : "arrow3s3";
        }
        else if (speed === 4) {
            document.getElementById("first" + id).className = visible ? "bar1s4" : "arrow1s4";
            document.getElementById("second" + id).className = visible ? "bar2s4" : "arrow2s4";
            document.getElementById("third" + id).className = visible ? "bar3s4" : "arrow3s4";
        }
        else if (speed === 5) {
            document.getElementById("first" + id).className = visible ? "bar1s5" : "arrow1s5";
            document.getElementById("second" + id).className = visible ? "bar2s5" : "arrow2s5";
            document.getElementById("third" + id).className = visible ? "bar3s5" : "arrow3s5";
        }

        props.onPress();
    }
    return (
        <div
            className={size === 'small' ? "menuButtonContainer small" :
                size === 'medium' ? "menuButtonContainer medium" :
                    size === 'large' ? "menuButtonContainer" :
                        size === 'xtra-large' ? "menuButtonContainer xl" :
                            "menuButtonContainer"}
            onClick={burgerClicked}>
            <div id={"first" + id} className="bar" style={{ backgroundColor: tintColor || "white", height: thickness }} />
            <div id={"second" + id} className="bar" style={{ backgroundColor: tintColor || "white", height: thickness }} />
            <div id={"third" + id} className="bar" style={{ backgroundColor: tintColor || "white", height: thickness }} />
        </div>
    )
}

export default HamBurgerToArrow;