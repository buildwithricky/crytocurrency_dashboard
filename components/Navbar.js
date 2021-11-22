import React, { useState } from "react";

import Link from "next/link";
const NavBar = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="nav-container">
      <div className="nav-header">
        <div className="logo">
          <h2>BINANCE</h2>
        </div>
        <div
          className={show ? "bars" : " "}
          id="menuToggle"
          onClick={() => setShow(false)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="nav-desk">
        <nav>
          <ul>
            <li>
              <Link href="/">Crytocurrencies</Link>
              <ul className="sub-list">
                <li>
                  <a>crypto</a>
                </li>
                <li>
                  <a>update</a>
                </li>
                <li>
                  <a>Sell</a>
                </li>
                <li>
                  <a>Buy</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="">Exchange</Link>
              <ul className="sub-list">
                <li>
                  <a>crypto</a>
                </li>
                <li>
                  <a>update</a>
                </li>
                <li>
                  <a>Sell</a>
                </li>
                <li>
                  <a>Buy</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="">NFT</Link>
              <ul className="sub-list">
                <li>
                  <a>crypto</a>
                </li>
                <li>
                  <a>update</a>
                </li>
                <li>
                  <a>Sell</a>
                </li>
                <li>
                  <a>Buy</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="">Portfolio</Link>
            </li>
            <li>
              <Link href="" onMouseOver={() => alert("hello world")}>
                Watchlist
              </Link>
            </li>
            <li>
              <Link href="">Calendars</Link>
              <ul className="sub-list">
                <li>
                  <a>crypto</a>
                </li>
                <li>
                  <a>update</a>
                </li>
                <li>
                  <a>Sell</a>
                </li>
                <li>
                  <a>Buy</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="">Products</Link>
              <ul className="sub-list">
                <li>
                  <a>crypto</a>
                </li>
                <li>
                  <a>update</a>
                </li>
                <li>
                  <a>Sell</a>
                </li>
                <li>
                  <a>Buy</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="">Learn</Link>
              <ul className="sub-list">
                <li>
                  <a>crypto</a>
                </li>
                <li>
                  <a>update</a>
                </li>
                <li>
                  <a>Sell</a>
                </li>
                <li>
                  <a>Buy</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className={show ? "nav-mobile" : " nav-mobile show"}>
        <div
          className={show ? "bars" : "bars  top"}
          id="menuToggle"
          onClick={() => setShow(true)}>
          X
        </div>
        <nav>
          <ul>
            <li>
              <Link onClick href="/">
                Crytocurrencies
              </Link>
              <ul className="sub-list">
                <li>
                  <a>crypto</a>
                </li>
                <li>
                  <a>update</a>
                </li>
                <li>
                  <a>Sell</a>
                </li>
                <li>
                  <a>Buy</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="">Exchange</Link>
              <ul className="sub-list">
                <li>
                  <a>crypto</a>
                </li>
                <li>
                  <a>update</a>
                </li>
                <li>
                  <a>Sell</a>
                </li>
                <li>
                  <a>Buy</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="">NFT</Link>
              <ul className="sub-list">
                <li>
                  <a>crypto</a>
                </li>
                <li>
                  <a>update</a>
                </li>
                <li>
                  <a>Sell</a>
                </li>
                <li>
                  <a>Buy</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="">Portfolio</Link>
            </li>
            <li>
              <Link href="" onMouseOver={() => alert("hello world")}>
                Watchlist
              </Link>
            </li>
            <li>
              <Link href="">Calendars</Link>
              <ul className="sub-list">
                <li>
                  <a>crypto</a>
                </li>
                <li>
                  <a>update</a>
                </li>
                <li>
                  <a>Sell</a>
                </li>
                <li>
                  <a>Buy</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="">Products</Link>
              <ul className="sub-list">
                <li>
                  <a>crypto</a>
                </li>
                <li>
                  <a>update</a>
                </li>
                <li>
                  <a>Sell</a>
                </li>
                <li>
                  <a>Buy</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="">Learn</Link>
              <ul className="sub-list">
                <li>
                  <a>crypto</a>
                </li>
                <li>
                  <a>update</a>
                </li>
                <li>
                  <a>Sell</a>
                </li>
                <li>
                  <a>Buy</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
