/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";

import { Icon, LatLngExpression } from "leaflet";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import Link from "next/link";

import { FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Map = () => {
  return (
    <>
      <motion.section
        id="more"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-footer bg-cover bg-no-repeat pt-16 text-white mt-20"
      >
        <div className="container mx-auto">
          {/* logo */}
          <div className="flex flex-col justify-between xl:flex-row">
            <div className="w-[300px] mb-8 xl:mb-0">
              <Link href="/">
                <Image src="/logo.svg" width={90} height={36} alt="image" />
              </Link>
            </div>
            {/* grid Items  */}
            <div className=" flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
              {/* blog */}
              <div>
                <h4 className="font-semibold mb-5">Blog</h4>
                <ul className="flex flex-col gap-y-6 text-sm">
                  <li>
                    <Link href="/">
                      Sit pellentesque neque egestas quis dolor, sit{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Arcu et tincidunt dictum nunc ut nisi, dolor euismod
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      Tempor, volutpat nulla sed posuere orci ac diam integer
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      Ultrices consectetur orci ultrices viverra mauris laoreet
                      tincidunt at
                    </Link>
                  </li>
                </ul>
              </div>
              {/* item */}
              <div>
                {" "}
                <h4 className="font-semibold mb-5">New Item</h4>
                <ul className="flex flex-col gap-y-6 text-sm">
                  <li>
                    <Link href="/">
                      Sit pellentesque neque egestas quis dolor, sit{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Arcu et tincidunt dictum nunc ut nisi, dolor euismod
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      Tempor, volutpat nulla sed posuere orci ac diam integer
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      Ultrices consectetur orci ultrices viverra mauris laoreet
                      tincidunt at
                    </Link>
                  </li>
                </ul>
              </div>
              {/* social */}
              <div>
                {" "}
                <h4 className="font-semibold  mb-5">Socials</h4>
                <ul className="flex  gap-x-6 text-sm">
                  <li>
                    <Link href="/">
                      <FaYoutube fontSize={35} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaFacebook fontSize={35} />
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <FaInstagramSquare fontSize={35} />
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <FaXTwitter fontSize={35} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* copyright text */}
          <div className=" py-4 border-t border-white/10">
            <p className="text-white/60 text-center text-sm">
              {" "}
              Copyright &copy; W'Food 2023
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Map;
