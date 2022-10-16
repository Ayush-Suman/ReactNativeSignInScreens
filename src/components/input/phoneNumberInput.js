import {Image, StyleSheet, TextInput, View} from "react-native";
import NSColors from "../../constants/colors";
import {MediumText} from "../text";
import {useEffect, useState} from "react";

const PhoneNumberInput = ({style, phone, code, r, hasError=false, setError=()=>{}, onPhoneChange=()=>{}, onCodeChange=()=>{}}) => {

    const [borderColor, setBorderColor] = useState(NSColors.borderGrey);

    useEffect(()=>{
        if(hasError){
            setBorderColor(NSColors.errorRed)
        }else{
            setBorderColor(NSColors.borderGrey)
        }
    }, [hasError])

    return (
        <View style={[style, styles.view]}>
            <View style={[styles.input, {marginEnd: 8}]}>
                <MediumText style={styles.countryCode} fontSize={16}>+91</MediumText>
                <Image style={styles.down} source={require("../../img/down.png")}/>
            </View>
            <View style={[styles.input, {borderColor: borderColor, flex: 1}]}>
                <Image style={styles.phone} source={require("../../img/phone.png")}/>
                <TextInput
                    style={styles.phoneNumber}
                    keyboardType="number-pad"
                    ref={r}
                    onChangeText={onPhoneChange}
                    value={phone}
                    onFocus={()=>{
                        setError(false);
                        setBorderColor(NSColors.borderGrey)
                    }}
                    placeholder="7762961997"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        height: 50,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: NSColors.borderGrey,
        borderRadius: 8,
    },
    down: {
        marginEnd: 20,
        width: 11,
        height:6.5
    },
    countryCode: {
        margin: 12
    },
    phone: {
        height: 22,
        width: 14,
        marginStart: 17
    },
    phoneNumber: {
        flex: 1,
        marginHorizontal: 13,
        fontFamily: 'Switzer-Medium',
        fontSize: 16
    }
});

export default PhoneNumberInput;
