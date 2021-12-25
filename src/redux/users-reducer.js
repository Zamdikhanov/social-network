const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
    users: [
        { id: 1, isfollowed: false, name: 'Lenin', photos: { small: 'https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg' }, status: 'Лежу', location: { city: 'Ulyanovsk', country: 'Russia' } },
        { id: 2, isfollowed: true, name: 'Lilya', photos: { small: 'https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg' }, status: 'I am the best', location: { city: 'Ulyanovsk', country: 'Russia' } },
        { id: 3, isfollowed: false, name: 'Bulat', photos: { small: 'https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg' }, status: 'Hi all', location: { city: 'Ulyanovsk', country: 'Russia' } },
    ],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 3,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return {...user, isfollowed: !user.isfollowed };
                    else return user
                }),
            };
        case SET_USERS:
            let newstate = {
                ...state,
                users: [...action.users],
            };
            console.log(newstate);
            return newstate;
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.count,
            }
        default:
            return state;
    }
}


export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId: userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });
export const setTotalCountAC = (count) => ({ type: SET_TOTAL_COUNT, count: count });
export const setCurrentPagesAC = (page) => ({ type: SET_CURRENT_PAGE, page: page });

export default usersReducer;