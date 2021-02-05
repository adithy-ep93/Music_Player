import React, { useState, useCallback, useRef } from 'react';
import { Text, View, SafeAreaView ,Image,StyleSheet} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const exampleItems = [
  {
    id:1,
    title: 'Add widget',
    text: 'Step1 : Tap and hold an empty space on home screen , you will see widgets option at the bottom of the screen',
    image: require('../../assets/widgetstep1.jpg'),
    
    
  },
  {
    id:2,
    title: 'Add widget',
    text: 'Step2 : Tap the widgets icons to go to the widgets list.',
    image: require('../../assets/widgetstep2.jpg')
  },
  {
    id:3,
    title: 'Add widget',
    text: 'Step3 : Tap and hold any widget of Music Player, then drag it to an empty areaon a home screen.',
    image: require('../../assets/widgetstep3.jpg')
  },
  {
    id:4,
    title: 'Add widget',
    text: 'Step4 : The Music Player widget has been added to the home screen. ',
    image: require('../../assets/widgetstep4.jpg')
  },
 
];


const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(({ item, index }) => (
    <View
      style={{
        // backgroundColor: 'white',
        // borderRadius: 15,
        // height: 300,
        // paddingTop: 10,
        // // marginLeft: 25,
        // // marginRight: 25,
      }}
    >
      <Text style={styles.CarouselTitle}>{item.title}</Text>
      <Text style={styles.CarouselText}>{item.text}</Text>
      <Image style={styles.CarouselImage} source={item.image}></Image>
      </View>
  ), []);

  return (
    <SafeAreaView style={{ flex: 1,}}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center',}}>
        <Carousel
          layout="default"
          ref={ref}
          data={carouselItems}
          sliderWidth={200}
          itemWidth={250}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
          slideStyle={{  }}
       
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomCarousel;

const styles=StyleSheet.create({
  CarouselTitle:{
     fontSize: 25,
     justifyContent:'center',
     alignSelf:'center',
     marginRight:20 
  },
  CarouselText:{
    marginTop:10,
   
  },
  CarouselImage:{
    height:300,
    resizeMode:'contain',
    justifyContent:'center',
    alignItems:'center',
      marginLeft:25,
      marginTop:20,
  }
});