import { Field, Form, Formik } from 'formik';
import React from 'react';
import { FilterUsersReducerType } from '../../redux/users-reducer';
import { useSelector } from 'react-redux';
import { getUsersFilter } from '../../redux/users-selectors';
import s from './usersContainer.module.css'

type SetSubmittingType = {
    setSubmitting: (isSubmitting: boolean) => void;
};

type PropsType = {
    onFilterChanged: (filter: FilterUsersReducerType) => void;
};

type FormValuesType = {
    term: string;
    friend: string;
};

const UsersSearchForm: React.FC<PropsType> = (props) => {
    const filter = useSelector(getUsersFilter);

    const submit = (values: FormValuesType, { setSubmitting }: SetSubmittingType) => {
        const filter2: FilterUsersReducerType = {
            term: values.term,
            friend:
                values.friend === 'true' ? true : values.friend === 'false' ? false : null,
        };
        props.onFilterChanged(filter2);
        setSubmitting(false);
    };

    return (
        <div className={s.usersSearchForm}>
            <Formik
                enableReinitialize
                initialValues={{
                    term: filter.term,
                    friend: String(filter.friend),
                }}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form className={s.usersSearchFormForm}>
                        <Field
                            type="text"
                            name="term"
                            className={s.usersSearchFormInput}
                            placeholder="Search by name"
                        />

                        <Field name="friend" as="select" className={s.usersSearchFormSelect}>
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={s.usersSearchFormButton}
                        >
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UsersSearchForm;
