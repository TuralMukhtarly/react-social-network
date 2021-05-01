import Users from './Users'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { followAC, setUserAC, unfollowAC, UsersType } from '../../redux/users-reducer'


const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUser: (users: Array<UsersType>) => {
            dispatch(setUserAC(users))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)