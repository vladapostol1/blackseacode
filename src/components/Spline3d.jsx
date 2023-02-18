import Spline from "@splinetool/react-spline";

const Spline3d = ({ loading, onLoadChange }) => (
  <Spline
    onLoad={() => onLoadChange(!loading)}
    scene="https://prod.spline.design/hdWJfvBQWl6mcDrQ/scene.splinecode"
    className="h-[100%]"
  />
);

export default Spline3d;
