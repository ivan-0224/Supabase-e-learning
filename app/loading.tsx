import { RingLoader } from "react-spinners";
export default function loading() {
  return (
    <div className="w-full h-svh flex items-center justify-center">
      <RingLoader color="#0090ff" />
    </div>
  );
}
