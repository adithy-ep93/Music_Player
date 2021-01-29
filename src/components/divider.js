import React from 'react';
import {View } from 'react-native';
import {Divider} from 'react-native-elements';

const DividerTile = () =>{
    return(
        <View style={{width:'100%',height:10}}>
            <Divider style={{backgroundColor:'#DCDCDC',height:1,marginBottom:1}}
            />
        </View>
    );
}

export default DividerTile;