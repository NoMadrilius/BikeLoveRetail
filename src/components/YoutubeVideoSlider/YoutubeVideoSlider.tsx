import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationButtons from "@/components/Pages/Homepage/MainContent/CustomSlider/NavigationButtons";

const YoutubeVideoSlider = () => {

    const youtubeUrls: string[] = [
        'https://www.youtube.com/watch?v=4KtgLYjMkpA',
        'https://www.youtube.com/watch?v=ej3VKMhNLV8',
        'https://www.youtube.com/watch?v=MZ_jnYZGjT0',
        'https://www.youtube.com/watch?v=xyfWV9dxHHE',
    ];

  const getEmbedUrl = (url: string): string => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

        return (
          <div className={"w-full"}>
              <NavigationButtons
                showButtons={false}
                rightText={"YouTube"}
                title={"Наш блог"}
                rightTextLink={"https://www.youtube.com/@BlackEMTB"}
              />
            <div className="w-full overflow-x-auto">
              <div className="flex gap-4 p-4 w-full max-w-none">
                  {youtubeUrls.map((v,index) =>
                    <div key={index} className="flex-shrink-0 aspect-video rounded-xl overflow-hidden shadow-lg">
                      <iframe
                        src={getEmbedUrl(v)}
                        title={`YouTube Video ${index}`}
                        className="w-full h-full"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
              </div>
              </div>
          </div>

        );
};

export default YoutubeVideoSlider;