import React from "react";
import {
  h2Style,
  projectBtnActive,
  sectionBaseStyle,
} from "../Style/ComponentsStyle";
import { Send, MessageCircleMore, MailCheck } from "lucide-react";

const ContactSection = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <section id="contact" className={sectionBaseStyle}>
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className={h2Style}>Contact</h2>
          <p className="text-gray-400">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex gap-10 mt-10 ">
          <div className="max-w-lg p-6 text-center bg-white/3 rounded-2xl border-(--secondary-color) border-t-5">
            <div className="flex items-center justify-center p-2 mb-4">
              <span className="p-2 bg-(--secondary-color) rounded-2xl">
                <MessageCircleMore
                  className="text-(--secondary-color)"
                  size={isMobile ? 25 : 35}
                  fill="white"
                />
              </span>
            </div>

            <h3 className="text-xl font-semibold text-white lg:text-3xl">
              Let’s start a conversation
            </h3>
            <p className="mt-1 mb-6 text-sm text-gray-400">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <input
                title="Please fill out this field"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-white border-2 border-gray-500 outline-none rounded-2xl placeholder:text-gray-400 focus:ring-2 focus:ring-white/30"
                />
                <input
                title="Please fill out this field"
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 text-white border-2 border-gray-500 outline-none rounded-2xl placeholder:text-gray-400 focus:ring-2 focus:ring-white/30"
                />
              </div>

              <input
              title="Please fill out this field"
                type="text"
                placeholder="What's this about?"
                className="w-full px-4 py-3 text-white border-2 border-gray-500 outline-none rounded-2xl placeholder:text-gray-400 focus:ring-2 focus:ring-white/30"
              />

              <textarea
              title="Please fill out this field"
                rows="4"
                placeholder="Tell us more about your project..."
                className="w-full px-4 py-3 text-white border-2 border-gray-500 rounded-2xl placeholder:text-gray-400 focus:ring-2 focus:ring-white/30"
              />

              <button
                type="submit"
                className={`${projectBtnActive} hover:-translate-y-1 duration-300 transition-all group after:w-20! after:bg-white/40!  w-full rounded-2xl! flex gap-3 items-center justify-center`}
              >
                Send Message
                <Send size={isMobile ? 25 : 30} fill="white" className="transition-all duration-300 text- group-hover:translate-x-2 text-(--secondary-color)" />
              </button>
            </form>
          </div>

          <div>
            <h2 className={h2Style}>Ready to Transform Your Ideas?</h2>
            <p className="text-gray-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore.</p>
          <div className="flex items-center gap-5 group hover:border hover:border-(--secondary-color)/40 rounded-2xl p-5 bg-white/3"> 
            <span className="p-3 text-(--secondary-color) bg-(--secondary-color)/10 rounded-2xl group-hover:bg-(--secondary-color) group-hover:text-white transition-all duration-300">
                <MailCheck />
            </span>
            <div>
                <h4 className="font-medium">Email Us</h4>
                <p className="mb-3 font-medium">hello@productdemo.com</p>
                <span className="text-sm font-medium text-gray-400">Response in 2-4 hours</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
