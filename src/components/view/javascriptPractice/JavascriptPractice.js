import React, { Component } from 'react'
import OtpInput from 'react-otp-input';


function getCodeBoxElement(index) {
    return document.getElementById('codeBox' + index);
}
function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;
    if (getCodeBoxElement(index).value.length === 1) {
        if (index !== 4) {
            getCodeBoxElement(index + 1).focus();
        } else {
            getCodeBoxElement(index).blur();
            // Submit code
            console.log('submit code ');
        }
    }
    if (eventCode === 8 && index !== 1) {
        getCodeBoxElement(index - 1).focus();
    }
}
function onFocusEvent(index) {
    for (let item = 1; item < index; item++) {
        const currentElement = getCodeBoxElement(item);
        if (!currentElement.value) {
            currentElement.focus();
            break;
        }
    }
}

    
    // onKeyPress(evt) {
    //     var charCode = (evt.which) ? evt.which : event.keyCode
    //     if (charCode > 31 && (charCode < 48 || charCode > 57))
    //         return false;
    //
    //     return true;
    // }

export class JavascriptPractice extends Component {
    state = { otp: "0" };

    onKeyPress(e) {
    
        console.log(e,"erwefdssssssssss")
        e = e || window.event;
        var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
        var charStr = String.fromCharCode(charCode);
    
        if (!charStr.match( /^\d{1,5}(\.\d{1,2})?$/))
            e.preventDefault();
     }
     
    handleChange = otp => this.setState({ otp });

    render() {
        return (
            <div className="body-container-wrapper">

                <section>
                    <form>
                        <input id="codeBox1" type="text" onKeyPress={this.onKeyPress.bind(this)} placeholder="0" maxlength="1" onKeyUp={(event)=>onKeyUpEvent(1, event)}  onFocus={() => onFocusEvent(1)}  />-
                        <input id="codeBox2" type="text" placeholder="0" maxlength="1" onKeyUp={(event)=>onKeyUpEvent(2, event)}  onFocus={() =>onFocusEvent(2)}  />-
                        <input id="codeBox3" type="text" placeholder="0" maxlength="1" onKeyUp={(event)=>onKeyUpEvent(3, event)}  onFocus={() =>onFocusEvent(3)}  />-
                        <input id="codeBox4" type="text" placeholder="0" maxlength="1" onKeyUp={(event)=>onKeyUpEvent(4, event)}  onFocus={() =>onFocusEvent(4)}  />
                    </form>
                </section>



            </div>
        )
    }
}

export default JavascriptPractice

