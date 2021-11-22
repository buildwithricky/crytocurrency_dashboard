import React from "react";

const Header = ({ props }) => {
  const { data } = props.result;
  return (
    <div>
      <div className="header ">
        crytos: <span className="text-primary">{data.length}</span>
        Exchanges: <span className="text-primary">{data.length}</span>
        Market Cap: <span className="text-primary">{data.length}</span>
        24h vol: <span className="text-primary">{data.length}</span>
        Dominance: <span className="text-primary">{data.length}</span>
        Eth Gas: <span className="text-primary">{data.length}</span>
      </div>
    </div>
  );
};

export default Header;
