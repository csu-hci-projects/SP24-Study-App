import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex:           1,
        backgroundColor:'#fff',
        justifyContent: 'space-between',
    },
    chatContainer: {
        flex:   1,
        padding:10,
    },
    input: {
        height: 300, 
        borderColor: 'gray',
        borderWidth: 0.1,
        margin: 10,
        paddingLeft: 10, 
    },
    
    header: {
        backgroundColor:'#4a90e2',
        padding:        15,
        alignItems:     'center',
        justifyContent: 'center',
    },
    headerText: {
        color:     '#fff',
        fontSize:  20,
        fontWeight:'bold',
    },
    question: {
        fontSize:  18,
        fontWeight:'bold',
        padding:   10,
        textAlign: 'center',
    },
    choicesContainer: {
        marginVertical:10,
    },
    choiceButton: {
        backgroundColor:'#f0f0f0',
        padding:        10,
        borderRadius:   5,
        marginBottom:   10,
    },
    choiceText: {
        fontSize:16,
        color:   'black',
    },
    feedback: {
        fontSize:  16,
        fontWeight:'bold',
        color:     'red',
        padding:   10,
        textAlign: 'center',
    },
});