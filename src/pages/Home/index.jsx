//styledComponents
import { Teste, InputTask, CancelEdit } from "./styles"

import { TextInput, TouchableOpacity, FlatList, View, Keyboard, Text, Image } from "react-native"

//Components
import { TaskList } from "../../components/TaskList"
import firebase from '../../firebaseConnection'


//useContext
import { useState, useContext, useEffect, useRef } from "react"
import { AuthContext } from "../../contexts/auth";

//ICON
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export const Home = () => {

    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([]);
    const [key, setKey] = useState('')

    const { user } = useContext(AuthContext)
    const inputRef = useRef(null)

    useEffect(() => {

        function getUser() {
            if (!user) {
                return;
            }
            firebase.database().ref('tarefas').child(user).once('value', (snapshot) => {
                setTasks([]);
                snapshot?.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        nome: childItem.val().nome
                    }
                    setTasks(oldTask => [...oldTask, data])
                })
            })
        }
        getUser();
    }, [user])

    // ADICIONAR TAREFAS
    function handleAdd() {
        if (newTask === '') {
            return;
        }

        //editar tarefa

        if (key !== '') {
            firebase.database().ref('tarefas').child(user).child(key).update({
                nome: newTask
            })
                .then(() => {
                    const taskIndex = tasks.findIndex(item => item.key === key);
                    let taskClone = tasks;
                    taskClone[taskIndex].nome = newTask

                    setTasks([...taskClone])
                })

            Keyboard.dismiss();
            setNewTask('');
            setKey('');
            return;
        }

        let tarefas = firebase.database().ref('tarefas').child(user);
        let chave = tarefas.push().key;

        tarefas.child(chave).set({
            nome: newTask,
        }).then(() => {
            const data = {
                key: chave,
                nome: newTask
            };

            setTasks(oldArray => [...oldArray, data])
        })

        Keyboard.dismiss();
        setNewTask('')
    }

    // DELETAR TAREFAS
    function handleDelete(key) {
        firebase.database().ref('tarefas').child(user).child(key).remove().then(() => {
            const findTask = tasks.filter(item => item.key !== key) //RETORNA TODO ITEM QUE TEM A CHAVE DIFERENTE DO KEY (ITENS NÃO EXCLUIDOS)
            setTasks(findTask)
        })
    }

    // EDITAR TAREFAS
    function handleEdit(data) {
        setKey(data.key)
        setNewTask(data.nome)
        inputRef.current.focus();

    }

    function cancelEdit() {
        setKey('');
        setNewTask('');
        Keyboard.dismiss();
    }

    return (
        <View style={{ backgroundColor: 'black', flex: 1 }}>
            {key.length > 0 && (
                <CancelEdit>
                    <TouchableOpacity onPress={cancelEdit}>
                        <AntDesign name="closecircleo" size={24} color="red" />
                    </TouchableOpacity>
                    <Text style={{ color: 'red' }}>Você está editando uma tarefa!</Text>
                </CancelEdit>
            )}

            <Teste>
                <InputTask
                    placeholder="O que vai fazer hoje?"
                    value={newTask}
                    onChangeText={(text) => setNewTask(text)}
                    ref={inputRef}
                />
                <TouchableOpacity onPress={handleAdd}>
                    <Entypo name="add-to-list" size={24} color="purple" />
                </TouchableOpacity>
            </Teste>

            <FlatList
                data={tasks}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <TaskList data={item} deleteItem={handleDelete} editItem={handleEdit} />
                )}
            />
            <Image
                source={require('../../../assets/to-do.png')}
            />
        </View>
    )
}