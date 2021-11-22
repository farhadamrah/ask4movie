import PropTypes from 'prop-types';
import styles from './SignUp.module.scss';
import FormItem from '../../shared/Form/FormItem/FormItem';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import Card from '../../shared/Card/Card';

const SignUp = props => {
    return (
        <div className={styles.container}>
            <Card>
                <h2 className={styles.title}>Sign Up</h2>

                <form>
                    <FormItem label={'Email'}>
                        <Input type={'email'} placeholder={'Enter your email address'} />
                    </FormItem>
                    <FormItem label={'Password'}>
                        <Input.Password placeholder={'Enter your password'} />
                    </FormItem>
                    <FormItem label={'Confirm Password'}>
                        <Input.Password placeholder={'Enter your password again'} />
                    </FormItem>

                    <Button className={styles.button}>Sign Up</Button>
                </form>
            </Card>
        </div>
    );
};

SignUp.propTypes = {};

export default SignUp;
