const takeTime = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
};

const About = async () => {
  await takeTime();
  throw new Error("manual error");
  return <div>about page</div>;
};

export default About;
