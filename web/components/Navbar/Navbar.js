import PropTypes from 'prop-types';
import NavbarWrapper, { 
    LogoArea,
    MenuArea,
    AvatarWrapper,
    MenuWrapper,
    AuthWrapper,
} from './Navbar.style'; 

const Navbar = ({
    className,
    logo,
    avatar,
    navMenu,
    authMenu,
    profileMenu,
    isLogin,
    headerType,
    searchComponent,
    location,
    searchVisibility,
}) => {
    const addAllClasses = ['navbar'];

    if (className) {
        addAllClasses.push(className);
    }

    if (headerType) {
        addAllClasses.push(`is_${headerType}`);
    }

    return (
        <NavbarWrapper className={addAllClasses.join(' ')}>
            {logo || searchVisibility ? (
                <LogoArea>
                    {logo}
                    {!searchVisibility && location.pathname === '/'
                        ? null
                        : searchComponent
                    }
                </LogoArea>
            ) : null}

            <MenuArea>
                {navMenu && <MenuWrapper className="main_menu">{navMenu}</MenuWrapper>}
                {isLogin && avatar ? (
                    <AvatarWrapper>{profileMenu}</AvatarWrapper>
                ) : (
                    authMenu && (
                        <AuthWrapper className="auth_menu">{authMenu}</AuthWrapper>
                    )
                )}
            </MenuArea>
        </NavbarWrapper>
    )
}