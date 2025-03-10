import React from 'react';
import {User} from "@/dataTransferObjects/entities/User";

const GeneratedUserIcon = (p:{user:User}) => {
    return (
        <div className="w-14 h-14 rounded-full bg-black text-white font-bold flex justify-center items-center">
            {p.user.firstName&&p.user.firstName[0] + p.user.lastName&&p.user.lastName[0]}
        </div>
    );
};

export default GeneratedUserIcon;