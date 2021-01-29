import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CheckBox, Divider } from 'react-native-elements';
import Colors from '../../config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const SideBar = () => {
    const [checkStatus1, setCheckStatus1] = useState(false);
    const [checkStatus2, setCheckStatus2] = useState(false);
    const navigation = useNavigation();
    return (
        <View >
                 <View style={{height:'100%', width:'100%', backgroundColor:Colors.primary}}>
                 <View >
                        <Text style={{ color: '#fff', fontSize: 17, paddingHorizontal: 25, paddingVertical: 5 }}>/storage</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity onPress={() =>
                            checkStatus1 ? setCheckStatus1(false) : setCheckStatus1(true)
                        }>
                            <View style={styles.check}>
                                <CheckBox
                                    left
                                    checked={checkStatus1}
                                    checkedColor={Colors.secondary}
                                    style={{ alignSelf: 'flex-start' }}

                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={styles.folder}>
                                        <FontAwesome
                                            name="folder-open"
                                            size={25}
                                            color={'#fff'} />
                                    </View>
                                    <View style={styles.folderData}>
                                        <Text style={{ fontSize: 18, color: '#fff' }}>0</Text>
                                        <Text style={{ fontSize: 14, color: '#fff' }}>2 songs</Text>

                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{ marginHorizontal: 20, marginVertical: 5 }} />
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity onPress={() =>
                            checkStatus2 ? setCheckStatus2(false) : setCheckStatus2(true)
                        }>
                            <View style={styles.check}>
                                <CheckBox
                                    left
                                    checked={checkStatus2}
                                    checkedColor={Colors.secondary}
                                    style={{ alignSelf: 'flex-start' }}

                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={styles.folder}>
                                        <FontAwesome
                                            name="folder-open"
                                            size={25}
                                            color={'#fff'} />
                                    </View>
                                    <View style={styles.folderData}>
                                        <Text style={{ fontSize: 18, color: '#fff' }}>0000-79A7</Text>
                                        <Text style={{ fontSize: 14, color: '#fff' }}>17 songs</Text>

                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{ marginHorizontal: 20, marginVertical: 5 }} />
                     <View style={{width: '100%', position:'absolute', bottom:50, }}>
                     <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                            <View style={styles.button}>
                                <Text style={{ color: '#fff', fontSize: 18 }}>Start Scan</Text>
                            </View>
                        </TouchableOpacity>
                     </View>
                       
                    </View>
           
        </View>
    );
}

export default SideBar;

const styles = StyleSheet.create({
    header: {
        height: 55,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 10,
        width: '100%',
        paddingHorizontal: 20
    },
    headerTitle: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    check: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    folder: {
        width: 50,
        height: 50,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    folderData: {
        width: '80%',
        paddingHorizontal: 20
    },
    button: {
        width: 270,
        height: 45,
        borderWidth: 1,
        borderColor: Colors.secondary,
        alignSelf: 'center',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,


    },
});