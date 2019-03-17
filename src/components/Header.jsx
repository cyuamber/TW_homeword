import React, { PureComponent } from 'react';
import { Balloon, Icon } from '@icedesign/base';
import IceImg from '@icedesign/img';
import Layout from '@icedesign/layout';
import Menu from '@icedesign/menu';
import FoundationSymbol from 'foundation-symbol';
import cx from 'classnames';
import { Link } from 'react-router';
import { headerNavs } from '../navs';
import Logo from './Logo';

export default class Header extends PureComponent {
  render() {
    const { width, theme, isMobile, className, style, ...others } = this.props;

    return (
      <Layout.Header
        {...others}
        theme={theme}
        className={cx('ice-design-layout-header', className)}
        style={{ ...style, width }}
      >
        <Logo />
        <div
          className="ice-design-layout-header-menu"
          style={{ display: 'flex' }}
        >
          {/* Header 菜单项 begin */}
          {headerNavs && headerNavs.length > 0 ? (
            <Menu mode="horizontal" selectedKeys={[]}>
              {headerNavs.map((nav, idx) => {
                const linkProps = {};
                if (nav.newWindow) {
                  linkProps.href = nav.to;
                  linkProps.target = '_blank';
                } else if (nav.external) {
                  linkProps.href = nav.to;
                } else {
                  linkProps.to = nav.to;
                }
                return (
                  <Menu.Item key={idx}>
                    <Link {...linkProps}>
                      {nav.icon ? (
                        <FoundationSymbol type={nav.icon} size="small" />
                      ) : null}
                      {!isMobile ? nav.text : null}
                    </Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          ) : null}
          {/* Header 菜单项 end */}

          {/* Header 右侧内容块 */}
          <Balloon
            trigger={
              <div
                className="ice-design-header-userpannel"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 12,
                }}
              >
                <IceImg
                  height={40}
                  width={40}
                  src="https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png"
                  className="user-avatar"
                />
                {/* <Icon
                  type="arrow-down-filling"
                  size="xxs"
                  className="icon-down"
                /> */}
              </div>
            }
            offset = {[-70,0]}
            closable={false}
            className="user-profile-menu"
          >
            <ul>
              <li className="user-profile-menu-item">
                <Link to="/">
                  <i className="icon-id-card"></i>Profile
                </Link>
              </li>
              <li className="user-profile-menu-item">
                <Link to="/">
                  <i className="icon-sign-in"></i>Sign out
                </Link>
              </li>
            </ul>
          </Balloon>
        </div>
      </Layout.Header>
    );
  }
}
