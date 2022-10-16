import {Image, StyleSheet, View} from "react-native";
import NewtonSchoolLogo from "./logo/logo.view";
import {GestureDetector} from "react-native-gesture-handler/src/handlers/gestures/GestureDetector";
import {Gesture} from "react-native-gesture-handler";

const Header = ({navigation}) => {
    return (
        <View style={styles.view}>
            <GestureDetector gesture={Gesture.Tap().onEnd(()=>{navigation.pop()})}><View collapsable={false} style={styles.backArea}><Image style={styles.back} source={require('../img/left.png')}/></View></GestureDetector>
            <NewtonSchoolLogo style={styles.logo}/>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row", marginHorizontal: 4, alignItems: "center"
    },
    backArea: {
        padding: 16
    },
    back: {
        height: 12.6,
        width: 7.2
    },
    logo: {
        marginHorizontal: 12
    }
});

export default Header;
