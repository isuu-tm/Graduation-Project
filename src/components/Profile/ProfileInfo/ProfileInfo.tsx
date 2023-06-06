// import s from './ProfileInfo.module.css'
import styles from './ProfileInfo.module.css'
import React, {ChangeEvent, useState} from 'react'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
// import userPhoto from '../../../assets/images/user2.jpg'
import ProfileDataForm from './ProfileDataForm'
import {ContactsType, ProfileType} from '../../../types/types'
import {Button, Divider, Upload, Typography, Space} from "antd";
import {UploadOutlined, InfoCircleOutlined } from "@ant-design/icons";
//@ts-ignore
import  profilePhoto from './../../../assets/images/defaultUserphoto.jpeg'

const { Text, Link } = Typography;


export type ProfileInfoPropsType = {

   profile: ProfileType
   status: string
   updateStatus: (status: string) => void
   isOwner: boolean
   savePhoto: (photoFile: File) => void
   saveProfile: (formData: ProfileType, setStatus: any,
                 setSubmitting: any, goToViewMode: any) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

   let [editMode, setEditMode] = useState(false)

   let {profile, saveProfile} = props


   if (!profile) {
      return <Preloader />
   }

   let alt_descriptionBlock = `photo_${profile.userId}`

   const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {

      if (event.target.files?.length) {
         props.savePhoto(event.target.files[0])
      }
   }

   const handleSubmit = (formData: ProfileType, setStatus: any,
                         setSubmitting: any, goToViewMode: any) => {

      saveProfile(formData, setStatus, setSubmitting, goToViewMode)

   }


   return (
      <div>
         <div className={styles.descriptionBlock}>
            <img
                src={profile.photos.large !== null
               ? profile.photos.large
               : profilePhoto}
                 className={styles.userPhoto}
                 alt={alt_descriptionBlock}
            />

            <div>
               {profile.fullName} - userId - {profile.userId}
            </div>

            <div>
               {props.isOwner
               &&
                   <Upload>
                   <Button
                   icon={<UploadOutlined
                   onChange={onMainPhotoSelected}/>}
                   >Загрузить фото</Button>
                   </Upload>}
            </div>


            <div className={styles.profileBlock}>

               {editMode
                  ? <ProfileDataForm profile={profile}
                                     handleSubmit={handleSubmit}
                                     goToViewMode={
                                        () => setEditMode(false)} />
                  : <ProfileData profile={profile}
                                 isOwner={props.isOwner}
                                 goToEditMode={
                                    () => setEditMode(true)} />}

               <ProfileStatusWithHooks
                  status={props.status}
                  updateStatus={props.updateStatus}
                  isOwner={props.isOwner} />

            </div>

         </div>

      </div>
   )
}

type ProfileDataPropsType = {

   profile: ProfileType
   isOwner: boolean
   goToEditMode: () => void

}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {

   return (
       <div className="profile-section">
           <Divider/>
           <h2>Обо мне <InfoCircleOutlined /></h2>
           <div className="profile-section-item">
               <b>Имя</b>: {profile.fullName}
           </div>

           <div className="profile-section-item">
               <Space direction="vertical">
                   <Text type="secondary">
                       Ищу ли я работу:{profile.lookingForAJob ? 'yes' : 'no'}
                   </Text>
               </Space>
               <b></b>:
           </div>

           {profile.lookingForAJob && (
               <div className="profile-section-item">
                   <b>Мои хард скиллы</b>: {profile.lookingForAJobDescription}
               </div>
           )}

           <div className="profile-section-item">
               <b>Обо мне</b>: {profile.aboutMe}
           </div>

           <div className="profile-section-item">
               <b>Контакты</b>:
               {Object.keys(profile.contacts).map((key) => {
                   return (
                       <Contacts
                           key={key}
                           contactTitle={key}
                           contactValue={profile.contacts[key as keyof ContactsType]}
                       />
                   );
               })}
           </div>

           <div className="profile-section-item">
               {isOwner && (
                   <Button onClick={goToEditMode}>Изменить</Button>
               )}
           </div>

           <Divider/>
       </div>
   )
}

type ContactsPropsType = {
   contactTitle: string
   contactValue: string
}

const Contacts: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {

   return (
      <div className={styles.contact}>
         <b> {contactTitle}</b>: {contactValue}
      </div>)
}

export default ProfileInfo

//small
// {/*<div className={s.photoBlock}>*/}
// {/*   <img src='https://html5css.ru/css/img_forest.jpg' alt='photo555' />*/}
// {/*</div>*/}