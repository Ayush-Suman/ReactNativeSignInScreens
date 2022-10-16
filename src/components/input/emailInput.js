import {Image, StyleSheet, TextInput, View} from "react-native";
import NSColors from "../../constants/colors";
import {useEffect, useState} from "react";

const EmailInput = ({style, r, email, setEmail=()=>{}, hasError=false, setError=()=>{}}) => {
    const [borderColor, setBorderColor] = useState(NSColors.borderGrey);

    useEffect(()=>{
        if(hasError){
            setBorderColor(NSColors.errorRed)
        }else{
            setBorderColor(NSColors.borderGrey)
        }
    }, [hasError])

    return (
        <View style={[style, styles.input, {borderColor: borderColor}]}>
            <Image style={styles.email} source={require("../../img/email.png")}/>
            <TextInput
                style={styles.emailText}
                keyboardType="email-address"
                ref={r}
                onChangeText={setEmail}
                value={email}
                onFocus={()=>{
                    setError(false);
                    setBorderColor(NSColors.borderGrey)
                }}
                placeholder="ayush231suman@gmail.com"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        height: 50,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: NSColors.borderGrey,
        borderRadius: 8,
    },
    email: {
        height: 16,
        width: 20,
        marginStart: 14,
    },
    emailText: {
        flex: 1,
        marginHorizontal: 13,
        fontFamily: 'Switzer-Medium',
        fontSize: 16
    }
});

export default EmailInput;
