import React, { useEffect, useState } from "react";
import AuthStore from "@/store/AuthStore";
import { observer } from "mobx-react";
import { CircularProgress, TextField } from "@mui/material";
import currencyStore from "@/store/CurrencyStore";
import { PublicAPI } from "@/api/PublicAPI";
import { InputRounded } from "@mui/icons-material";

const LoyaltyScreen = () => {

  if(AuthStore.user === null) return null;

  const u = AuthStore.user

  const [p,sp] = useState(0)
  const [l,sl] = useState(false)

  useEffect(() => {
    sl(true)
    PublicAPI.GetPendingBonuses().then(r=>sp(r.data)).finally(()=>sl(false))
  }, []);

  return (
    <div className={"text-black w-full flex flex-col gap-4"}>
      <div>
        За що можна отримати бонуси? Просто користуйтесь послугами нашого магазину, ви будете отримувати бонус буквально
        за все!
      </div>
      <TextField label={"Бонуси"} value={currencyStore.useCurrency(u.bonuceBalance)} InputProps={{
        readOnly: true,
      }} />

      {l?<CircularProgress/>:
        <TextField label={"Очікувані бонуси"} value={currencyStore.useCurrency(p)} InputProps={{
          readOnly: true,
        }} />
      }

      <div>
        Нещодавно відвідали нас? Чудово! Ваші бонуси вже на шляху до вас і скоро ви зможете їх використати. Зазвичай бонуси доходять вже на наступний день.
      </div>
      <TextField label={"Баланс"} value={currencyStore.useCurrency(u.balance)} InputProps={{
        readOnly: true,
      }} />
      <div>
        Баланс вашого акаунту, це реальні кошти які було внесено у якості передплати або іншим способом.
      </div>
    </div>
  );
};

export default observer(LoyaltyScreen);