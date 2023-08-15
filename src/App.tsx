import Button from "./Components/Button";
import { cn } from "./cn-utility-function";

const App = () => {
  return (
    <div className="flex flex-col  items-center">
      <span className={cn("text-3xl underline text-blue-500 mb-5")}>
        ClassNames and TwMerge Tutorial
      </span>
      <Button
        variant="stop"
        className="text-blue-500 rounded-full"
        onClick={() => alert("df")}
        disabled={true}
      >
        Stop
      </Button>

      <Button variant="go" className=" rounded-md " onClick={() => alert("df")}>
        Go
      </Button>
    </div>
  );
};

export default App;
