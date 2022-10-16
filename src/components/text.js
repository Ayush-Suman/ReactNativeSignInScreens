import {StyleSheet, Text} from "react-native";
import NSColors from "../constants/colors";

const BoldText = ({children, style, fontSize, color}) => {
    return (
        <Text style={ [{color: color || NSColors.black, fontSize: fontSize}, style, styles.bold] }>{children}</Text>
    );
}

const SemiBoldText = ({children, style, fontSize, color}) => {
    return (
        <Text style={ [{color: color || NSColors.black, fontSize: fontSize}, style, styles.semiBold] }>{children}</Text>
    );
}

const MediumText = ({children, style, fontSize, color}) => {
    return (
        <Text style={ [{color: color || NSColors.black, fontSize: fontSize}, style, styles.medium] }>{children}</Text>
    )
}

const RegularText = ({children, style, fontSize, color}) => {
    return (
        <Text style={ [{color: color || NSColors.black, fontSize: fontSize}, style, styles.regular] }>{children}</Text>
    );
}

const styles = StyleSheet.create({
    bold: {
        fontFamily: 'Switzer-Bold'
    },
    semiBold: {
        fontFamily: 'Switzer-Semibold'
    },
    medium: {
        fontFamily: 'Switzer-Medium'
    },
    regular: {
        fontFamily: 'Switzer-Regular'
    }
});

export {
    BoldText,
    SemiBoldText,
    MediumText,
    RegularText
}
