import {Image, StyleSheet, TextInput, View} from "react-native";
import NSColors from "../../constants/colors";
import {useEffect, useState} from "react";

const PasswordInput = ({style, r, password, setPassword=()=>{}, hasError=false, setError=()=>{}}) => {
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
            <Image style={styles.password} source={require("../../img/password.png")}/>
            <TextInput
                style={styles.passwordText}
                secureTextEntry={true}
                ref={r}
                onChangeText={setPassword}
                value={password}
                onFocus={()=>{
                    setError(false)
                    setBorderColor(NSColors.borderGrey)
                }}
                placeholder="password"
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
    password: {
        height: 21,
        width: 16,
        marginStart: 14,
    },
    passwordText: {
        flex: 1,
        marginHorizontal: 13,
        fontFamily: 'Switzer-Medium',
        fontSize: 16
    }
});

export default PasswordInput;
