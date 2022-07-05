import React from 'react';
import { Icon, Card } from "web3uikit";
import style from './index.module.less';

export default function Content(){
    return (
        <div className={style.ContentWrapper}>
            <div className={style.contentHeader}>
                <div className={style.leftHeader}><span className={style.themeTitle}>Deal of The Week</span><span className={style.themeLocationTitle}>in Mumbai</span><span className={style.publishTime}>Ends on 10 Jul 2022</span></div>
                <div className={style.menuContainer}>
                    <span className={style.viewAllButton}>
                        view all
                    </span>
                    <div className={style.buttonContainer}>
                        <Icon
                            fill="#000000"
                            size={24}
                            svg="arrowCircleLeft"
                            className={style.leftButton}
                            />
                        <Icon
                            fill="#000000"
                            size={24}
                            svg="arrowCircleRight"
                            className={style.rightButton}
                            />
                    </div>
                </div>
            </div>
            <div className={style.contentBody}>
                <Card
                    className={style.cardWraper}
                    onClick={function noRefCheck(){}}
                    setIsSelected={function noRefCheck(){}}
                    tooltipText={null}
                >
                    <div>
                        <img alt="" className={style.assetImg} aria-hidden="true" src="https://ik.imagekit.io/osmz1lxs6d0/propertygallery/611f65637d8d7_2.webp?tr=w-395,h-203"/>
                    </div>	
                </Card>
                <Card
                    className={style.cardWraper}
                    onClick={function noRefCheck(){}}
                    setIsSelected={function noRefCheck(){}}
                    tooltipText={null}
                >
                    <div>
                    <img alt="" className={style.assetImg} aria-hidden="true" src="https://ik.imagekit.io/osmz1lxs6d0/propertygallery/621cb3d0924f5_3.webp?tr=w-395,h-203"/>
                    </div>
                </Card>
                <Card
                    className={style.cardWraper}
                    onClick={function noRefCheck(){}}
                    setIsSelected={function noRefCheck(){}}
                    tooltipText={null}
                >
                    <div>
                        <img alt="" className={style.assetImg} aria-hidden="true" src="https://ik.imagekit.io/osmz1lxs6d0/propertygallery/628214a0005e5_9.webp?tr=w-395,h-203"/>
                    </div>
                </Card>
            </div>
        </div>
    )
}