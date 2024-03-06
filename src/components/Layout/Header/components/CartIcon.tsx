"use client";
import React, {useEffect, useState} from 'react';
import {Icon} from "@/components/Layout/Header/HeaderStyles";
import {Text} from "@/components/Text/Text";
import {colors} from "../../../../../theme/colors";
import {fonts} from "../../../../../theme/fonts";
import {styled} from "styled-components";
import {templates} from "../../../../../theme/templates";
import {useCartStore} from "@/store/CartStore";

const CartIcon = () => {
    const cs = useCartStore()
    return (
        <div style={{position:"relative"}} suppressHydrationWarning>
            <Icon
                width={23}
                height={23}
                alt="Header Icon"
                src={"/images/home/icons/icon2.svg"}
                onClick={() => {cs.setVisible(true)}}
            />
            <Counter>
                <Text color={colors.white} size="13px" fontStyle={fonts.f500} suppressHydrationWarning>
                    {cs.cart.length}
                </Text>
            </Counter>
        </div>
    );
};

export default CartIcon;

const Counter = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${colors.redMain};
  ${templates.centerContent};
  border-radius: 50%;
  position: absolute;
  top: -10px;
  right: -10px;
`;