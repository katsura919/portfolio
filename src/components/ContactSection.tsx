"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 bg-gray-800/60 rounded-full border border-gray-700 text-gray-300 text-sm backdrop-blur-xl">
            Get In Touch
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Contact Me
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-8 mt-12"
        >
          <div className="flex items-center justify-center gap-8">
            <a
              href="mailto:katsura919@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors p-4 rounded-full hover:bg-gray-800/50"
            >
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/katsura919"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors p-4 rounded-full hover:bg-gray-800/50"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jan-paul-llatuna-049325334/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors p-4 rounded-full hover:bg-gray-800/50"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Katsura. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
