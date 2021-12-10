import PropTypes from 'prop-types';
import styles from './SignUp.module.scss';
import FormItem from '../../shared/Form/FormItem/FormItem';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import Card from '../../shared/Card/Card';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUserSignedUp, userSignedUp } from '../../../redux/actions/auth';
import { ROUTES } from '../../../config/constants';
import { useHistory } from 'react-router-dom';
import { useRef } from 'react';

const SignUp = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const password = watch('password');

    console.log(password);

    const onSubmit = async values => {
        const { password, password_confirm } = values;

        if (password !== password_confirm) {
        } else {
            await dispatch(userSignedUp(values));

            history.push(ROUTES.allMovies.path);
        }
    };

    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <h2 className={styles.title}>Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormItem label={'Email'} hasValidationError={errors} helpMessage={errors.email?.message}>
                        <Input
                            type={'email'}
                            placeholder={'Enter your email address'}
                            {...register('email', { required: 'Email address is required' })}
                        />
                    </FormItem>
                    <FormItem label={'Password'} hasValidationError={errors} helpMessage={errors.password?.message}>
                        <Input.Password
                            placeholder={'Enter your password'}
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 8, message: 'Password must have at least 8 characters' },
                            })}
                        />
                    </FormItem>
                    <FormItem
                        label={'Confirm Password'}
                        hasValidationError={errors}
                        helpMessage={errors.password_confirm?.message}
                    >
                        <Input.Password
                            placeholder={'Enter your password again'}
                            {...register('password_confirm', {
                                required: 'Password is required',
                                validate: value => value === password || 'The passwords do not match',
                            })}
                        />
                    </FormItem>

                    <Button className={styles.button}>Sign Up</Button>
                </form>
            </Card>
        </div>
    );
};

SignUp.propTypes = {};

export default SignUp;
