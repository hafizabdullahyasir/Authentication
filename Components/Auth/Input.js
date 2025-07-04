import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Colors } from '../../constants/styles'


export default function Input({ label, keyboardType, onUpdateValue, value, isInvalid, secureTextEntry }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, isInvalid && styles.labelInvalid]}>{label}</Text>
            <TextInput
                style={[styles.input, isInvalid && styles.inputInvalid]}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                onChangeText={onUpdateValue}
                value={value}



            />




        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    label: {
        color: 'white',
        marginBottom: 4,
    },
    labelInvalid: {
        color: Colors.error500,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        fontSize: 16,
    },
    inputInvalid: {
        backgroundColor: Colors.error100,
    },
});