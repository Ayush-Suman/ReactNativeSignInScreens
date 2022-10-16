import {Image, View} from "react-native";
import {MediumText} from "./text";
import NSColors from "../constants/colors";

const Error = ({style, hasError, children})=>{
    if(hasError){
        return (<View style={[style, {flexDirection: "row", justifyContent:"center", alignSelf:"flex-start", alignItems:"center", marginHorizontal: 16}]}>
            <Image style={{height: 13, width: 13}} source={require("../img/error.png")}/>
            <MediumText color={NSColors.errorRed} fontSize={14} style={{marginStart: 4}}>{children}</MediumText>
        </View>);
    } else {
        return <View style={style}/>
    }
}

export default Error;
