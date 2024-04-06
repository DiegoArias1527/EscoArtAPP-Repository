import React from "react";
import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>LOGIN</Text>
            <Text style={styles.subTitle}>Bienvenido</Text>
            <TextInput style={styles.textInput}
                placeholder="Correo"
            />

            <TextInput style={styles.textInput}
                placeholder="Contraseña"
                secureTextEntry={true}
            />

            <TouchableOpacity 
                    onPress={() => navigation.navigate("Home")}
                    style={styles.container2}>
                <Text style={styles.text2}>Iniciar Sesion</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                    onPress={() => navigation.navigate("Register")}
                    style={styles.text}>
                <Text style={[styles.text, {textDecorationLine: 'underline'}]}>¿No tienes una cuenta? Registrate</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 60,
        color: '#000',
        fontWeight: 'bold',
    },
    textInput: {
        padding: 10,
        paddingStart: 30,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 14,
        color: 'blue',
        marginTop: 20,
    },
    subTitle: {
        fontSize: 20,
        color: '#f1f1f1',
    },
    container2: {
        alignItems: "center",
        width: 200,
        marginTop: 100,
        width: "80%",
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      },
      text2: {
        fontSize: 14,
        color: "gray",
        fontWeight: "bold",
      },
});
    
export default LoginScreen;