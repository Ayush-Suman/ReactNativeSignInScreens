import {RegularText} from "./text";
import {StyleSheet} from "react-native";
import NSColors from "../constants/colors";

const Terms = ()=> {
    return (
        <RegularText fontSize={12} style={styles.disclaimer}>By continuing, you agree to Newton School's{'\n'}
            <RegularText style={styles.clickableText}>Terms & Conditions </RegularText>
            and
            <RegularText style={styles.clickableText}> Privacy Policy</RegularText>
        </RegularText>
    );
}

const styles = StyleSheet.create({
    disclaimer: {
        margin: 20,
        textAlign: "center",
    },
    clickableText: {
        color: NSColors.blue,
    }
});

export default Terms;
