import React, {useEffect, useState, FC } from 'react';
import { ActivityIndicator, FlatList, Dimensions, Button, Text, View, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { CheckBox } from 'react-native-elements'
import { IState } from '../reducers';
import { IFavListReducer } from '../reducers/fasvListReducer';
import Image from 'react-native-scalable-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { createImageProgress } from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import {setNewElemTodoList} from '../actions/todoListActions';
import { ISingleElementList } from '../entities/favImgEl';


const LImage = createImageProgress(Image);


export default function Gallery() {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);
    const [isInDetails, setInDetails] = useState(false);
    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);
    const [cats, setCats] = useState([]);
    const [selectedCats, setSelectedCats] = useState([]);
    const [image, setImage] = useState({});
    let swipable:object = React.createRef();
    let list:object = React.createRef<FlatList>();

    makeRerquest('https://purrhub.lunari.se/list/devcat');
    makeCatRerquest('https://purrhub.lunari.se/categories');

    return (
        <View style={{ flex: 1, padding: 24, backgroundColor: "black" }}>
            {isInDetails ? (
                <View style={{ flex: 1, padding: 24, backgroundColor: "black" }}>
                    <TouchableWithoutFeedback onPress={() => { setInDetails(false) }}>
                        <View style={{ flexDirection: "row" }}>
                            <MaterialCommunityIcons name="chevron-left" color="orange" size={30} />
                            <Text style={{ color: "orange", fontSize: 23 }} >Back</Text>
                        </View>
                    </TouchableWithoutFeedback >
                    <ScrollView>
                        <LImage source={{ uri: `https://purrhub.lunari.se/img/${image.name}` }}
                            indicator={Progress.Pie}
                            indicatorProps={{
                                size: 80,
                                borderWidth: 0,
                                color: 'rgba(150, 150, 150, 1)',
                                unfilledColor: 'rgba(200, 200, 200, 0.2)',
                            }}
                            width={Dimensions.get('window').width / 1.37}
                            style={{ backgroundColor: "black", height: image.calculated_height / 1.5 }} />
                        <Text style={{ color: "orange", fontSize: 23 }} >Tags:</Text>
                        {category.map((elem)=>{
                            return(
                                <Text key={elem.key} style={{ color: "orange", fontSize: 23 }}>
                                    #{elem.name}
                                </Text>
                            )
                        })

                        }
                    </ScrollView>
                </View>
            ) : (
                    <Swipeable renderRightActions={ShowFavorities} renderLeftActions={drawMenu} ref={swipable} style={{ width: "100%" }}>
                        <View style={{ backgroundColor: "black", height: "100%" }}>
                            {isLoading ? <ActivityIndicator /> : (
                                <FlatList
                                    numColumns={3}
                                    maxToRenderPerBatch={30}
                                    data={data}
                                    renderItem={({ item }) => (
                                        <TouchableHighlight onPress={() => {
                                            setImage(item);
                                            let tempcat:object[] = [];
                                            let i = 0;
                                            (item.category as string[]).forEach(element => {
                                                tempcat.push({ "key": i.toString(), "name": element });
                                                i++;
                                            }); setCategory(tempcat); setInDetails(true)
                                        }} onLongPress={() => { toggleFav(item) }} underlayColor="orange" style={{ margin: 5 }}>
                                            <Image
                                                source={{ uri: `https://purrhub.lunari.se/thumb/${item.name}` }}
                                                width={Dimensions.get('window').width / 3.5}
                                            />
                                        </TouchableHighlight>
                                    )}
                                />
                            )}
                        </View>
                    </Swipeable>
                )}
        </View>
    );

    function makeRerquest(uri: string) {
        useEffect(() => {
            fetch(uri)
                .then((response) => response.json())
                .then((json) => setData(json))
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        }, []);
    }

    function makeCatRerquest(uri: string) {
        useEffect(() => {
            fetch(uri)
                .then((response) => response.json())
                .then((json) => setCats(json))
                .catch((error) => console.error(error))
        }, []);
    }

    type SetNewElemTodoList = ReturnType<typeof setNewElemTodoList>;

    function toggleFav(item:any) {
        console.log(item);
        dispatch<SetNewElemTodoList>(setNewElemTodoList(item as ISingleElementList
        ))
    }

    let dragcomp = false;
    function drawMenu() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "white", fontSize: 25 }}>Categories:</Text>
                    <MaterialCommunityIcons name="chevron-left" color="orange" size={30} style={{ left: 400 }} onPress={() => { swipable.current.close(); }} />
                </View>
                <FlatList
                    ref={list}
                    data={cats}
                    renderItem={({ item }) => (
                        <CheckBox
                            title={item.title}
                            checked={(selectedCats as Array<string>).includes(item.title)}
                            onPress={() => {
                                let temp: string[] = selectedCats;
                                if ((selectedCats as Array<string>).includes(item.title)) {
                                    temp = removefromArray(item.title, temp);
                                } else {
                                    temp.push(item.title)
                                }
                                setSelectedCats(temp);
                                console.log(temp);
                                (list as FlatList).current?.forceUpdate();
                            }}
                        />
                    )}
                >
                </FlatList>
                <Button title="Load" onPress={() => {
                    if (selectedCats.length != 0) {
                        setLoading(true);
                        fetch("https://purrhub.lunari.se/list/" + selectedCats.join("|"))
                            .then((response) => response.json())
                            .then((json) => setData(json))
                            .catch((error) => console.error(error))
                            .finally(() => setLoading(false));
                    }
                    (swipable as Swipeable).current.close();
                }} />
            </View>
        )
    }
    function closeswipable(){
        (swipable as Swipeable).current.close();
    }
    let userfav = [];
    function FavList(){
        const FavListState = useSelector<IState, IFavListReducer>(state => state.favList);
        return (
            <FlatList
            numColumns={3}
            data={FavListState.favList}
            renderItem={({ item }) => (
                <TouchableHighlight onPress={() => {
                    setImage(item);
                    closeswipable();
                    let tempcat: object[] = [];
                    let i = 0;
                    item.category.forEach(element => {
                        tempcat.push({ "key": i.toString(), "name": element });
                        i++;
                    }); setCategory(tempcat); setInDetails(true)
                }} onLongPress={() => { toggleFav(item) }} underlayColor="orange" style={{ margin: 5 }}>
                    <Image
                        source={{ uri: `https://purrhub.lunari.se/thumb/${item.name}` }}
                        width={Dimensions.get('window').width / 3.8}
                    />
                </TouchableHighlight>
            )}
        />
        )
    };
    function ShowFavorities() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row" }}>
                    <MaterialCommunityIcons name="chevron-left" color="orange" size={30} onPress={() => { swipable.current.close(); }} />
                    <Text style={{ color: "white", fontSize: 25 }}>Fav:</Text>
                </View>
                <FavList/>
            </View>
        )
    }
    function removefromArray(elem: string, array: Array<string>) {
        array.splice(array.indexOf(elem), 1);
        return array;
    }

}

