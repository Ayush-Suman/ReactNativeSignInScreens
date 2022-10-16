import {GestureDetector} from "react-native-gesture-handler/src/handlers/gestures/GestureDetector";
import {Gesture} from "react-native-gesture-handler";
import {ActivityIndicator, Dimensions, Image, StyleSheet, View} from "react-native";
import {SemiBoldText} from "../text";
import NSColors from "../../constants/colors";

const NextButton = ({children, style, isActive=true, isLoading= false, onPress=()=>{}}) => {



    const ButtonContent = () => {
        if (isLoading) {
            return (
                <View collapsable={false} style={[style, styles.nextbutton, isActive ? styles.buttonActive : styles.buttonInactive]}>
                    <ActivityIndicator color={NSColors.white} />
                </View>
            );
        } else {
            return (
                <View collapsable={false} style={[style, styles.nextbutton, isActive ? styles.buttonActive : styles.buttonInactive]}>
                    <SemiBoldText style={styles.text}>{children}</SemiBoldText>
                    <Image style={styles.icon} source={require('./right.png')} />
                </View>
            );
        }
    }


    return (
        <GestureDetector gesture={ Gesture.Tap().onStart(onPress) }>
            {ButtonContent()}
        </GestureDetector>
    )
}

const SecondaryButton = ({children, style, onPress=()=>{}, iconSource}) => {
    return (
        <GestureDetector gesture={Gesture.Tap().onStart(onPress)}>
            <View collapsable={false} style={[style, styles.secondaryButton]}>
                <Image style={styles.secondaryIcon} source={iconSource}></Image>
                <SemiBoldText style={styles.secondaryText}>{children}</SemiBoldText>
            </View>
        </GestureDetector>
    )
}

const styles = StyleSheet.create({
    nextbutton: {
        height: 48,
        width: Dimensions.get("window").width - 32,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonActive: {
        backgroundColor: NSColors.blue,
    },
    buttonInactive: {
        backgroundColor: NSColors.inactiveGrey
    },
    text: {
        color: NSColors.white,
        fontSize: 16,
        marginEnd: 16
    },
    icon: {
        height: 11,
        width: 6.5
    },
    secondaryButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("window").width - 32,
        borderWidth: 1,
        borderColor: NSColors.black,
        borderRadius: 8,
        height: 48
    },
    secondaryIcon: {
        height: 22,
        width: 20,
        resizeMode: "contain"
    },
    secondaryText: {
        fontSize: 16,
        marginStart: 10
    }
})

export {
    NextButton,
    SecondaryButton
}
