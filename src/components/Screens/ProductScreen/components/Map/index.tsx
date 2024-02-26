import { ShopData } from "@/helpers/hooks/useShopData";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  OverlayView,
} from "@react-google-maps/api";
import { styled } from "styled-components";
import { MdPedalBike } from "react-icons/md";

const Map = ({ shopData }: { shopData: ShopData[] }) => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey || "",
  });

  if (!isLoaded) return <div>Loading....</div>;

  const center = { lat: 50.47859184922369, lng: 30.40536527166876 };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <GoogleMap
        zoom={18}
        center={center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "100%", height: "400px", margin: "auto" }}
      >
        {shopData.map((geo) => {
          const [latitude, longitude] = geo.geoData.split(",");

          return (
            <OverlayView
              position={center}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <StyledMarkerContainer>
                <CompanyTitle>BikeLove</CompanyTitle>
                <Availibility>В наявності</Availibility>
              </StyledMarkerContainer>
            </OverlayView>
          );
        })}
      </GoogleMap>
    </div>
  );
};

export default Map;

const StyledMarkerContainer = styled.div`
  border: 2px solid rgb(109, 234, 95);
  background-color: rgb(75, 75, 75);
  padding: 10px;
  font-weight: bold;
  position: absolute;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const CompanyTitle = styled.span`
  color: white;
  font-size: 24px;
`;

const Availibility = styled.p`
  color: rgb(109, 234, 95);
  font-size: 16px;
`;
