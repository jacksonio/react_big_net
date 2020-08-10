import {rerenderEntireTree} from "../render";

export const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi my name is Jack', likesCount: 999},
            { id: 2, message: 'lorem ipsum', likesCount: 123},
            { id: 3, message: 'It\'s my first post', likesCount: 1},
        ],
        newProfileText: ''
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        newMessageText: ''
    },
    sidebar: {
        friends: [
            {
                id: 1,
                name: 'Sasha',
                url: 'https://www.freepngimg.com/thumb/shape/30004-8-circle-image.png'
            },
            {
                id: 2,
                name: 'Jenia',
                url: 'https://www.freepngimg.com/thumb/shape/30004-8-circle-image.png'
            },
            {
                id: 3,
                name: 'Ania',
                url: 'https://www.freepngimg.com/thumb/shape/30004-8-circle-image.png'
            }
        ]
    }
}

window.state = state;

export let addPost = () => {
    const newPost = {
        id: 6,
        message: state.profilePage.newProfileText,
        likesCount: 777
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newProfileText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newProfileText = newText;
    rerenderEntireTree(state)
}

export let addMessage = () => {
    const newMessage = {
        id: 6,
        message: state.messagesPage.newMessageText,
    }
    console.log(newMessage)
    console.log(state.messagesPage.messages)
    state.messagesPage.messages.push(newMessage)
    state.messagesPage.newMessageText = ''
    rerenderEntireTree(state)
}

export let updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireTree(state)
}
