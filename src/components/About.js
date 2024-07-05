import AboutInfoClass from "./AboutInfo.";

const About = () => {
  return (
    <div className="mt-28 h-screen">
      <h1>About</h1>
      <AboutInfoClass
        name={"Arpan Chakraborty"}
        location={"Barasat , West Bengal"}
      />
    </div>
  );
};
export default About;
