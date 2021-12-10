import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './SignIn.module.scss';
import { ROUTES } from '../../../config/constants';
import { setUserLoggedIn, userSignedIn, userSignedUp } from '../../../redux/actions/auth';
import Input from '../../shared/Input/Input';
import FormItem from '../../shared/Form/FormItem/FormItem';
import Button from '../../shared/Button/Button';
import Card from '../../shared/Card/Card';

const SignIn = props => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();
    const history = useHistory();

    const onFormSubmit = async values => {
        const user = await dispatch(userSignedIn(values));

        if (user) {
            history.push(ROUTES.allMovies.path);
        } else {
            console.log(errors);
        }
    };

    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <h2 className={styles.title}>Sign In</h2>

                <form onSubmit={handleSubmit(onFormSubmit)}>
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
                            })}
                        />
                    </FormItem>
                    <div className={styles.forgot}>Forgot password?</div>
                    <Button className={styles.button}>Sign In</Button>
                </form>
            </Card>
        </div>
    );
};

SignIn.propTypes = {};

export default SignIn;
