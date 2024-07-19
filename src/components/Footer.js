const Footer = () => {
  return (
    <div className=" bg-slate-300  w-full">
      <div>
        <h3 className="font-bold md:text-2xl text-lg md:ml-11 ml-5 md:p-9 p-4">
          Hangry
        </h3>
      </div>
      <div className="flex justify-evenly border-b border-gray-400 pb-3">
        <ul>
          <li className="font-bold mb-3">ABOUT US</li>
          <li>Who We Are</li>
          <li>Blog</li>
          <li>Work With Us</li>
          <li>Investor Relation</li>
        </ul>

        <ul>
          <li className="font-bold mb-3">FOR RESTAURANT</li>
          <li>Partner With Us</li>
          <li>Apps for You</li>
        </ul>

        <ul>
          <li className="font-bold mb-3">LEARN MORE</li>
          <li>Privacy</li>
          <li>Security</li>
          <li>Terms</li>
          <li>Sitemap</li>
        </ul>
      </div>

      <div className=" w-full  p-4">
        <p className="w-full text-center">
          Created with ❤️ By
          <span className="font-bold">
            <a href="https://github.com/github-arpan"> Arpan </a>
          </span>
          2024 © Hangry
        </p>
      </div>
    </div>
  );
};

export default Footer;
