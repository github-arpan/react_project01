const Footer = () => {
  return (
    <div className=" bg-slate-300  w-full">
      <div>
        <h3 className="font-bold text-2xl ml-11 my-11 p-9">Hangry</h3>
      </div>
      <div className="flex justify-evenly">
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

      <div>
        <p className="text-center my-6 py-6">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2024 © Hangry ™ Ltd. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
