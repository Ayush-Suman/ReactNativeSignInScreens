import {SafeAreaView, StyleSheet, View} from "react-native";
import Header from "../components/header";
import {BoldText, MediumText} from "../components/text";
import {NextButton, SecondaryButton} from "../components/button/button";
import NSColors from "../constants/colors";
import Terms from "../components/terms";
import {useRef, useState} from "react";
import EmailInput from "../components/input/emailInput";
import PasswordInput from "../components/input/passwordInput";
import {GestureDetector} from "react-native-gesture-handler/src/handlers/gestures/GestureDetector";
import {Gesture} from "react-native-gesture-handler";
import Error from "../components/error";

const EmailLoginScreen = ({ navigation }) => {

    const [isLoading, setLoadingState] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasError, setError] = useState(false);
    const refEmail = useRef();
    const refPass = useRef();

    return (
        <SafeAreaView style={styles.view}>
            <Header navigation={navigation}/>
            <BoldText style={styles.text} fontSize={16}>Enter Email & Password</BoldText>
            <EmailInput r={refEmail} style={styles.emailInput} hasError={hasError} setError={setError} email={email} setEmail={setEmail}/>
            <PasswordInput r={refPass} style={styles.passwordInput} hasError={hasError} setError={setError} password={password} setPassword={setPassword}/>
            <Error style={styles.error} hasError={hasError}>Please enter a valid email and password</Error>
            <NextButton
                style={styles.button}
                isLoading={isLoading}
                onPress={async ()=>{
                    refEmail.current.blur();
                    refPass.current.blur();
                    setLoadingState((state)=>true);
                    // Fake await for network call
                    await function () {return new Promise(resolve => setTimeout(()=>{resolve('')}, 1000))}();
                    setLoadingState((state)=> false);
                    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if(!reg.test(email) || password.length<6){
                        setError(true)
                    } else {
                        // Login
                    }
                }}
            >Sign In</NextButton>
            <GestureDetector
                gesture={Gesture.Tap().onStart(()=>navigation.navigate("ForgotPassword"))}>
                <MediumText fontSize={14} color={NSColors.blue} style={{alignSelf: "center"}}>Forgot Password?</MediumText>
            </GestureDetector>
            <View style={{flex: 1}}/>
            <View style={styles.or}>
                <View style={styles.horizontalRule}/>
                <MediumText color={NSColors.lightGrey}>OR</MediumText>
                <View style={styles.horizontalRule}/>
            </View>
            <SecondaryButton style={[styles.button, styles.emailButton]} iconSource={require('../img/phone.png')} onPress={() => navigation.navigate("PhoneLogin")}>Continue with Phone</SecondaryButton>
            <SecondaryButton style={[styles.button, styles.googleButton]} iconSource={require('../img/google.png')}>Continue with Google</SecondaryButton>
            <Terms/>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: NSColors.white,
    },
    text: {
        marginHorizontal: 16,
        marginTop: 24,
        marginBottom: 16
    },
    emailInput: {
        marginBottom: 16
    },
    passwordInput: {
        marginBottom: 4
    },
    error: {
        marginBottom: 20
    },
    or: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 16
    },
    horizontalRule: {
        flex: 1,
        borderBottomColor: NSColors.lightGrey,
        borderBottomWidth: 1,
        marginHorizontal: 16
    },
    button: {
        alignSelf: "center",
        marginBottom: 28
    },
    emailButton: {
        marginBottom: 16
    },
    googleButton: {
        marginBottom: 4
    }
})

export default EmailLoginScreen;
