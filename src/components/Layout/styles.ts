import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export default StyleSheet.create({
    fill: {
        flex: 1,
    },
    layout: {
        flex: 1,
        backgroundColor: colors.purple,
    },
    layoutBottom: {
        flex: 0,
        backgroundColor: colors.orange,
    }
});