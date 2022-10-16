import {StyleSheet, TextInput, View} from "react-native";
import NSColors from "../../constants/colors";
import {useEffect, useRef, useState} from "react";

const DigitInput = ({digit, setDigit, r, onFocus, onKeyPress, hasError=false}) => {

    const [borderColor, setBorderColor] = useState(NSColors.borderGrey);

    useEffect(()=>{
        if(hasError){
            setBorderColor(NSColors.errorRed)
        }else{
            setBorderColor(NSColors.borderGrey)
        }
    }, [hasError])

    return (
    <View style={[styles.input, {borderColor: borderColor}]}>
        <TextInput
            maxLength={1}
            value={digit}
            cursorColor={NSColors.blue}
            style={styles.digit}
            ref={r}
            onBlur={()=>{
                setBorderColor(NSColors.borderGrey);
            }}
            onFocus={()=>{
                onFocus();
                setBorderColor(NSColors.blue);
            }}
            onChangeText=
                {(text)=>{
                    if(text===""){
                        setDigit(null);
                    }else if(text.length===1){
                        setDigit(parseInt(text))
                    }
                }}
            onKeyPress={onKeyPress}
            keyboardType={"number-pad"}
            placeholder="0"
        />
    </View>
    );
}

const OtpInput = ({ style, onSubmit, hasError, setError=()=>{} }) => {

    const [digit1, setDigit1] = useState(null);
    const [digit2, setDigit2] = useState(null);
    const [digit3, setDigit3] = useState(null);
    const [digit4, setDigit4] = useState(null);

    let i1 = "";
    if(digit1!==null){
        i1 = `${digit1}`
    }
    let i2 = "";
    if(digit2!==null){
        i2 = `${digit2}`
    }
    let i3 = "";
    if(digit3!==null){
        i3 = `${digit3}`
    }
    let i4 = "";
    if(digit4!==null){
        i4 = `${digit4}`
    }

    let i = `${i1}${i2}${i3}${i4}`;
    console.log(i);

    const onFocus = (ref1, ref2, ref3, ref4) => {
        setError(false)
        switch(i.length){
            case 0:
                ref1.current.focus();
                break;
            case 1:
                ref2.current.focus();
                break;
            case 2:
                ref3.current.focus();
                break;
            case 3:
                ref4.current.focus();
                break;
            case 4:
                ref4.current.focus();
                break;
        }
    };

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();

    useEffect(()=>{
        console.log("effect");
        switch(i.length){
            case 0:
                ref1.current.focus();
                if(digit1!==null) setDigit1(null)
                if(digit2!==null) setDigit2(null)
                if(digit3!==null) setDigit3(null)
                if(digit4!==null) setDigit4(null)
                break;
            case 1:
                ref2.current.focus();
                if(digit1!==parseInt(i.charAt(0))) setDigit1(parseInt(i.charAt(0)))
                if(digit2!==null) setDigit2(null)
                if(digit3!==null) setDigit3(null)
                if(digit4!==null) setDigit4(null)
                break;
            case 2:
                ref3.current.focus();
                if(digit1!==parseInt(i.charAt(0))) setDigit1(parseInt(i.charAt(0)))
                if(digit2!==parseInt(i.charAt(1))) setDigit2(parseInt(i.charAt(1)))
                if(digit3!==null) setDigit3(null)
                if(digit4!==null) setDigit4(null)
                break;
            case 3:
                ref4.current.focus();
                if(digit1!==parseInt(i.charAt(0))) setDigit1(parseInt(i.charAt(0)))
                if(digit2!==parseInt(i.charAt(1))) setDigit2(parseInt(i.charAt(1)))
                if(digit3!==parseInt(i.charAt(2))) setDigit3(parseInt(i.charAt(2)))
                if(digit4!==null) setDigit4(null)
                break;
            case 4:
                ref4.current.focus();
                if(digit1!==parseInt(i.charAt(0))) setDigit1(parseInt(i.charAt(0)))
                if(digit2!==parseInt(i.charAt(1))) setDigit2(parseInt(i.charAt(1)))
                if(digit3!==parseInt(i.charAt(2))) setDigit3(parseInt(i.charAt(2)))
                if(digit4!==parseInt(i.charAt(3))) setDigit4(parseInt(i.charAt(3)))
                onSubmit(i);
                break;
        }
    }, [digit1, digit2, digit3, digit4])

    return (
        <View style={[style, styles.view]}>
            <DigitInput
                digit={digit1}
                setDigit={setDigit1}
                r={ref1}
                hasError={hasError}
                onFocus={()=> onFocus(ref1, ref2, ref3, ref4)}/>
            <DigitInput
                digit={digit2}
                setDigit={setDigit2}
                r={ref2}
                hasError={hasError}
                onFocus={() => onFocus(ref1, ref2, ref3, ref4)}
                onKeyPress={({nativeEvent: {key, keyValue}})=>{
                    if(key==="Backspace"){
                        if(digit2===null){
                            ref1.current.focus();
                            setDigit1(null);
                        }
                    }
                }}
            />
            <DigitInput
                digit={digit3}
                setDigit={setDigit3}
                r={ref3}
                hasError={hasError}
                onFocus={()=> onFocus(ref1, ref2, ref3, ref4)}
                onKeyPress={({nativeEvent: {key, keyValue}})=>{
                    if(key==="Backspace"){
                        if(digit3===null){
                            ref2.current.focus();
                            setDigit2(null);
                        }
                    }
                }}
            />
            <DigitInput
                digit={digit4}
                setDigit={setDigit4}
                r={ref4}
                hasError={hasError}
                onFocus={()=> onFocus(ref1, ref2, ref3, ref4)}
                onKeyPress={({nativeEvent: {key, keyValue}})=>{
                    if(key==="Backspace"){
                        if(digit4===null){
                            ref3.current.focus();
                            setDigit3(null);
                        }
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
      flexDirection: "row",
        marginHorizontal: 12
    },
    input: {
        marginHorizontal: 4,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 44,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 8,
    },
    digit: {
        fontSize: 16,
        color: NSColors.blue,
        fontFamily: "Switzer-Medium"
    }
});

export default OtpInput
