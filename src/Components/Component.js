import React from "react";
import styles from "./Component.module.css";

const Component = ({ title, source, index }) => {
  const [width, setWidth] = React.useState(null);

  const getFunction = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window && getFunction();
  }, [window.innerWidth]);
  return (
    <>
      {width === null ||
        (width >= 980 && (
          <div
            className={styles?.outer}
            style={{
              borderRight: index !== 2 ? "solid 3px black" : "solid 0px black",
            }}
          >
            <div>
              <img src={source} alt="Row" className={styles?.imageStyle} />
            </div>
            <div className={styles.fontStyle}>{title}</div>
          </div>
        ))}
      {width && width < 980 && (
        <div
          className={styles?.outer}
          style={{
            borderBottom: index !== 2 ? "solid 3px black" : "solid 0px black",
            flexDirection: "column",
            flexBasis: "100%",
          }}
        >
          <div>
            <img src={source} alt="Row" className={styles?.imageStyle} />
          </div>
          <div className={styles.fontStyle}>{title}</div>
        </div>
      )}
    </>
  );
};

export default Component;
