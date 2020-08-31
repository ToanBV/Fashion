import { withRouter } from 'next/router';
import { Menu } from 'antd';
import { ActiveLink } from '../../../helpers/activeLink';
import { LOGIN_PAGE, REGISTRATION_PAGE } from '../../../settings/constant';

const AuthMenu = (className) => {
    return (
        <Menu className={className}>
            <Menu.Item key='0'>
                <ActiveLink href={`${LOGIN_PAGE}`}>
                    Sign in
                </ActiveLink>
            </Menu.Item>
            <Menu.Item key='1'>
                <ActiveLink href={`${REGISTRATION_PAGE}`}>
                    Sign up
                </ActiveLink>
            </Menu.Item>
        </Menu>
    )
}

export default AuthMenu;
