import React, { useState, useCallback, useRef } from 'react';
import { Text, View, SafeAreaView ,Image} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const exampleItems = [
  {
    title: 'Add widget',
    text: 'Step1 : Tap and hold an empty space on home screen , you will see widgets option at the bottom of the screen',
    image: require('../../assests/widgetstep1.jpg')
  },
  {
    title: 'Add widget',
    text: 'Step2 : Tap the widgets icons to go to the widgets list.',
    image: require('../../assests/widgetstep2.jpg')
  },
  {
    title: 'Add widget',
    text: 'Step3 : Tap and hold any widget of Music Player, then drag it to an empty areaon a home screen.',
    image: require('../../assests/widgetstep1.jpg')
  },
  {
    title: 'Add widget',
    text: 'Step4 : The Music Player widget has been added to the home screen. ',
    image: require('../../assests/widgetstep2.jpg')
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
      <Text style={{ fontSize: 25,justifyContent:'center',alignSelf:'center',paddingRight:30 }}>{item.title}</Text>
      <Text>{item.text}</Text>
      {/* <Text>{item.image}</Text> */}
      <Image source={require('../../assests/widgetstep1.jpg')} style={{width:300,
        height:200,resizeMode:'contain',marginTop:30,}}></Image>
      
    </View>
  ), []);

  return (
    <SafeAreaView style={{ flex: 1,  paddingTop: 20 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center',}}>
        <Carousel
          layout="default"
          ref={ref}
         
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomCarousel;