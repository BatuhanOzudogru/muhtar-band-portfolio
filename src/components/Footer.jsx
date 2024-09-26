import { GiPenguin } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-xs text-neutral-300 p-4 text-right">
      <p className="inline-block">© 2022 Company, Inc. All Rights Reserved.</p>
      <p className="inline-block ml-2">
        Developed by 
        <a href="https://github.com/BatuhanOzudogru" target="_blank" className="text-red-300 hover:text-cyan-500">
          <span className="inline-flex items-center">
            <GiPenguin className="inline-block mr-1"/>
          </span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
