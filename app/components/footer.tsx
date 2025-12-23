const Footer = () => {
  return (
    <>
      <div className="px-8 pb-8 z-40 w-full text-neutral-900">
        <div>
          <div className="border border-neutral-200" />
        </div>
        <div className="space-y-2 pt-10 flex flex-col xl:flex-row lg:flex-row md:flex-row items-center justify-between">
          <p>© 2025 WutDEV All rights reserved.</p>
          <div className="flex gap-x-8">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
