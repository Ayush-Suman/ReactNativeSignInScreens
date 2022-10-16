import Header from "../components/header";
import {BoldText, MediumText, SemiBoldText} from "../components/text";
import {SafeAreaView, StyleSheet, View} from "react-native";
import NSColors from "../constants/colors";
import {GestureDetector} from "react-native-gesture-handler/src/handlers/gestures/GestureDetector";
import {Gesture} from "react-native-gesture-handler";
import {useEffect, useState} from "react";
import Terms from "../components/terms";
import OtpInput from "../components/input/otpInput";
import Error from "../components/error";

const OTPVerificationScreen = ({route, navigation}) => {
    const { code, number } = route.params;

    const [timeLeft, setTimeLeft] = useState(59);
    const [hasError, setError] = useState(false);

    useEffect(() => {setInterval(()=> setTimeLeft((time) => time > 0 ? time-1 : 0), 1000)}, []);

    const ResendOTP = ({time}) => {
        if (time > 0) {
            return <MediumText style={styles.resendOTP} color={NSColors.grey} fontSize={14}>Resend OTP in {timeLeft}sec</MediumText>
        } else {
            return <GestureDetector gesture={Gesture.Tap().onStart(()=>{setTimeLeft((time)=>59)})}><View collapsable={false}><MediumText style={styles.resendOTP} color={NSColors.blue} fontSize={14}>Resend OTP</MediumText></View></GestureDetector>
        }
    }

    return (
        <SafeAreaView style={styles.view}>
            <Header navigation={navigation}/>
            <BoldText style={styles.text} fontSize={16}>Enter OTP sent to +{code} {number}</BoldText>
            <GestureDetector gesture={Gesture.Tap().onStart(()=>navigation.pop())}>
                <View style={{paddingVertical: 8, paddingHorizontal: 16}}>
                    <SemiBoldText color={NSColors.blue} fontSize={14}>CHANGE NUMBER</SemiBoldText>
                </View>
            </GestureDetector>
            <OtpInput
                style={styles.otpInput}
                hasError={hasError}
                setError={setError}
                onSubmit={(otp)=>{
                    if(otp!=="1234" && otp!=="1111") {
                        setError(true)
                    }
                }}/>
            <Error style={styles.error} hasError={hasError}>The OTP you entered is wrong, please recheck.</Error>
            <ResendOTP time={timeLeft} />
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
        marginBottom: 16
    },
    otpInput: {
        marginTop: 16,
        marginHorizontal: 16,
        marginBottom: 4
    },
    resendOTP: {
        marginHorizontal: 16
    }
});

export default OTPVerificationScreen;
