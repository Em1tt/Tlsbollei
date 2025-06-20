import { tlsbollei } from "./ascii.tsx";
import Footer from "./Footer.tsx";
import { Menu } from "./Menu.tsx";
import { SEO } from "./SEO.tsx";

export const Main = () => (
  <div className="w-full px-4 sm:px-8">
    <SEO 
      title="tlsbollei - Cybersecurity Researcher & CTF Player"
      description="Cybersecurity research, CTF writeups, reverse engineering, and binary exploitation insights. Follow my journey through the world of information security."
      url="/"
      type="website"
    />
    <div className="max-w-none window min-w-0 w-full">
      <div className="title-bar">
        <div className="title-bar-text">Exploring - (/)</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <Menu selected="home" />
      <div className="window" role="tabpanel">
        <div className="window-body main p-4">
          <div className="overflow-x-auto">{tlsbollei}</div>
          <hr />
          <div className="grid grid-cols-12 gap-4 md:gap-8 mt-4">
            <div className="col-span-12 md:col-span-2">
              <img
                src="/tlsbollei.jpg"
                alt="tlsbollei Logo"
                className="mb-4 rounded-full w-full max-w-24 md:max-w-none mx-auto md:mx-0"
              />
            </div>
            <div className="prose max-w-none col-span-12 md:col-span-10 overflow-hidden min-w-0">
              <p className="break-words">
                Hi, I'm tlsbollei! I'm passionate about cybersecurity and
                low-level computing, with a primary focus on malware development and analysis.{" "}
              </p>
              <h2 className="mt-0 mb-0">What I do</h2>
              <ul className="break-words">
                <li>
                  <b>Reverse Engineering</b>: I enjoy dissecting software and
                  understanding how things work under the hood. I especially love analyzing malware, and I'm shifting my skills to reversing firmware/hardware.
                </li>
                <li>
                  <b>Capture The Flag (CTF)</b>: Regular participant in
                  cybersecurity competitions, primarily solving reverse engineering challenges, along with occasional cryptography.
                </li>
                <li>
                  <b>Security Research</b>: Always learning. I'm a member of multiple private security research groups where we primarily discuss windows low-level internals.
                </li>
                <li>
                  <b>Offensive/Defensive operations</b>:  Regularly participate in offensive and defensive simulations on real life digital infrastructures, with extensive experience in incident response, digital forensics, SOC analytics and leading offensive attacks on the Windows enviroment.
                </li>
              </ul>
              <h2 className="mt-0 mb-0">Interests</h2>
              <p>
                When I'm not deep in assembly code or hunting for flags, I enjoy
                exploring the intersection of technology and creativity. I also believe in the occasional walk. Nink my princess :3 !! 
              </p>
              <p>
                Feel free to reach out if you want to collaborate on security
                research or discuss the latest CTF challenges!
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
);
