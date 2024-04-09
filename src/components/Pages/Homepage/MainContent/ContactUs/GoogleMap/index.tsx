import { GoogleMap, OverlayView, useLoadScript } from "@react-google-maps/api";
import Image from "next/image";

const Map = () => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey || "",
  });

  if (!isLoaded) return <div>Loading....</div>;

  const center = { lat: 50.47859184922369, lng: 30.40536527166876 };

  return (
    <div className="flex flex-col justify-center items-center gap-20 w-full rounded-lg overflow-hidden xl:max-w-[415.29px] xl:max-h-[343.21px]">
      <GoogleMap
        zoom={18}
        center={center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "100%", height: "400px", margin: "auto" }}
      >
        return (
        <OverlayView
          position={{ lat: center.lat, lng: center.lng }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div
            className="size-[40px] flex items-cetner justify-center rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, #F01B74, #FF6064)",
            }}
          >
            <Image
              src={"/images/uikit/buttons/marker.svg"}
              alt={"Каталог товарів"}
              width={24}
              height={24}
            />
          </div>
        </OverlayView>
        );
      </GoogleMap>
    </div>
  );
};

export default Map;
