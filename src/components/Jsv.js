import { JavascriptViewer } from "@3dweb/360javascriptviewer";
import { useEffect } from "react";

const totalFrames = 18;

const Jsv = (props) => {
  const viewer = new JavascriptViewer({
    mainHolderId: "jsv-holder",
    mainImageId: "jsv-image",
    totalFrames: totalFrames,
    speed: 70,
    defaultProgressBar: true,
    zoom: true,
    imageUrlFormat: "20180906-0xx-blauw.jpeg",
    // notificationConfig: {
    //   dragToRotate: {
    //     showStartToRotateDefaultNotification: true,
    //     mainColor: "rgba(0,0,0,0.20)",
    //     textColor: "rgba(243,237,237,0.80)",
    //   },
    // },
  });

  useEffect(() => {
    // use events for example
    viewer.events().loadImage.on((progress) => {
      // use this for your own progress bar
      console.log(`loading ${progress.percentage}%`);
    });
    viewer.events().started.on((result) => {
      // use a promise or a start event to trigger things
      // console.log(result);
    });

    viewer.start().then(() => {
      viewer.rotateDegrees(180).then(() => {
        // continue with your amazing intro
      });
    });

    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div id="jsv-holder">
      <img
        id="jsv-image"
        alt="example"
        src="/images/heritage/20180906-001-blauw.jpeg"
        showstarttorotatedefaultnotification="true"
      />
    </div>
  );
};

export default Jsv;
