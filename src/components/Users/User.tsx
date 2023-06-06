import React from 'react';
import s from './users.module.css';
import {NavLink} from 'react-router-dom';
import {UserType} from '../../types/types';
import {useSelector} from 'react-redux';
import {Button, Space, Typography} from "antd";
//@ts-ignore
import defaultPhoto from './../../assets/images/default.jpeg'

const {Text, Link} = Typography;

type PropsType = {
    user: UserType;
    followingInProgress: Array<number>;
    unfollow: (userId: number) => void;
    follow: (userId: number) => void;
};


const User: React.FC<PropsType> = (props) => {
    const totalUsers = useSelector((state) => state);
    const {user, followingInProgress, unfollow, follow} = props;

    return (
        <div className={s.userContainer}>
            <div className={s.userAvatar}>
                <NavLink to={'/profile/' + user.id}>
                    <img
                        src={
                            user.photos.small !== null ? user.photos.small : defaultPhoto
                        }
                        className={s.userPhoto}
                        alt={'User avatar'}
                    />
                </NavLink>
            </div>
            <div className={s.userInfo}>
                <div className={s.userName}>{user.name}</div>
                <div className={s.userStatus}>
                    <Text mark>
                        {user.status}
                    </Text>
                </div>
                <div className={s.userLocation}>
                    <Text
                        type={'secondary'}
                    >
                        {user.location?.country}
                    </Text>
                    <span className={s.locationCity}>
                    <Text
                        type={'secondary'}
                    >
        {user.location?.country}
      </Text></span>
                </div>
            </div>
            <div className={s.userButtons}>
                {user.followed ? (
                    <Button
                        disabled={followingInProgress.some((id) => id === user.id)}
                        onClick={() => {
                            unfollow(user.id);
                        }}
                    >
                        Unfollow
                    </Button>

                ) : (
                    <Button
                        disabled={followingInProgress.some((id) => id === user.id)}
                        onClick={() => {
                            follow(user.id);
                        }}
                    >
                        Follow
                    </Button>
                )}

            </div>

        </div>
    );
};

export default User;