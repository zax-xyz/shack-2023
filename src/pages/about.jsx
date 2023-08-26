import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-green-400">This is the about page</div>
      <div>
        <Link href="/">Back to home page</Link>
      </div>
    </>
  );
};

export default About;
