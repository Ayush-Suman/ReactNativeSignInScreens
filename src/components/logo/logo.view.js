import {Image, StyleSheet, Text, View} from "react-native";
import NSColors from "../../constants/colors";

const NewtonSchoolLogo = (prop) => {
    return (
        <View style={[prop.style, {flexDirection: "row"}]}>
            <Image style={styles.logo} source={require('./newtonschool.png')}/>
            <Text style={styles.newton}>Newton </Text>
            <Text style={styles.school}>School</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        height: 24,
        width: 24
    },
    newton: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        color: NSColors.black,
        marginLeft: 12
    },
    school: {
        fontFamily: 'Inter-Medium',
        fontSize: 16,
        color: NSColors.black
    },
});

export default NewtonSchoolLogo;
