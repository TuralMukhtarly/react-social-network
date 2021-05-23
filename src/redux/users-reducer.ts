export type followTypeAC = ReturnType<typeof followAC>
export type unfollowTypeAC = ReturnType<typeof unfollowAC>
export type setUserTypeAC = ReturnType<typeof setUserAC>
export type setCurrentUserTypeAC = ReturnType<typeof setCurrentUserAC>
export type setTotaltUserTypeAC = ReturnType<typeof setUsersTotalCountAC>

type LocationType = {
    city: string,
    country: string
}

export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

const initialState = {
    users: [] as Array<UsersType>,
    pagesSize: 5,
    totalUserCount: 20,
    currentPage: 3,
    isFetching: false
}

export type InitialStateType = typeof initialState

const userReducers = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case "SET-USERS": {
            return { ...state, users: action.users }
        }
        case "SET-CURRENT-USERS": {
            return { ...state, currentPage: action.currentPage }
        }
        case "SET-TOTAL-USERS-COUNT": {
            return { ...state, currentPage: action.count }
        }
        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {
        type: "FOLLOW",
        userID: userID
    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID: userID
    } as const
}

export const setUserAC = (users: Array<UsersType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}
export const setCurrentUserAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-USERS",
        currentPage: currentPage
    } as const
}
export const setUsersTotalCountAC = (totalUserCount: number) => {
    return {
        type: "SET-CURRENT-USERS",
        count: totalUserCount
    } as const
}

export default userReducers