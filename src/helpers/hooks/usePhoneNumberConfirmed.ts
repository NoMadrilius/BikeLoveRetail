import { useEffect, useState } from "react";
import axiosInstance from "@/api/axiosInstance";

const usePhoneNumberConfirmed = () => {
  const [phoneNumberConfirmed, setPhoneNumberConfirmed] = useState(true);

  useEffect(() => {
    const authStoreData = localStorage.getItem("AuthStore");
    if (authStoreData) {
      try {
        const token = JSON.parse(authStoreData);
        if (token && token.accessToken) {
          axiosInstance
            .get("/user/getself", {
              headers: {
                Authorization: `Bearer ${token.accessToken}`,
              },
            })
            .then((response) => {
              const { phoneNumberConfirmed } = response.data;
              setPhoneNumberConfirmed(phoneNumberConfirmed);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        } else {
          console.error("Access token not found in authStoreData");
        }
      } catch (error) {
        console.error("Error parsing authStoreData:", error);
      }
    } else {
      console.error("AuthStore data not found in localStorage");
    }
  }, []);

  return phoneNumberConfirmed;
};

export default usePhoneNumberConfirmed;
