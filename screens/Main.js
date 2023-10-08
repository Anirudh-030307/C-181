import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import {Camera} from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as FaceDetector from 'expo-face-detector';

export default class Main extends React.Component {

    constructor(props){
        super(props);   
        this.state = {
            hasCameraPermission : null,
            faces : [],
        };
    }

    componentDidMount() {
        Permissions.askAsync(Permissions.CAMERA).then(this.onCameraPermission)
    };

    onCameraPermission = (status) => {
        this.setState({ hasCameraPermission : status.status === 'granted' })
    };

    onFaceDetected = (faces) => {
        this.setState({ faces : faces })
    };

    onFaceDetectionError = (error) => {
        console.log(error)
    };

    render() {

        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View/>;
        }

        if (hasCameraPermission === false) {
            return (
                <View style={styles.container}>
                    <Text>NO ACESS TO CAMERA</Text>
                </View>
            );
        }

        console.log(this.state.faces);
        
        return(
          <View style={styles.container}>
            <SafeAreaView style={styles.SafeAreaView} />
            <View style={styles.heading}>
                <Text style={styles.titleText}>FRAPP</Text>
            </View>
          </View> 
        );
        
    }

    

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },

});