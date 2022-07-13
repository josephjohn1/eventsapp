import {
  ActivityIndicator,
  Dimensions,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {
  getFamilyMovies,
  getPopularMovies,
  getPopularTv,
  getUpcomingMovies,
} from '../services/services';
import React, {useEffect, useState} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
import Error from '../components/Error';
//import HomeHeader from '../components/HomeHeader';
import SearchBar from 'react-native-dynamic-search-bar';
//import {data} from '../constants/data';
const dimensions = Dimensions.get('screen');

const Home = ({navigation}) => {
  const event = [
    {
      id: 1,
      date: '10',
      month: 'May',
      Time: '2020/11/21 09:10 PM',
    },
    {
      id: 2,
      date: '4',
      month: 'March',
      Time: '2020/09/11 11:10 AM',
    },
  ];
  const [moviesImages, setMoviesImages] = useState('');
  const [popularMovies, setPopularMovies] = useState('');
  

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
    ]);
  };
  useEffect(() => {
    getData()
      .then(
        ([
          UpcomingMovies,
          PopularMoviesData,
          PopularTvData,
          FamilyMoviesData,
        ]) => {
          const moviesImagesArray = [];
          UpcomingMovies.forEach(movie => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
            );
          });
          setMoviesImages(moviesImagesArray);
          setPopularMovies(PopularMoviesData);
          setPopularTv(PopularTvData);
          setFamilyMovies(FamilyMoviesData);
          setLoaded(true);
        },
      )
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.header}>
          <View>
            <Text style={{fontSize: 20}}>Tuesday, 3 May</Text>
            <Text style={{paddingBottom: 10, opacity: 0.5}}>
              Cologne Germany
            </Text>
          </View>
          <Image
            source={require('../assets/images/imga.png')}
            style={styles.date}></Image>
        </SafeAreaView>
        <SearchBar
          style={styles.container2}
          placeholder="Search Event"
          onChangeText={text => {
            console.log(text);
          }}
          onPress={() => alert('onPress')}
        />
        <View style={styles.con1}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Todays Event</Text>
        </View>
        <ScrollView style={styles.con1}>
          <View style={styles.sliderContainer}>
            <SliderBox
              style={{height: 180, width: 350, borderRadius: 20}}
              images={[
                require('../assets/images/e1.png'),
                require('../assets/images/e2.png'),
                require('../assets/images/event_2.png'),
              ]}
              dotStyle={styles.sliderStyle}
              sliderBoxHeight={dimensions.height / 2.5}
              autoplay={true}
              circleLoop={true}></SliderBox>
          </View>

          <View style={styles.carousel}>
            <List
              navigation={navigation}
              title="Events For You"
              style={{fontSize: 15}}
              content={popularMovies}></List>
          </View>

          <View style={styles.con1}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Popular Events
            </Text>
          </View>
          <View style={styles.sliderContainer}>
            <ImageBackground
              source={require('../assets/images/e1.png')}
              style={styles.image}>
              <View
                style={{
                  alignItems: 'flex-end',
                  marginHorizontal: 15,
                  marginVertical: 12,
                }}>
                <View style={styles.date2}>
                  <Text
                    style={{fontWeight: 'bold', color: 'black', fontSize: 30}}>
                    {event[0].date}
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      fontSize: 13,
                      opacity: 0.5,
                    }}>
                    {event[0].month}
                  </Text>
                </View>
              </View>

              <View style={{paddingLeft: 30, paddingVertical: 70}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  Event Name
                </Text>
                <Text style={{fontSize: 12}}>Dance and arts</Text>
              </View>
            </ImageBackground>
          </View>
          <View>
            <Text></Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    padding: 3,
    height: 0,
    borderRadius: 3,
  },
  view1: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  date: {
    height: 60,
    width: 50,
    borderRadius: 20,
  },
  con1: {
    padding: 12,
  },
  header: {
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  container: {
    justifyContent: 'space-between',
    backgroundColor: 'black',
    flex: 1,
  },

  container2: {
    alignItems: 'center',
    backgroundColor: '#666666',
  },
  
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 330,
    borderRadius: 20,
  },
  date2: {
    height: 60,
    width: 50,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

export default Home;
