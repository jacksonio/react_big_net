const initialState = {
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

export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {

        default: {
            return {...state}
        }
    }
}

