import React, { useState } from "react";
import { FiSetting } from "react-icons/fi";
import { MdPowerSettingsNew } from "react-icons/md";
import { BsBoxArrowDown, BsFillSendFill } from "react-icons/bs";
const Swap = ({ nativeToken, transferNativeToken }) => {
    const [token, setToken] = useState({
        address: "",
        tokenNo: "",
    });

    const handleTokenInfo = (fieldName, e) => {
        setToken({ ...token, [fieldName]: e.target.value })
    };
    return (
        <div class="swap-area bg-color-3 fix area-padding">
            <div class="container">
                <div class="row d-flex flex-wrap align-items-center">
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="swap-inner">
                            <div class="swap-token left-headline">
                                <div class="top-text-title">COIN SWAP</div>
                                <h2>
                                  You can swap{" "}
                                  <span class="color-text-bold">Graphbit token</span> anytime 
                                  </h2>
                                  <p>
                                    Blockchain opt in to the projects they genuinely want to work 
                                    on.maintains the amount of lines. When replacing a selection.
                                    help agencies to define. define their new business objectives 
                                    and then Our consultants opt in to the project they genuinely 
                                    want to work on.{" "}
                                  </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div class="money-send">
                                <div class="calculator-inner">
                                    <div class="single-cal">
                                        <div class="swap-top d-flex flex-wrap clign-items-center">
                                            <div class="swap-left">
                                                <span>Token</span>
                                            </div>
                                            <div class="swap-right">
                                                <ul class="dashboard-right-menus">
                                                    <li>
                                                        <a href="#0" class="thumbs">
                                                            <FiSettings />
                                                        </a>

                                                        <div class="notification-area left-part">
                                                            <div class="notification-header">
                                                                <span class="set-text">Native Token</span>
                                                                <div class="swap-set">
                                                                    <span>
                                                                        Find detail of our ERC20 Native token
                                                                    </span>
                                                                    <ul>
                                                                        <li>
                                                                            <a>{nativeToken?.name}</a>
                                                                        </li>
                                                                        <li>
                                                                            <a>{nativeToken?.totalSupply}</a>
                                                                        </li>
                                                                    </ul>
                                                                  </div>
                                                                  <div class="swap-set slipege">
                                                                    <span>AddressL {nativeToken?.addrress}</span>
                                                                    <ul>
                                                                        <li>
                                                                            <a>Bal: {nativeToken?.balance}</a>
                                                                            