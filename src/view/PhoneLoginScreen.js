import {SafeAreaView, StyleSheet, View} from "react-native";
import Header from "../components/header";
import {BoldText, MediumText} from "../components/text";
import {NextButton, SecondaryButton} from "../components/button/button";
import NSColors from "../constants/colors";
import PhoneNumberInput from "../components/input/phoneNumberInput";
import Terms from "../components/terms";
import {useRef, useState} from "react";
import Error from "../components/error";

const PhoneLoginScreen = ({ navigation }) => {

    const [isLoading, setLoadingState] = useState(false);
    const [phone, onPhoneChange] = useState(null);
    const [code, onCodeChange] = useState(91);
    const [hasError, setError] = useState(false);
    const ref = useRef();

    return (
      <SafeAreaView style={styles.view}>
          <Header navigation={navigation}/>
          <BoldText style={styles.text} fontSize={16}>Enter Mobile Number</BoldText>
          <PhoneNumberInput
              style={styles.input}
              phone={phone}
              r={ref}
              onPhoneChange={onPhoneChange}
              code={code}
              onCodeChange={onCodeChange}
              hasError={hasError}
              setError={setError}
          />
          <Error style={styles.error} hasError={hasError}>The phone number does not exist in our system. Please check again.</Error>
          <NextButton
              style={styles.button}
              isLoading={isLoading}
              onPress={async ()=>{
                  ref.current.blur();
                  setLoadingState((state)=>true);
                  // Fake await for network call
                  await function () {return new Promise(resolve => setTimeout(()=>{resolve('')}, 1000))}();
                  setLoadingState((state)=> false);
                  if(`${phone}`.length!==10){
                      setError(true)
                  } else {
                      navigation.navigate("OTPVerification", {code: code, number: phone});
                  }
              }}>Send OTP</NextButton>
          <View style={{flex: 1}}/>
          <View style={styles.or}>
              <View style={styles.horizontalRule}/>
              <MediumText color={NSColors.lightGrey}>OR</MediumText>
              <View style={styles.horizontalRule}/>
          </View>
          <SecondaryButton style={[styles.button, styles.emailButton]} iconSource={require('../img/email.png')} onPress={() => navigation.navigate("EmailLogin")}>Continue with Email</SecondaryButton>
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
    input: {
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
        alignSelf: "center"
    },
    emailButton: {
        marginBottom: 16
    },
    googleButton: {
        marginBottom: 4
    }
})

export default PhoneLoginScreen;
