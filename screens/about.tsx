import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import Image from 'react-native-scalable-image';

export default function HomeScreen() {
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <View style={{ backgroundColor: 'black', alignItems: 'center', height: '100%' }}>
        <Image width={Dimensions.get('window').width / 2} style={styles.RoundImg} source={require('../assets/dev-team.png')} />
        <View style={styles.Contents}>
          <Text style={styles.PhTitle}>O nas</Text>
          <Text style={styles.PhDesc}>Nasza grupka składa się z trójki studentów WSEI w Krakowie. Pomimo relacji edukacyjno-zawodowych, poza uczelnią kolaborujemy
          również nad wieloma projektami prywatnymi. W skład naszego zespołu wchodzą następujące osoby:</Text>
          <View style={styles.PersView}>
            <Image width={Dimensions.get('window').width / 5} style={styles.SmallRoundImg} source={require('../assets/miałcin.png')} />
            <View style={{flex: 1}}>
              <View style={styles.PersonHeader}>
                <Text style={styles.PhHeader}>Marcin Bębenek</Text>
                <Text style={styles.PhHeaderItalic}>(11524)</Text>
              </View>
              <Text style={styles.PersDesc}>"Od zawsze marzyłem, aby być kotem. Mama mi powtarzała, że jeżeli bardzo się postaram, to zostanę kim tylko będę chciał. Zmieniła jednak zdanie, gdy upolowałem i zjadłem mysz mieszkającą w naszej kuchni."</Text>
            </View>
          </View>
          <View style={styles.PersView}>
            <Image width={Dimensions.get('window').width / 5} style={styles.SmallRoundImg} source={require('../assets/kysia.png')} />
            <View style={{flex: 1}}>
              <View style={styles.PersonHeader}>
                <Text style={styles.PhHeader}>Joanna Przydatek</Text>
                <Text style={styles.PhHeaderItalic}>(11782)</Text>
              </View>
              <Text style={styles.PersDesc}>"Nya! Miałczę, liżę ludzi i turlam się po klawiaturze. Hobbistycznie rysuję i powoduję dyskomfort psychiczny u znajomych. Karma dla kotów jest niesmaczna."</Text>
            </View>
          </View>
          <View style={styles.PersView}>
            <Image width={Dimensions.get('window').width / 5} style={styles.SmallRoundImg} source={require('../assets/miałmian.png')} />
            <View style={{flex: 1}}>
              <View style={styles.PersonHeader}>
                <Text style={styles.PhHeader}>Damian Łoboda</Text>
                <Text style={styles.PhHeaderItalic}>(11705)</Text>
              </View>
              <Text style={styles.PersDesc}>"Ja tej chorej kociarni muszę kupować karmę ._."</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  PhText: {
    color: '#fff',
    fontFamily: 'Roboto'
  },
  PhDesc: {
    color: '#fff',
    fontFamily: 'Roboto',
    textAlign: 'center',
    margin: '3%'
  },
  PersView: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    marginTop: '10%'
  },
  PersDesc: {
    color: '#ababab',
    fontStyle: 'italic'
  },
  PhTitle: {
    color: '#fff',
    fontSize: 35,
    fontFamily: 'Roboto',
    alignSelf: 'center',
    margin: '2%'
  },
  PhHeader: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'normal'
  },
  PhHeaderItalic: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'normal',
    margin: '2%',
    fontStyle: 'italic'
  },
  RoundImg: {
    marginTop: '10%',
    marginBottom: '2.5%',
    borderRadius: 50000,
    borderColor: '#363636',
    borderWidth: 2,
    backgroundColor: '#1b1b1b'
  },
  SmallRoundImg: {
    margin: '5%',
    borderRadius: 50000,
    borderColor: '#363636',
    borderWidth: 2,
    backgroundColor: '#1b1b1b'
  },
  Contents: {
    backgroundColor: '#1b1b1b',
    borderWidth: 2,
    borderColor: '#363636',
    width: '90%'
  },
  PersonHeader: {
    flexDirection: 'row'
  }
});
