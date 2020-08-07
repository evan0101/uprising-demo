import React, { useContext } from 'react';
import { ApiContext } from '../../Api';

const Header = (props: any) => {
  const { main, sub, player, img } = props;

  const { getPlayerSkin } = useContext(ApiContext);

  const getBlocks = (data: Array<any>): any => {
    if (data) {
      return data.map(block => (
        <div className="block">
          {block.icon}
          <div className="block-text">
            <h2 className={block.text}>{block.text}</h2>
            <h1>{block.largeText}</h1>
          </div>
        </div>
      ));
    } else {
      return '';
    }
  };

  return (
    <div
      className="header-bg"
      style={img ? { backgroundImage: `url(${img})` } : {}}
    >
      <div className={(img ? 'gradient' : ' ') + ' header-container'}>
        <div className="header">
          {player && (
            <div className="player">
              <img src={getPlayerSkin(player, 'body')}></img>
            </div>
          )}
          <div className="data">
            <div className="main">{getBlocks(main)}</div>
            <div className="sub">{getBlocks(sub)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
