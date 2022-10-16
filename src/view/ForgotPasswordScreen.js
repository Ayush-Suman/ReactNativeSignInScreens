import Header from "../components/header";
import {BoldText, MediumText} from "../components/text";
import {SafeAreaView, StyleSheet, View} from "react-native";
import NSColors from "../constants/colors";
import EmailInput from "../components/input/emailInput";
import {NextButton} from "../components/button/button";
import Terms from "../components/terms";
import {useRef, useState} from "react";
import Error from "../components/error";

const ForgotPasswordScreen = ({navigation}) => {
    const [isLoading, setLoadingState] = useState(false);
    const [email, setEmail] = useState("");
    const [hasError, setError] = useState(false);
    const refEmail = useRef();

    return (
        <SafeAreaView style={styles.view}>
            <Header navigation={navigation}/>
            <BoldText style={styles.text} fontSize={16}>Forgot Password?</BoldText>
            <MediumText style={styles.prompt} color={NSColors.grey} fontSize={14}>
                Enter your email address to receive a link to reset your password
            </MediumText>
            <EmailInput style={styles.email} r={refEmail} email={email} setEmail={setEmail} hasError={hasError} setError={setError}/>
            <Error style={styles.error} hasError={hasError}>Please enter a valid email</Error>
            <NextButton
                style={{alignSelf: "center"}}
                isLoading={isLoading}
                onPress={async ()=>{
                refEmail.current.blur();
                setLoadingState((state)=>true);
                // Fake await for network call
                await function () {return new Promise(resolve => setTimeout(()=>{resolve('')}, 1000))}();
                setLoadingState((state)=> false);
                const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!reg.test(email)){
                    setError(true)
                } else {
                    // sendEmail
                }
                }
            }>Send Email</NextButton>
            <View style={{flex: 1}}/>
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
        marginTop: 24
    },
    error: {
        marginBottom: 20
    },
    prompt: {
        margin: 16
    },
    email: {
        marginTop: 8,
        marginBottom: 4,
        marginHorizontal: 16
    },

});

export default ForgotPasswordScreen;
