//
import React from 'react'
import s from './MyPosts.module.css'
import Post from './Posts/Post'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import {ErrorMessageWrapper} from '../../../utils/validators/validators'
import {PostType} from '../../../types/types'
import {Button} from "antd";

export type MapMyPostsPropsType = {
   posts: Array<PostType>
}

export type DispatchMyPostsPropsType = {
   addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapMyPostsPropsType & DispatchMyPostsPropsType> = props => {

   // тут reverse - для теста
   let postsElement =
      [...props.posts]
         .reverse()
         .map(p => <Post value={p.message} likesCount={p.likesCount} key={p.id} />)

   return (
      <div className={s.postsBlock}>

         <h3 className={s.text_h3}>
            Комментарии:
         </h3>
         <AddNewPostForm
            addPost={props.addPost}
         />
         <div className={s.posts}>
            {postsElement}
         </div>
      </div>
   )
}


type AddNewPostFormPropsType = {
   addPost: (newPostText: string) => void
}

const AddNewPostForm: React.FC<AddNewPostFormPropsType> = (props) => {

   const validationSchema = Yup.object().shape({
      newPostText: Yup.string()
         .min(2, 'Must be longer than 2 characters !')
         .max(100, 'Must be shorter than 100 characters !')
         .required('Required !')
   })

   const OnAddPost = (values: string) => {
      props.addPost(values)
   }

   return (
      <Formik
         initialValues={{
            newPostText: ''
         }}
         validationSchema={validationSchema}
         onSubmit={(values, {resetForm}) => {
            OnAddPost(values.newPostText)
            resetForm()
         }}
      >
         {() => (
            <Form>
               <div>
                  <Field
                     name={'newPostText'}
                     as={'textarea'}
                     placeholder={'Enter your message'}
                  />
               </div>
               <ErrorMessage name="newPostText">
                  {ErrorMessageWrapper}
               </ErrorMessage>
                <Button>Добавить коментарии</Button>
            </Form>
         )}
      </Formik>
   )
}


export default MyPosts


//region Description
// так было раньше без формика
//let newPostElement = React.createRef()

// let OnAddPost = () => {
//    props.addPost();
// }
//
//
// let onPostChange = () => {
//    let text = newPostElement.current.value;
//    props.updateNewPostText( text );
// }

// <div>
//    <textarea ref={newPostElement}
//              onChange={onPostChange}
//              value={props.newPostText} />
// </div>
//
// <div>
//    <button onClick={OnAddPost}> Add posts
//    </button>
// </div>

// let postsElement =
//    props.posts.map( p => <Post value={p.message} likesCount={p.likesCount} key={p.id} /> );
//endregion