// @ts-nocheck
import { FC, useEffect } from "react";
import { styled } from "styled-components";

type Props = {};

const PhoneWidget: FC<Props> = () => {

  useEffect(() => {
    (function (d, w, s) {
      var widgetHash = "63sb7ct35kdr8z6xcg1g",
        gcw = d.createElement(s);
      gcw.type = "text/javascript";
      gcw.async = true;
      gcw.src = "//widgets.binotel.com/getcall/widgets/" + widgetHash + ".js";
      var sn = d.getElementsByTagName(s)[0];
      sn.parentNode.insertBefore(gcw, sn);
    })(document, window, "script");
  }, []);

  return <div>{/* Ваш контент или разметка, связанные с виджетом */}</div>;
};

export default PhoneWidget;

const Wrapper = styled.div``;
