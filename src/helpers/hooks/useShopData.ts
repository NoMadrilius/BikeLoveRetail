import { useEffect, useState } from "react";

export type ShopData = {
  id: number;
  name: string;
  address: string;
  phone: string;
  storageId: number;
  geoData: string;
  workForTakeout: boolean;
};

const useShopData = (): [ShopData[], boolean, Error | null] => {
  const [shopData, setShopData] = useState<ShopData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const response = await fetch(
          "https://api.bikelove.com.ua/api/shop/getpublic"
        );
        if (response.ok) {
          const data = await response.json();
          setShopData(data);
        } else {
          setError(new Error("Failed to fetch shop data"));
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchShopData();
  }, []);

  return [shopData, loading, error];
};

export default useShopData;
