let store = {
    _state: {
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
    },
    getState() {
      return this._state;
    },
    _callSubscriber() {
        console.log('ss')
    },
    addPost() {
        const newPost = {
            id: 6,
            message: this._state.profilePage.newProfileText,
            likesCount: 777
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newProfileText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newProfileText = newText;
        this._callSubscriber(this._state)
    },
    addMessage() {
        const newMessage = {
            id: 6,
            message: this._state.messagesPage.newMessageText,
        }
        this._state.messagesPage.messages.push(newMessage)
        this._state.messagesPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newText) {
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store

window.store = store
