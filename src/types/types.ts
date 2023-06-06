//

import React, {ChangeEvent, FC} from 'react'

export type TextAreaOrInputOnChangeType =
   ChangeEvent<HTMLTextAreaElement | HTMLInputElement>

export type PostType = {
   id: number | string,
   message: string,
   likesCount: number
}

export type ContactsType = {
   github: string
   vk: string
   facebook: string
   instagram: string
   twitter: string
   website: string
   youtube: string
   mainLink: string
}

export type PhotosType = {
   small: string | null
   large: string | null
}

export type ProfileType = {
   userId: number,
   lookingForAJob: boolean,
   lookingForAJobDescription: string,
   fullName: string,
   contacts: ContactsType,
   photos: PhotosType
   aboutMe: string
}

export type UserType = {
   id: number
   name: string
   status: string
   photos: PhotosType
   followed: boolean,
   location?: {
      country?:string,
   }
}

export type RoutesType = Array<{to:string, title:string}>;

interface AppRouteType {
   path: string,
   element: any,
   pageTitle?:string
}

export type RoutesAppType = Array<AppRouteType>



