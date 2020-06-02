import * as React from 'react';
import { StyleSheet,Text,Dimensions, View, ScrollView } from 'react-native';
import Image from 'react-native-scalable-image';

export default function HomeScreen() {
  return (
    <ScrollView style={{ backgroundColor: 'black'}}>
    <View style={{width: '100%',marginTop: 20, backgroundColor:'#1B1B1B'}}>
      <Image width={Dimensions.get('window').width / 2} source={require('../assets/ph_logo.png')} />
    </View>  
      <View style={styles.PhTxt}>
      <Text style={styles.PhTitle}>Witaj użytkowniku!</Text>
      <Text style={styles.PhText}>Właśnie odważyłeś się zapuścić w czeluści naszej aplikacji. Fajnie, nie?</Text>
      <Text></Text>
      <Text style={styles.PhText}>Zanim zaczniesz używać tej aplikacji, proszę przeczytaj tekst na tej stronie. Pomoże ci on zrozumieć, co, jak i dlaczego.</Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.PhText}>Łudzące podobieństwo naszej aplikacji do pewnej strony z "edukacyjnymi filmami przyrodniczymi dla publiki we wczesno-średnim poziomie wtajemniczenia" jest jedynie akcentem humorystycznym. Szerzenie tej kwestionowalnej "wiedzy" nie jest naszym celem.</Text>
      <Text></Text>
      <Text style={styles.PhText}>W drugiej karcie tej aplikacji znajduje się jej serce - galeria. Aby w pełni wykorzystać jej potencjał, zalecane jest korzystanie z filtrów oraz "ulubionych".</Text>
      <Text></Text>
      <Text style={styles.PhText}>Aby z bliska obejrzeć grafikę w galeri, należy na nią krótko kliknąć. Wyświetli się powiększona wersja tej grafiki wraz ze sparowanymi z nią tagami.</Text>
      <Text></Text>
      <Text style={styles.PhText}>Filtry (aka tagi) są dostępne w zakładce galeria, gdy przemieści się gestem na ekran po lewej. Ukazuje się wtedy lista wszystkich dostępnych tagów, które można wybrać klikając w interesującą nas pozycję i zaznaczając checkbox obok niej. Po zakończeniu wybierania należy wcisnąć przycisk "LOAD", na dole strony. W wyniku takiego wyboru pojawią się tylko grafiki zawierające wybrane tagi.</Text>
      <Text></Text>
      <Text style={styles.PhText}>Diclaimer: Tagi celowo mają sugestywny wydźwięk.</Text>
      <Text></Text>
      <Text style={styles.PhText}>Ulubione znajdują się w galeri, ekran po prawej. Aby dodać jakiś obrazek do ulubionych, należy go przytrzymać w podglądzie galeri, aż się podświetli. W ten sam sposób można go usunąć z ulubionych.</Text>
      <Text></Text>
      <Text style={styles.PhText}>Na trzeciej zakładce - O nas - znajdują się opis naszej grupy oraz krótkie i nie do końca poważne "komentarze twórców".</Text>
      <Text></Text>
      <Text style={styles.PhText}>Na koniec, przede wszystkim, miłego korzystania z naszej aplikacji! Mamy nadzieję, że ten projekt spodoba się tak bardzo, jak bardzo podobał się nam.</Text>
      <Text></Text>
      <Text style={styles.PhText}>W tą aplikację zostało włożone sporo serca, łez, potu, krwi oraz paru (wielu) niecenzuralnych słów ze strony naszego najbardziej utalentowanego członka zespołu. Hope You'll like that!</Text>
      <Image width={Dimensions.get('window').width / 2} source={require('../assets/emoji.png')} style={{marginLeft: 100}} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    PhText: {
      color: '#fff',
      fontSize: 18,
    },
    PhTitle: {
      color: '#fff',
      fontSize: 30,
      margin: 50
    },
    PhTxt: {
      padding: 20,
    }
  });