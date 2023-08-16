"use client";

const Footer = () => {
  return (
    <footer className="h-40 bg-blue-600">
      <div
        className="flex justify-around items-center"
        style={{ height: "100%" }}
      >
        <div className="text-center p-5 ">
          <h1>Welcome to work manager</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ad
            eaque perspiciatis, earum expedita minus corporis cumque harum ipsa
          </p>
        </div>
        <div className="w-1/6 text-center">
          <h1>Important Links</h1>
          <ul>
            <li>
              <a href="">Linkedin</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
