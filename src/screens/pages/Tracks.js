import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const Tracks = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => <ActionBarImage />,
        });
      }, [navigation]);
    

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Home{'\n'}(You are on FirstPage)
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SecondPage')
            }>
            <Text>Go to settng Tab</Text>
          </TouchableOpacity>
        </View>
    
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default Tracks;