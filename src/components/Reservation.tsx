"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      id="reservation"
      className="xl:my-32 xl:h-[1020px] xl:bg-reservation xl:bg-no-repeat xl:flex xl:flex-col text-white xl:justify-end xl:items-end"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-black w-full xl:max-w-[868px] min-h-[518px] p-8 md:m-14"
      >
        <h2 className=" mb-9 capitalize">book a table</h2>
        <ReservationForm />
      </motion.div>
    </motion.section>
  );
};

export default Reservation;
