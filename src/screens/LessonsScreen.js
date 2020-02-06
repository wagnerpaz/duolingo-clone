import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView, ScrollView} from 'react-navigation';

import {includeTabBarIcon} from '../components/TabBarIcon';

import useHeader from '../hooks/useHeader';
import LessonIcon from '../components/LessonIcon';

const LessonsScreen = ({navigation}) => {
    useHeader('lessons', navigation);

    return (
        <>
            <SafeAreaView style={styles.content}>
                <ScrollView>
                    <View style={styles.spacer}/>
                    <View style={styles.row}>
                        <LessonIcon iconFont="MaterialCommunityIcons" iconName="egg-easter" title="Introdução" level={5} progress={4/6}/>
                    </View>
                    <View style={styles.row}>
                        <LessonIcon iconFont="Entypo" iconName="chat" iconSize={40} title="Saudações" level={2} progress={2/5}/>
                        <View style={styles.spacer}/>
                        <LessonIcon iconFont="FontAwesome" iconName="plane" iconSize={45} title="Viagem" level={1} progress={1/6}/>
                    </View>
                    <View style={styles.row}>
                        <LessonIcon iconFont="MaterialCommunityIcons" iconName="hamburger" iconSize={45} title="Cafeteria" level={3} progress={4/5}/>
                        <View style={styles.spacer}/>
                        <LessonIcon iconFont="MaterialCommunityIcons" iconName="baby-buggy" iconSize={45} title="Famílias" level={4}/>
                    </View>
                    <View style={styles.row}>
                        <LessonIcon iconFont="MaterialIcons" iconName="store" title="Loja" level={2}/>
                        <View style={styles.spacer}/>
                        <LessonIcon iconFont="FontAwesome" iconName="book" iconSize={40} title="Estudos" level={0}/>
                        <View style={styles.spacer}/>
                        <LessonIcon iconFont="Entypo" iconName="briefcase" title="Ocupações" iconSize={40} level={0}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    content: {
        paddingTop: 80,
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    spacer: {
        width: 15,
        height: 15,
    }
});

LessonsScreen.navigationOptions = {
    ...includeTabBarIcon('book', 'green'),
};

export default LessonsScreen;