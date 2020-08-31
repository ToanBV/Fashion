import { withRouter } from 'next/router';
import { Menu } from 'antd';
import ActiveLink from '../../../helpers/activeLink';

import {
    HOME_PAGE,
    LISTING_POSTS_PAGE,
    AGENTS_PAGE,
    PRICING_PLAN_PAGE
} from '../../../settings/constant';

const MainMenu = ({ className, router }) => {
    return (
        <Menu className={className}>
            <Menu.Item key="0">
                <ActiveLink
                    className={router.pathname===HOME_PAGE ? 'active' : ''}
                    href={`${HOME_PAGE}`}
                >
                    Fashion
                </ActiveLink>
            </Menu.Item>
            <Menu.Item key="1">
                <ActiveLink
                    className={router.pathname===LISTING_POSTS_PAGE ? 'active' : ''}
                    href={`${LISTING_POSTS_PAGE}`}
                >
                    Posts
                </ActiveLink>
            </Menu.Item>
            <Menu.Item key="1">
                <ActiveLink
                    className={router.pathname===AGENTS_PAGE ? 'active' : ''}
                    href={`${AGENTS_PAGE}`}
                >
                    Agent
                </ActiveLink>
            </Menu.Item>
            <Menu.Item key="0">
                <ActiveLink
                    className={router.pathname===PRICING_PLAN_PAGE ? 'active' : ''}
                    href={`${PRICING_PLAN_PAGE}`}
                >
                    Prices
                </ActiveLink>
            </Menu.Item>
        </Menu>
    )
}

export default withRouter(MainMenu);
