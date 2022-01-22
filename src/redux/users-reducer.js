import { usersAPI } from '../api/api';

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLOWING_IN_PROGRESS = 'TOGGLE_FOLOWING_IN_PROGRESS';

let initialState = {
    users: [
        { id: 1, followed: false, name: 'Lenin', photos: { small: 'https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg', large: 'https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg' }, status: 'Лежу', location: { city: 'Ulyanovsk', country: 'Russia' } },
        { id: 2, followed: true, name: 'Lilya', photos: { small: 'https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg' }, status: 'I am the best', location: { city: 'Ulyanovsk', country: 'Russia' } },
        { id: 3, followed: false, name: 'Bulat', photos: { small: 'https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg' }, status: 'Hi all', location: { city: 'Ulyanovsk', country: 'Russia' } },
    ],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 500,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return {...user, followed: !user.followed };
                    else return user
                }),
            };
        case SET_USERS:
            let newstate = {
                ...state,
                users: [...action.users],
            };
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_FOLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

export const toggleStateFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId: userId });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count: count });
export const setCurrentPages = (page) => ({ type: SET_CURRENT_PAGE, page: page });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });
export const toggleFollowingInProgress = (isFetching, id) => ({ type: TOGGLE_FOLOWING_IN_PROGRESS, isFetching: isFetching, id: id });

export const requestUsers = (currentPage, pageSize) =>
    async(dispatch) => {
        dispatch(setCurrentPages(currentPage));
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    }

export const toggleFollow = (user) =>
    async(dispatch) => {
        dispatch(toggleFollowingInProgress(true, user.id));
        let data;
        if (user.followed) {
            data = await usersAPI.deleteFollow(user.id);
        } else {
            data = await usersAPI.postFollow(user.id);
        }
        if (data.resultCode === 0) { dispatch(toggleStateFollow(user.id)) };
        dispatch(toggleFollowingInProgress(false, user.id));
    }

export default usersReducer;