import React from 'react';
import Content from './content'
import style from './index.module.less';
import { useMoralis } from "react-moralis";
import { ConnectButton, Dropdown, Avatar } from "web3uikit";
export default function Home() {
  const { isAuthenticated, account } = useMoralis();
  
  return (
    <>

    {isAuthenticated ? (
        <div className={style.homeWrapper}>
          <div className={style.headerWrapper}>
              <div className={style.title}><div className={style.titleBg}></div></div>
              <div className={style.menuWrapper}>
                <div className={style.userinfo}>{String(account).substring(0,4) + '...' + String(account).substring(String(account).length-4, String(account).length)}</div>
                <div className={style.menuContainer}>
                <Dropdown
                    onChange={function noRefCheck(){}}
                    onComplete={function noRefCheck(){}}
                    options={[
                      {
                        id: 'buy',
                        label: 'buy',
                        prefix: <Avatar avatarKey={1} borderRadius={7.5} fontSize={8} size={24} text="buyer" theme="letters"/>
                      },
                      {
                        id: 'sell',
                        label: 'sell',
                        prefix: <Avatar avatarKey={2} borderRadius={7.5} fontSize={8} size={24} text="seller" theme="letters"/>
                      },
                      {
                        id: 'lease',
                        label: 'lease',
                        prefix: <Avatar avatarKey={3} borderRadius={7.5} fontSize={8} size={24} text="renter" theme="letters"/>
                      },
                      {
                        id: 'renting',
                        label: 'renting',
                        prefix: <Avatar avatarKey={4} borderRadius={7.5} fontSize={8} size={24} text="lessee" theme="letters"/>
                      }
                    ]}
                  />
                </div>
              </div>
          </div>
          <div className={style.bodyContent}>
            <Content></Content>
          </div>
          
        </div>
    ) : (
      <div className={style.unAuth}>
          {/* <img src={logo} alt= "logo" height="200px"/> */}
          <ConnectButton />
      </div>

    )}
    </>
  );
}
