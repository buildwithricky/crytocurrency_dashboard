import React from "react";
import Image from "next/image";
const Table = ({ props }) => {
  const { data } = props.result;
  const formatPercent = (number) => `${new Number(number).toFixed(2)}%`;
  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits,
    }).format(number);
  //table

  return (
    <div className="row tables">
      <div className="col-sm-12">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>

              <th> name </th>
              <th> Price </th>
              <th> 24H Change </th>
              <th> Market Cap </th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin, index) => (
              <tr key={coin.id}>
                <td> {index + 1}</td>
                <td className="p">
                  <img
                    src={coin.image}
                    style={{ width: 25, height: 25, marginRight: 10 }}
                    alt="image"
                  />
                  {coin.name}
                  {coin.symbol.toUpperCase()}
                </td>

                <td>${coin.current_price}</td>
                <td>
                  <span
                    className={
                      coin.price_change_percentage_24h > 0
                        ? "text-success"
                        : "text-danger"
                    }>
                    {formatPercent(coin.price_change_percentage_24h)}
                  </span>
                </td>
                <td>{formatDollar(coin.market_cap, 12)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
