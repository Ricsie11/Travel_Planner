import { Mail, Phone } from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
     <footer className="border-t bg-gray-400 border-gray-200 dark:bg-[#1b1818] py-6">
    {/* <footer className="bg-white border-t mt-16"> */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>

          <div className="flex items-center gap-2 text-gray-800 dark:text-gray-400 mb-2">
            <Mail size={18} />
            <span>wisdomalfred964@gmail.com</span>
          </div>

          <div className="flex items-center gap-2 text-gray-800 dark:text-gray-400">
            <Phone size={18} />
            <span>+234 9021704294</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-800 dark:text-gray-400">
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>

          <div className="flex gap-4">
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-400 cursor-pointer">
              <Facebook size={18} />
            </div>
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-400 cursor-pointer">
              <Twitter size={18} />
            </div>
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-400 cursor-pointer">
              <Instagram size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t text-center dark:text-white transition py-4 text-black mx-auto w-1/2 text-sm">
        © 2026 Atlas. All rights reserved.
      </div>
    </footer>
  );
}
