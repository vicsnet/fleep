import { CSSProperties } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
import CircleLoader from "react-spinners/CircleLoader";

const override: CSSProperties = {
  display: "block",
  margin: "15% auto",
  Color: "red",
};

const Spinner = () => {
  return (
    <div
      className="fixed top-0 w-[100%] h-screen"
      style={{ background: "rgba(20, 24, 31, 0.25)" }}
    >
      <div className="">
        <CircleLoader
          color="#1A1941"
          // loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Spinner;
