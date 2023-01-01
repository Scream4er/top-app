import styles from "./P.module.css";
import { PProps } from "./P.props";
import cn from "classnames";


export const P = ({ size = 'm', children }: PProps): JSX.Element => {
    return (
        <p className={cn(styles.p, {
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.l]: size == 'l',
        })}
        >
            {children}
        </p>
    );
};