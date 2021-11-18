import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './SignIn.module.scss';
import { ROUTES } from '../../../config/constants';
import { setUserLoggedIn } from '../../../redux/actions/auth';
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

    const select = useSelector(state => state.auth.user);

    const onFormSubmit = async values => {
        const user = await dispatch(setUserLoggedIn(values));

        user && history.push(ROUTES.moviesList.path);
    };

    console.log(select);

    return (
        <div className={styles.container}>
            <Card>
                <h2 className={styles.title}>Sign In</h2>

                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <FormItem label={'Email'}>
                        <Input type={'email'} placeholder={'Enter your email address'} {...register('email')} />
                    </FormItem>
                    <FormItem label={'Password'}>
                        <Input.Password placeholder={'Enter your password'} {...register('password')} />
                    </FormItem>
                    <div className={styles.forgot}>Forgot password?</div>
                    <Button customStyle={{ width: '100%' }}>Sign In</Button>
                </form>
            </Card>
        </div>
    );
};

SignIn.propTypes = {};

export default SignIn;
