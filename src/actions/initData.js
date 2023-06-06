export const initData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['columns-1', 'columns-2', 'columns-3'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'Todo 1',
                    cardOrder: ['Card-1', 'Card-2', 'Card-3', 'Card-4', 'Card-5', 'Card-6', 'Card-7'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 1',
                            image: 'https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png'
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 2',
                            image: null
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 3',
                            image: null
                        },
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 4',
                            image: null
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 5',
                            image: null
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 6',
                            image: null
                        },
                        {
                            id: 'card-7',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 7',
                            image: null
                        },

                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Todo 2',
                    cardOrder: ['Card-8', 'Card-9', 'Card-10'],
                    cards: [
                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title of card 8',
                            image: null
                        },
                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title of card 9',
                            image: null
                        },
                        {
                            id: 'card-10',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title of card 10',
                            image: null
                        },


                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Todo 3',
                    cardOrder: ['Card-11', 'Card-12', 'Card-13'],
                    cards: [
                        {
                            id: 'card-11',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Title of card 11',
                            image: null
                        },
                        {
                            id: 'card-12',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Title of card 12',
                            image: null
                        },
                        {
                            id: 'card-13',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Title of card 13',
                            image: null
                        }
                    ]
                }
            ]
        }]
}