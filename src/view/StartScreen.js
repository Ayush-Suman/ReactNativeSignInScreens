import NewtonSchoolLogo from "../components/logo/logo.view";
import {Dimensions, Image, SafeAreaView, StyleSheet, View} from "react-native";
import {MediumText, SemiBoldText} from "../components/text";
import NSColors from "../constants/colors";
import {NextButton} from "../components/button/button";
import Terms from "../components/terms";

const StartScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.view}>
            <NewtonSchoolLogo style={styles.logo}/>
            <Image style={styles.preLogin} source={require('../img/preLogin.png')}/>
            <SemiBoldText fontSize={24} style={styles.getToKnow}>Get to know your batchmates</SemiBoldText>
            <MediumText fontSize={16} color={NSColors.grey} style={styles.connect}>
                Connect with your peers, mentors, and more, all from one place
            </MediumText>
            <View style={{flex: 1}}></View>
            <NextButton onPress={() => navigation.navigate('PhoneLogin')}>Sign In</NextButton>
            <Terms/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: NSColors.white,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        margin: 24,
    },
    preLogin: {
        resizeMode: "contain",
        maxWidth: Dimensions.get("window").width - 32,
        maxHeight: 245 / 328 * (Dimensions.get("window").width - 32)
    },
    getToKnow: {
        marginTop: 24,
        marginHorizontal: 16
    },
    connect: {
        textAlign: "center",
        marginTop: 16,
        marginHorizontal: 16,
        marginBottom: 56
    },


})

export default StartScreen;
