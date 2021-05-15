import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Colors from '../../config/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import SideBar from './sidebar';
import { useNavigation } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';

const Scan = () => {
  const [checkStatus1, setCheckStatus1] = useState(false);
  const [checkStatus2, setCheckStatus2] = useState(false);
  const [checkStatus3, setCheckStatus3] = useState(false);
  const [rightModalVisible, setRightModalVisible] = useState(false);
  const [text1, setText1] = useState('60');
  const [text2, setText2] = useState('50');
  const navigation = useNavigation();
  //   const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        height: '100%'
      }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <MaterialIcons
            name="arrow-back"
            size={20}
            color={'#fff'} />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Scan Library</Text>
          <TouchableOpacity onPress={() => setRightModalVisible(true)}>
            <Ionicons
              name="ios-settings-outline"
              size={25}
              color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
       <View style={{alignItems:'center', justifyContent:'center'}}>
       <View
          style={{ height: 300, alignItems: 'center', justifyContent: 'center' }}>
          {/* circleScan */}
          <View style={styles.circle}>
            <View style={styles.circle2}>
              <View style={styles.circle3}>
                <View style={styles.circle4}></View>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            color: '#fff',
            
            marginTop: 20,
            alignSelf: 'center',
          }}>
          {' '}
          Tracks: 19 Albums: 13 Artists: 9
        </Text>
        <View style={styles.checkBox}>
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
                <Text style={{ color: '#fff' }}>
                  Exclude songs less than{' '}
                </Text>
                <TextInput
                  onChangeText={(text1) => setText1(text1)}
                  defaultValue={text1}
                  style={styles.textfield}
                />
                <Text style={{  color: '#fff' }}>seconds</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
            checkStatus2 ? setCheckStatus2(false) : setCheckStatus2(true)
          }>
            <View style={styles.check}>
              <CheckBox
                left
                checked={checkStatus2}
                checkedColor={Colors.secondary}
                style={{ alignSelf: 'flex-start' }}
                textStyle={{ color: '#fff' }}

              />

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{  color: '#fff' }}>
                  Exclude songs less than{' '}
                </Text>
                <TextInput
                  onChangeText={(text2) => setText2(text2)}
                  defaultValue={text2}
                  style={styles.textfield}
                />
                <Text style={{  color: '#fff' }}>seconds</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              checkStatus3 ? setCheckStatus3(false) : setCheckStatus3(true)
            }>
            <View style={styles.check}>
              <CheckBox
                left
                checked={checkStatus3}
                checkedColor={Colors.secondary}
                style={{ alignSelf: 'flex-start' }}
              />
              <Text style={{ color: '#fff' }}>
                Exclude ringtone
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={{ color: '#fff', }}>Start Scan</Text>
          </View>
        </TouchableOpacity>
       </View>
      </ScrollView>

      {/* SideBar */}
      <View  >
        <Modal
          isVisible={rightModalVisible}
          style={{ margin: 0 }}
          backdropOpacity={0.3}
          animationIn={'slideInRight'}
          animationOut={'slideOutRight'}
          onBackdropPress={() => setRightModalVisible(false)}
          onBackButtonPress={() => setRightModalVisible(false)}


        >
          <View style={styles.sideModal}>

            <View style={styles.header}>
              <TouchableOpacity onPress={() => setRightModalVisible(false)}>
                <MaterialIcons
                  name="arrow-back"
                  size={20}
                  color={'#fff'} />
              </TouchableOpacity>
              <View style={styles.headerTitle}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Scan specified folder</Text>
              </View>
            </View>
            <SideBar />


          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  circle: {
    height: 200,
    width: 200,
    borderRadius: 200 / 2,
    borderColor: Colors.secondary,
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  circle2: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    borderColor: Colors.secondary,
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  circle3: {
    height: 100,
    width: 100,
    borderRadius: 150 / 2,
    borderColor: Colors.secondary,
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  circle4: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    borderColor: Colors.secondary,
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  check: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  checkBox: {
    width: '100%',
    marginTop: 10,
  },
  textfield: {
    height: 30,
    width: '12%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingVertical: 5,
    color: '#fff',
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
    marginBottom: 10
  },
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
  sideModal: {
    backgroundColor: Colors.primary,
    height: '100%',
    width: '100%'

  }
});
