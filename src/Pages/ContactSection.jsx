import React, { useState } from "react";
import { BtnActive, h2Style, sectionBaseStyle } from "../Style/ComponentsStyle";
import {
  Send,
  MessageCircleMore,
  MailCheck,
  MapPin,
  Phone,
  CircleX,
} from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [state, handleSubmit] = useForm("xykkyzkz");
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      setIsSubmitted(true);
    }
    e.target.reset();
  };

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
      name: "Linkedin Link",
    },
    {
      icon: <BsTwitterX size={isMobile ? 15 : 20} />,
      link: "#",
      status: false,
      name: "Twitter Link",
    },
    {
      icon: <BsGithub size={isMobile ? 15 : 20} />,
      link: "https://github.com/Vivek-Sharma-dev",
      status: true,
      name: "Github Link",
    },
    {
      icon: <FaDiscord size={isMobile ? 15 : 20} />,
      link: "https://www.instagram.com/viveksharma.dev/",
      status: true,
      name: "Discord Link",
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
          <h2 className={h2Style}>Contact Us</h2>
          <p className="text-gray-400">
            Have a question or a project in mind? Reach out to us and let's
            start building the future together.
          </p>
        </motion.div>
        <div className="flex flex-col items-center lg:flex-row gap-10 mt-10 ">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 40, damping: 6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="px-6 py-10 text-center bg-white/3 rounded-2xl border-(--secondary-color) lg:mt-25 border-t-5"
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
              Have a specific inquiry or just want to explore how we can work
              together? Fill out the form, and our team will get back to you
              within 24 hours.
            </p>

            <form onSubmit={formSubmitHandler} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <input
                  title="Please enter you name"
                  type="text"
                  placeholder="Your Name"
                  name="Name"
                  aria-label="Full Name"
                  required
                  className="w-full px-4 py-3 text-white border-2 border-gray-500 outline-none rounded-2xl placeholder:text-gray-400 focus:ring-2 focus:ring-white/30"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <input
                  title="Please enter you email"
                  type="email"
                  placeholder="Email Address"
                  name="Email"
                  aria-label="Email"
                  required
                  className="w-full px-4 py-3 text-white border-2 border-gray-500 outline-none rounded-2xl placeholder:text-gray-400 focus:ring-2 focus:ring-white/30"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <input
                title="Please fill out this field"
                type="text"
                placeholder="What's this about?"
                name="Subject"
                aria-label="subject"
                className="w-full px-4 py-3 text-white border-2 border-gray-500 outline-none rounded-2xl placeholder:text-gray-400 focus:ring-2 focus:ring-white/30"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />

              <textarea
                title="Please fill out this field"
                rows="4"
                name="Message"
                aria-label="message"
                placeholder="Tell us more about your project..."
                className="w-full px-4 py-3 text-white border-2 border-gray-500 rounded-2xl placeholder:text-gray-400 focus:ring-2 focus:ring-white/30"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                name="submit"
                disabled={state.submitting || state.submitting || isSubmitted}
                type="submit"
                aria-label="Submit Form"
                className={`${BtnActive} ${
                  isSubmitted &&
                  state.succeeded &&
                  "pointer-events-none opacity-50"
                } hover:-translate-y-1 duration-300 transition-all group after:w-20! after:bg-white/40!  w-full rounded-2xl! flex gap-3 items-center justify-center`}
              >
                {state.submitting
                  ? "Sending..."
                  : isSubmitted && state.succeeded
                  ? "Message Sent"
                  : "Send Message"}
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
              We’re here to help you scale your digital presence. Whether you’re
              a startup or an established brand, our team is ready to deliver
              high-impact solutions tailored to your needs.
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
                    aria-label={link.name}
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
        <AnimatePresence>
          {state.succeeded && isSubmitted && (
            <motion.div
              layout
              key="Success-modal"
              initial={{ opacity: 0, y: -500, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, x: 500, scale: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className=" px-3 z-999999 fixed top-1/3 w-full md:w-1/2 lg:top-4/12 left-1/2 lg:left-1/2 -translate-x-1/2  "
            >
              <div className=" text-center px-5 flex flex-col items-center gap-5 backdrop-blur-[7px] bg-white/10 rounded-2xl hover:shadow-md hover:shadow-blue-600 transition-all duration-300 text-green-500 py-15 relative">
                <span
                  className="absolute top-5 right-5 cursor-pointer hover:text-red-500 transition-all duration-300 active:scale-90"
                  onClick={() => setIsSubmitted(false)}
                >
                  <CircleX />
                </span>
                <h2 className="text-lg lg:text-2xl font-bold">
                  🙏🙏Radhe Radhe🙏🙏
                </h2>
                <span className="mr-2 lg:text-lg font-medium">
                  Thanks for your message! We'll get back to you soon.
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;
