import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextView, Button, TextInput, FlatList, Image } from 'react-native';
export default function App() {
  const [keyword, setKeyword] = useState('');
  const [imagePlace, setImage] = useState("");
  const [data, setData] = useState([]);
//API:lla kestää ikuisuus hakea dataa jostain syystä ja en saanut kuvaa näkyviin 
//(johtuen varmaan siitä kun sen API:n kanssa kesti niin kauan etsiä mitään)
  const fetchRepositories = () => {
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + keyword)  
  .then(response => response.json())  
  .then(data => setData(data.meals))  
  .catch(error => {  
   Alert.alert('Error', err);   });

}

  return (
    <View style={styles.container}>

<FlatList
      data={data}
      renderItem={({item}) =>
      <View>
        <Text style={{fontSize:18, fontWeight: "bold"}}>{item.strMeal}</Text>
        <Image
        style={styles.tinyImage}
        source={item.strMealThumb}
        />
        </View>

      }
      />

      <TextInput
      style={{fontSize: 18, width: 200}}
      placeholder='keyword'
      onChangeText={text => setKeyword(text)}
      />
      <StatusBar style="auto" />
      <Button 
      title="search"
      onPress={fetchRepositories}
      />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyImage: {
    width: 50,
    height: 50,
  },
});
