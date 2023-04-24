import React, { useEffect, useState } from "react";
import Loading from "./loading";
import {speech} from "../../src/db.json"

export default function Speech({ datas }) {
  const [imageSpeech, setImageSpeech] = useState(null);
  useEffect(() => {
    setImageSpeech(speech);
  }, []);

  if (!imageSpeech) {
    return <Loading />;
  }
  return (
    <div className="w-full flex justify-center items-center relative">
      <div className="flex flex-col w-full h-max">
        <div className="flex flex-col w-full ">
          <img
            src={imageSpeech[0].src}
            alt={imageSpeech[0].alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
