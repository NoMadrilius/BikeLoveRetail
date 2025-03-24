import React from "react";
import { Button, Rating, Typography } from "@mui/material";

const ReviewsPage = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const [text, setText] = React.useState<string | null>(null);

  return (
    <div className={"text-black h-[800px] flex flex-col gap-4 w-[300px] items-center"}>
      <Typography component="legend">Будемо вдячні за позитивний відгук!</Typography>
      <Rating
        size={'large'}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setText(null)
          setValue(newValue);
        }}
      />
      <Button onClick={()=>{
        if(value && value > 3) window.open("https://g.page/r/CT7m_wBFD_7AEBM/review", '_blanc')
        else setText("Дякуємо! Ваш відгук прийнято!")
      }} disabled={!value} variant={"contained"}>Залишити</Button>
      <div>{text}</div>
    </div>
  );
};

export default ReviewsPage;