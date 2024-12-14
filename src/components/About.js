import { useAppSelector } from "../redux/hooks/hook";

const About = () => {
  const count = useAppSelector((store) => store.counter);
  return (
    <div>
      <p>Current Store value is : {count}</p>
    </div>
  );
};

export default About;
