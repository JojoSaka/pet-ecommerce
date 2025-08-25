import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:p-20 p-6 gap-10 bg-white/5 border-t-[0.1px] border-gray-400">
      {/* Logo / Name */}
      <div className="min-w-[300px] text-2xl font-bold">Fluff & Tuff</div>

      {/* Content Sections */}
      <div className="space-y-10 w-full">
        {/* Contact Info */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          {/* Delivery Time */}
          <div className="flex gap-5">
            <div>
              <Image
                src="/icons/clock.png"
                alt="clock"
                width={30}
                height={30}
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold">Delivery Time</h4>
              <p>Mon-Sat: 9:00AM - 7:00PM</p>
              <p>Sun: 9:00AM - 5:00PM</p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex gap-5">
            <div>
              <Image
                src="/icons/telephone.png"
                alt="phone"
                width={30}
                height={30}
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold">Contact Us</h4>
              <p>+233 56-263-3546</p>
              <p>+233 56-263-3546</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-5">
            <div>
              <Image
                src="/icons/email.png"
                alt="email"
                width={30}
                height={30}
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold">Email</h4>
              <p>petshop@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Products */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold">Our Products</h4>
            <ul className="space-y-2">
              <li className="text-md">For Dogs</li>
              <li className="text-md">For Cats</li>
              <li className="text-md">Birds</li>
              <li className="text-md">For Fishes</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold">Get in Touch</h4>
            <ul className="space-y-2">
              <li className="text-md">Careers</li>
              <li className="text-md">Contact Us</li>
              <li className="text-md">FAQ</li>
              <li className="text-md">Policies</li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold">Community</h4>
            <ul className="space-y-2">
              <li className="text-md">About Us</li>
              <li className="text-md">News & Stories</li>
              <li className="text-md">Asset Portal</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-5">
            <h4 className="text-xl font-bold">Social Media</h4>
            <ul className="space-y-2">
              <li className="text-md flex items-center gap-3 cursor-pointer">
                <div>
                  <Image
                    src={"/icons/whatsapp.png"}
                    alt="whatsapp"
                    width={30}
                    height={30}
                  />
                </div>
                <p>WhatsApp</p>
              </li>
              <li className="text-md flex items-center gap-3 cursor-pointer">
                <div>
                  <Image
                    src={"/icons/instagram.png"}
                    alt="instagram"
                    width={30}
                    height={30}
                  />
                </div>
                <p>Instagram</p>
              </li>
              <li className="text-md flex items-center gap-3 cursor-pointer">
                <div>
                  <Image
                    src={"/icons/facebook.png"}
                    alt="facebook"
                    width={30}
                    height={30}
                  />
                </div>
                <p>Facebook</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
