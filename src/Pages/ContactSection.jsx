import React from "react";
import {
  BtnActive,
  h2Style,
  sectionBaseStyle,
} from "../Style/ComponentsStyle";
import {
  Send,
  MessageCircleMore,
  MailCheck,
  MapPin,
  Phone,
} from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { motion } from "motion/react";

const ContactSection = () => {
  const socialParentVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.25,
      },
    },
  };

  const socialChildVariant = {
    hidden: {
      opacity: 0,
      x: 1000,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
      },
    },
  };
  const isMobile = window.innerWidth <= 768;
  const contactDetails = [
    {
      id: 1,
      title: "Email Us",
      desc: "Response in 2-4 hours",
      link: "hello.com@productdemo.com",
      icon: <MailCheck size={isMobile ? 25 : 35} />,
    },
    {
      id: 2,
      title: "Call Us",
      desc: "Available 9AM - 6PM EST",
      link: "+1 (555) 987-6543",
      icon: <Phone size={isMobile ? 25 : 35} />,
    },
    {
      id: 3,
      title: "Visit Our Office",
      desc: "Open Monday - Friday",
      link: "4821 Broadway Street, New York, NY 10013",
      icon: <MapPin size={isMobile ? 25 : 35} />,
    },
  ];

  const socialLinks = [
    {
      icon: <BsLinkedin size={isMobile ? 15 : 20} />,
      link: "https://www.linkedin.com/in/vivek-sharma-webdev/",
      status: true,
    },
    {
      icon: <BsTwitterX size={isMobile ? 15 : 20} />,
      link: "#",
      status: false,
    },
    {
      icon: <BsGithub size={isMobile ? 15 : 20} />,
      link: "https://github.com/Vivek-Sharma-dev",
      status: true,
    },
    {
      icon: <FaDiscord size={isMobile ? 15 : 20} />,
      link: "https://www.instagram.com/viveksharma.dev/",
      status: true,
    },
  ];
  return (
    <section id="contact" className={sectionBaseStyle}>
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className={h2Style}>Contact</h2>
          <p className="text-gray-400">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-10 mt-10 ">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 40, damping: 6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="p-6 text-center bg-white/3 rounded-2xl border-(--secondary-color) lg:mt-25 border-t-5"
          >
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
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint.
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
                className={`${BtnActive} hover:-translate-y-1 duration-300 transition-all group after:w-20! after:bg-white/40!  w-full rounded-2xl! flex gap-3 items-center justify-center`}
              >
                Send Message
                <Send
                  size={isMobile ? 25 : 30}
                  fill="white"
                  className="transition-all duration-300 text- group-hover:translate-x-2 text-(--secondary-color)"
                />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 40, damping: 7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className={h2Style}>Ready to Transform Your Ideas?</h2>
            <p className="text-gray-400 font-medium">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque ipsa
              quae ab illo inventore.
            </p>
            {contactDetails.map((contact) => (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 40, damping: 7 }}
                viewport={{ once: true, amount: 0.2 }}
                key={contact.id}
                className="flex items-center gap-5 my-5 group hover:border hover:border-(--secondary-color)/40 rounded-2xl p-5 bg-white/3"
              >
                <span className="p-3 text-(--secondary-color) bg-(--secondary-color)/10 rounded-2xl group-hover:bg-(--secondary-color) group-hover:text-white transition-all duration-300">
                  {contact.icon}
                </span>
                <div>
                  <h4 className="font-medium">{contact.title}</h4>
                  <p className="mb-3 font-medium">{contact.link}</p>
                  <span className="text-sm font-medium text-gray-400">
                    {contact.desc}
                  </span>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 40, damping: 7 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex gap-5 bg-blue-600/10 rounded-2xl px-5 py-8"
            >
              <div className="flex flex-col gap-1 text-center">
                <span className="text-(--secondary-color) text-2xl font-bold">
                  24h
                </span>
                <span className="text-gray-400 font-medium">
                  Average Response
                </span>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <span className="text-(--secondary-color) text-2xl font-bold">
                  98%
                </span>
                <span className="text-gray-400 font-medium">
                  Client Satisfaction
                </span>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <span className="text-(--secondary-color) text-2xl font-bold">
                  150+
                </span>
                <span className="text-gray-400 font-medium">
                  Project Delivered
                </span>
              </div>
            </motion.div>
            <motion.div className="text-center mt-5 mb-8">
              <span>Connect With Us</span>
              <motion.div
                variants={socialParentVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex justify-center gap-2 mt-5"
              >
                {socialLinks.map((link, idx) => (
                  <motion.a
                    variants={socialChildVariant}
                    key={idx}
                    onClick={(e) => !link.status && e.preventDefault()}
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/3 hover:-translate-y-1 hover:bg-(--secondary-color) hover:text-white transition-all duration-300 p-3 rounded-2xl text-(--secondary-color)"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
