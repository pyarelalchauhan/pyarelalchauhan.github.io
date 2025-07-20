import React from "react";
import { FaMailBulk } from "react-icons/fa";

const GetInTouch: React.FC = () => {
  return (
    <section className="px-2 text-gray-800">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-400">
        Get In Touch
      </h2>

      <p className="mb-4 text-xs md:text-base text-gray-400 leading-relaxed">
        If you&apos;re interested in any of the topics, have questions, suggestions,
        ideas, comments, or just want to chat, I&apos;m happy to get in touch! The
        easiest way is via <a className="underline text-blue-600" href="mailto:pyare45@gmail.com">email</a> — I do my best to get back to you quickly.
        Please feel free to reach out, looking forward to hearing from you!
      </p>

      <div className="mt-6 space-y-2 text-xs md:text-base text-gray-400 flex items-center justify-between">
        <p className="flex items-center justify-center gap-2">
          <FaMailBulk />
          <a href="mailto:pyare45@gmail.com" className="text-gray-400 underline">
            pyare45@gmail.com
          </a>
        </p>
        <div>
          <p>📍 Room 45-601N</p>
          <p>🏫 77 Massachusetts Avenue</p>
          <p>📮 Cambridge, MA 02139, USA</p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
