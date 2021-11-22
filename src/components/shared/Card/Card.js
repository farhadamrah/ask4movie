import styles from './Card.module.scss';
import classNames from 'classnames';

const Card = props => {
    const { className, children, ...cardProps } = props;

    return (
        <div className={classNames(styles.card, className)} {...cardProps}>
            {children}
        </div>
    );
};

export default Card;
