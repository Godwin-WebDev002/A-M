import { BiCalendar, BiEnvelope } from "react-icons/bi";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { PiPhoneCall } from "react-icons/pi";

export const Subscribe = () => {
  return (
    <div className="bg-black text-white px-10 overflow-none ">
     

      <div className="border-b-2 border-white w-[100%] rounded-full" />

      <footer className="py-10 flex justify-between ">
        <div className="w-[65%] flex flex-col lg:flex-row justify-between  ">
          <div className="border-b-2 border-blue-900 lg:border-none w-fit pb-2 lg:pb-0 mb-2 lg:mb-0">
            <h1 className="font-bold mb-3">Projects</h1>

            <p>Featured Projects</p>
            <p>Completed Projects</p>
            <p>Ongoing Projects</p>
          </div>

          <div className="border-b-2 border-blue-900 lg:border-none w-fit pb-2 lg:pb-0 mb-2 lg:mb-0">
            <h1 className="font-bold mb-3">Company</h1>

            <p>About Us</p>
            <p>Our Story</p>
            <p>Blog</p>
          </div>

          <div className="border-b-2 border-blue-900 lg:border-none w-fit pb-2 lg:pb-0 mb-2 lg:mb-0">
            <h1 className="font-bold mb-3">Client Support</h1>

            <p>Project Inquiries</p>
            <p>Payment & Billing</p>
            <p>FAQ</p>
          </div>

          <div>
            <h1 className="font-bold mb-3">Follow Us</h1>

            <div className="flex gap-2">
              <BsTwitter /> <BsYoutube />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl mb-3">A&M Construction Services</h1>

          <p className="flex items-center gap-1">
            <PiPhoneCall /> +1234567890
          </p>
          <p className="flex items-center gap-1">
            {" "}
            <BiEnvelope /> AmConst@support.com
          </p>
          <p className="flex items-center gap-1">
            <BiCalendar /> <span>Mon-Sat 8am-7am GMT</span>
          </p>
        </div>
      </footer>
    </div>
  );
};
