import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView,Dimensions} from 'react-native';
import BoxContainer from '../../components/BoxContainer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal';
import colors from '../../config/colors';
import CustomCarousel from '../../screens/Widget/CustomCarousel';



export default function Widget({navigation}) {
    const [imagemodalVisible, setimageModalVisible] = useState(false);
    function image() {
        setimageModalVisible(false);
        setimageModalVisible(true);
  };

  const Width = Dimensions.get("window").width;
    const Height = Dimensions.get("window").height * 0.42;
  const [visible, setIsVisible] = useState(false);
  return (
      
    <View style={styles.container}>
        <ScrollView>

        <View>
     {/* image modal */}
                <Modal
                isVisible={imagemodalVisible}
                backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOutDown'}
                onBackdropPress={()=> setimageModalVisible(false)}
                  >
                     <View style={styles.blockModal}>
                     <MaterialIcons  style={{alignSelf:'flex-end'}} name="close" size={20} color="black" 
                     onPress={()=> setimageModalVisible(false)}
                     />
                       <CustomCarousel/>
                    
                     </View>
                    </Modal>
                 </View>  

    <View style={styles.headerContainer}>
    <TouchableOpacity onPress={()=> navigation.goBack(null)}>
    <MaterialIcons name="arrow-back" size={25} color="#fff" />
     </TouchableOpacity>
    <Text style={styles.mainStyle}>Widget</Text>
    </View>

     <View style={styles.page} >
         <TouchableOpacity onPress={ () => image()}> 
     <BoxContainer style={styles.container1} ></BoxContainer>
     <Image style={styles.imageWidget1} source={require('../../assets/widget1.jpg')} />
     <Text style={styles.containerText} >Widget 4 x 1</Text>
     </TouchableOpacity>
     
     <TouchableOpacity onPress={ () => image()}> 
     <BoxContainer style={styles.container2}></BoxContainer>
     <Image style={styles.imageWidget2} source={require('../../assets/widget2.jpg')}/>
      <Text style={styles.containerText1}>Widget 4 x 1</Text>
      </TouchableOpacity>
    </View>

        <View style={styles.page}>
        <TouchableOpacity onPress={ () => image()}> 
      <BoxContainer style={styles.container3}></BoxContainer>
      <Image style={styles.imageWidget3} source={require('../../assets/widget3.jpg')}/>
     <Text style={styles.containerText}>Widget 4 x 2</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={ () => image()}> 
      <BoxContainer style={styles.container4}></BoxContainer>
      <Image style={styles.imageWidget4} source={require('../../assets/widget4.jpg')}/>
      <Text style={styles.containerText1}>Widget 4 x 2</Text>
      </TouchableOpacity>
        </View>

        <View style={styles.page}>
        <TouchableOpacity onPress={ () => image()}> 
      <BoxContainer style={styles.container5}></BoxContainer>
      <Image style={styles.imageWidget5} source={require('../../assets/widget5.jpg')}/>
     <Text style={styles.containerText}>Widget 4 x 4</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={ () => image()}> 
      <BoxContainer style={styles.container6}></BoxContainer>
      <Image style={styles.imageWidget6} source={require('../../assets/widget6.jpg')}/>
      <Text style={styles.containerText1}>Widget List</Text>
      </TouchableOpacity>
        </View>

      

        </ScrollView>
      </View>

    
    );
    };

const styles = StyleSheet.create({
   container:{
    backgroundColor:colors.primary,
    height:'100%',
    justifyContent:'center',
    
   },
    page:{
       flexDirection:'row',
       alignSelf:'center',
  },

    container1: {
       backgroundColor: 'white',
       height : 180,
       width:150,
       opacity:0.1,
       borderRadius:10
        },

    container2: {
      backgroundColor: 'white',
      height : 180,
       width:160,
       opacity:0.1,
       borderRadius:10
      },

      container3: {
        backgroundColor: 'white',
        height : 180,
        width:160,
        opacity:0.1,
        borderRadius:10
         },
 
     container4: {
       backgroundColor: 'white',
       height : 180,
        width:160,
        opacity:0.1,
        borderRadius:10
       },

       container5: {
        backgroundColor: 'white',
        height : 180,
        width:160,
        opacity:0.1,
        borderRadius:10
        
         },
 
     container6: {
       backgroundColor: 'white',
       height : 180,
        width:160,
        opacity:0.1,
        borderRadius:10
       },

  imageWidget1:{
    position:'absolute',
    top:60,
    width:140,
   margin:20,
   resizeMode: 'contain',
   },

   imageWidget2:{
    position:'absolute',
    right:25,
    top:50,
    width:140,
    resizeMode: 'contain',
   },
   imageWidget3:{
    position:'absolute',
    top:60,
    left:30,
    resizeMode: 'contain',
    width:130,
    height:70,

   },

   imageWidget4:{
    position:'absolute',
    right:35,
    top:0,
    width:130,
    resizeMode: 'contain',
    
   },
   imageWidget5:{
    position:'absolute',
    top:0,
    width:80,
     left:50,
   resizeMode: 'contain',
   },

   imageWidget6:{
    position:'absolute',
    right:17,
    top:0,
    width:80,
    right:50,
    resizeMode: 'contain',
   },

  containerText:{
      color:'white',
    //   fontWeight:'bold',
      fontSize:16,
      position:'absolute',
      bottom:0,
      padding:30

  },
  containerText1:{
    color:'white',
    // fontWeight:'bold',
    fontSize:16,
    position:'absolute',
    right:50,
    bottom:0,
     padding:30
},
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    // height: 55 + StatusBarHeight,
    // backgroundColor: mainStyle.colors.primary,
    alignItems: 'center',
    // justifyContent: 'space-between',
    // paddingTop: StatusBarHeight,
    paddingLeft: 15
},
mainStyle:{
    color:'white',
    fontSize:20,
    padding:25
   },
   blockModal:{
    alignSelf:'center',
    justifyContent:'center',
    backgroundColor:'white',
    borderRadius:4,
    padding:30,
    width:'90%',
    height:500
  },
  effectText:{
    fontSize:20, 
    fontWeight:'bold',
    textAlign:'center'
  },
  modalText:{
    fontSize: 16,
     textAlign: 'justify',
     padding:10 
  },

});