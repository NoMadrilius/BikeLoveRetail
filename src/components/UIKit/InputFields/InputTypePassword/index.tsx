import {IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import Visibility from './../../../../../public/icons/eye2.svg';
import VisibilityOff from './../../../../../public/icons/eye1.svg';
import Image from "next/image";
import React, { useState } from "react";

const PasswordInput = ({
  label = "",
  placeholder = "",
                         value,setValue,className=""
}: {
  label?: string;
  placeholder?: string;
  value:string
  setValue:(v:string)=>void,
  className?: string
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className={`w-full relative flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-t-grey font-light leading-[120%]">{label}</label>
      )}
      <div className="flex relative">
        <OutlinedInput
            id="outlined-adornment-password"
            type={passwordVisible ? 'text' : 'password'}
            fullWidth
            value={value}
            onChange={(v)=>setValue(v.target.value)}
            sx={{borderRadius:"8px"}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={()=>{setPasswordVisible(!passwordVisible)}}
                    edge="end"
                >
                  {passwordVisible ?<Image width={24} height={24} src={"/icons/eye1.svg"} alt={"eye"}/>: <Image width={24} height={24} src={"/icons/eye2.svg"} alt={"eye"}/>}
                </IconButton>
              </InputAdornment>
            }
        />
      </div>
    </div>
  );
};

export default PasswordInput;