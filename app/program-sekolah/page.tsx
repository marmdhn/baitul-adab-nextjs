"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProgramCard from "@/components/programCard";
import Image from "next/image";
import LevelCard from "@/components/levelCard";
import ClassCard from "@/components/classCard";

const programs = [
  {
    title: "PLAYGROUP",
    description:
      "Program ini diperuntukan bagi anak-anak yang belum memasuki Kelompok Bermain (Playgroup) atau Taman Kanak-Kanak (Kindergarten) usia 2-3 tahun. Kegiatannya dimulai dari pukul 07.00 - 16.00 WIB",
  },
  {
    title: "KINDERGARTEN",
    description:
      "Program ini diperuntukan bagi anak-anak yang belum memasuki Kelompok Bermain (Playgroup) atau Taman Kanak-Kanak (Kindergarten) usia 2-3 tahun. Kegiatannya dimulai dari pukul 07.00 - 16.00 WIB",
  },
  {
    title: "DAYCARE",
    description:
      "Program ini diperuntukan bagi anak-anak yang belum memasuki Kelompok Bermain (Playgroup) atau Taman Kanak-Kanak (Kindergarten) usia 2-3 tahun. Kegiatannya dimulai dari pukul 07.00 - 16.00 WIB",
  },
];

export default function Program() {
  const [current, setCurrent] = useState(0);

  const nextProgram = () => {
    setCurrent((prev) => (prev + 1) % programs.length);
  };

  useEffect(() => {
    const interval = setInterval(nextProgram, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full flex-col items-center overflow-x-hidden">
      <Navbar />
      {/* First Section*/}
      <section
        id="program-first"
        className="min-h-screen w-full mb-0 mt-24 lg:mt-32 flex-grow relative"
      >
        <div className="px-16 flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-0 lg:gap-4 text-3xl lg:text-5xl font-semibold">
            <span className="text-neutral text-center">Program Sekolah Di</span>
            <span className="text-secondary-content text-center">
              Baitul Adab Islamic School
            </span>
          </div>
          <div className="flex justify-center items-center program-card-container w-full h-[400px] lg:h-[400px] md:w-3/5 lg:w-2/5">
            <AnimatePresence>
              {programs.map((program, index) => {
                const isCurrent = index === current;
                const isPrev =
                  index === (current - 1 + programs.length) % programs.length;
                const isNext = index === (current + 1) % programs.length;

                return (
                  <motion.div
                    key={index}
                    className={`program-card ${
                      isCurrent ? "" : "program-card-back"
                    }`}
                    initial={{
                      opacity: isCurrent ? 0 : 0.5,
                      scale: isCurrent ? 0.9 : 0.8,
                      zIndex: isCurrent ? 1 : 0,
                    }}
                    animate={{
                      opacity: isCurrent ? 1 : 0.5,
                      scale: isCurrent ? 1 : 0.8,
                      zIndex: isCurrent ? 2 : 1,
                      translateX: isPrev ? "-50%" : isNext ? "50%" : "0%",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      zIndex: 0,
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ zIndex: isCurrent ? 1 : 0 }}
                  >
                    <ProgramCard
                      title={program.title}
                      description={program.description}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <Image
          height={100}
          width={100}
          unoptimized
          style={{ width: "100%", height: "auto" }}
          src="/image/home/UnionBg.svg"
          alt="school-pict"
          className="object-cover absolute bottom-0 lg:-bottom-20 xl:-bottom-24 z-10"
        />
      </section>
      {/* First Section*/}

      {/* Second Section*/}
      <section
        id="program-second"
        className="h-[700px] w-full relative z-20 bg-primary-content"
      >
        <div className="px-16 w-full lg:w-3/4 mx-auto p-8 flex flex-col justify-center items-center gap-4 lg:gap-8 text-3xl lg:text-5xl">
          <span className="text-base-100 font-semibold">Apa Itu Daycare?</span>
          <p className="text-lg lg:text-2xl font-normal text-center">
            Program ini merupakan unggulan kami, program yang hadir untuk
            membantu orangtua dalam proses pengasuhan tumbuh kembang anak.
            Program daycare diperuntukan bagi anak-anak usia 2-3 tahun, yang
            belum siap memasuki Kelompok Bermain (Playgroup) atau Taman
            Kanak-Kanak (Kindergarten). Kegiatannya dimulai dari pukul 07.00 -
            16.00 WIB. Adapun program After School Program diperuntukan bagi
            anak-anak yang sekolah diluar KB/TK Baitul Adab yang ingin mengikuti
            daycare setelah pulang sekolah. Kegiatannya dimulai pukul 11.30 -
            16.00 WIB
          </p>
        </div>
        <Image
          height={100}
          width={100}
          unoptimized
          style={{ width: "8%", height: "auto" }}
          src="/image/program_sekolah/baloon.svg"
          alt="school-pict"
          className="object-cover absolute bottom-50 right-20"
        />
        <Image
          height={100}
          width={100}
          unoptimized
          style={{ width: "15%", height: "auto" }}
          src="/image/program_sekolah/trees.svg"
          alt="school-pict"
          className="object-cover absolute bottom-14 left-20"
        />
        <Image
          height={100}
          width={100}
          unoptimized
          style={{ width: "100%", height: "auto" }}
          src="/image/program_sekolah/bg_tosca.svg"
          alt="school-pict"
          className="object-cover absolute bottom-0 lg:-bottom-20 xl:-bottom-44 z-10"
        />
      </section>
      {/* Second Section*/}

      {/* Third Section*/}
      <section
        id="program-third"
        className="h-auto lg:h-[900px] w-full relative z-20 bg-success"
      >
        <div className="px-16 w-full lg:w-3/4 mx-auto p-8 flex flex-col justify-center items-center gap-4 lg:gap-8">
          <span className="text-3xl lg:text-5xl text-base-100 font-semibold text-center">
            APA ITU PLAYGROUP?
          </span>
          <p className="text-lg lg:text-2xl font-normal text-center">
            Program ini diperuntukan bagi anak-anak usia 3 tahun. <br /> Saat
            ini memiliki 2 jenis layanan:
          </p>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 lg:mb-0">
            <LevelCard
              imageSrc="/image/program_sekolah/illustrationLevel.svg"
              imageAlt="school-pict"
              title="Playgroup Regular"
              description="07:00 - 11:00"
            />

            <LevelCard
              imageSrc="/image/program_sekolah/illustrationLevel.svg"
              imageAlt="school-pict"
              title="Playgroup Regular"
              description="07:00 - 11:00"
            />
          </div>
        </div>
        <Image
          height={100}
          width={100}
          unoptimized
          style={{ width: "5%", height: "auto" }}
          src="/image/program_sekolah/pencil.svg"
          alt="school-pict"
          className="object-cover absolute bottom-40 right-8 lg:right-16"
        />
        <Image
          height={100}
          width={100}
          unoptimized
          style={{ width: "10%", height: "auto" }}
          src="/image/program_sekolah/baloon.svg"
          alt="school-pict"
          className="object-cover absolute top-0 lg:top-14 left-8 lg:left-20"
        />
        <Image
          height={100}
          width={100}
          unoptimized
          style={{ width: "100%", height: "auto" }}
          src="/image/program_sekolah/bg_blue.svg"
          alt="school-pict"
          className="object-cover absolute bottom-0 lg:-bottom-20 xl:-bottom-44 z-10"
        />
      </section>
      {/* Third Section*/}

      {/* Fourth Section*/}
      <section
        id="program-fourth"
        className="h-auto lg:h-[800px] w-full relative z-20 bg-[#2278D4]"
      >
        <div className="px-16 w-full lg:w-3/4 mx-auto p-8 flex flex-col justify-center items-center gap-4 lg:gap-8">
          <span className="text-3xl lg:text-5xl text-base-100 font-semibold text-center">
            APA ITU KINDEGARTEN?
          </span>
          <p className="text-lg lg:text-2xl font-normal text-center">
            Program ini diperuntukan bagi anak-anak usia minimal 4 tahun. <br />
            Saat ini memiliki 2 jenis layanan:
          </p>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 lg:mb-0">
            <LevelCard
              imageSrc="/image/program_sekolah/illustrationLevel.svg"
              imageAlt="school-pict"
              title="Kindegarten Regular"
              description="07:00 - 11:00"
            />

            <LevelCard
              imageSrc="/image/program_sekolah/illustrationLevel.svg"
              imageAlt="school-pict"
              title="Kindegarten Regular + Daycare"
              description="07:00 - 11:00"
            />
          </div>
        </div>
        <Image
          height={100}
          width={100}
          unoptimized
          style={{ width: "15%", height: "auto" }}
          src="/image/program_sekolah/kidsPlane.svg"
          alt="school-pict"
          className="object-cover absolute bottom-40 left-5 lg:left-20"
        />
        <Image
          height={100}
          width={100}
          unoptimized
          style={{ width: "10%", height: "auto" }}
          src="/image/program_sekolah/baloon.svg"
          alt="school-pict"
          className="object-cover absolute top-10 right-2"
        />
      </section>
      {/* Fourth Section*/}

      {/* Fifth Section*/}
      <section id="program-fifth" className="h-auto lg:h-[700px] w-full">
        <div className="px-16 h-full w-full lg:w-3/4 mx-auto p-8 flex flex-col justify-center items-center gap-4 lg:gap-8">
          <span className="text-secondary-content text-3xl lg:text-5xl font-semibold">
            Kurikulum
          </span>
          <p className="text-neutral text-lg lg:text-2xl font-normal text-center">
            Sekolah kami menggunakan kurikulum nasional (merdeka) yang
            diintegrasikan dengan dan ke-Islaman, yang kami sebut dengan
            kurikulum Baitul Adab, untuk memberikan pengalaman akademik yang
            dinamis dan komprehensif. Pembelajaran aktif (active learning)
            merupakan metodologi yang kami gunakan. Program belajar mengajar
            mengembangkan pemahaman konsep komprehensif dengan menempatkan
            anak-anak sebagai pusat dari proses. Perencanaan, pengajaran, dan
            penilaian berfokus pada tujuan pendidikan jangka panjang, dengan
            refleksi dan komunikasi berkala antara sekolah, anak-anak, dan orang
            tua.
          </p>
        </div>
      </section>
      {/* Fifth Section*/}

      {/* Sixth Section*/}
      <section id="program-sixth" className="h-auto w-full mb-8">
        <div className="px-16 h-full w-3/4 mx-auto p-8 flex flex-col justify-center items-center gap-4 lg:gap-8">
          <span className="text-secondary-content text-3xl text-center lg:text-5xl font-semibold">
            Kelas & Jadwal Harian
          </span>

          <div className="flex flex-col lg:flex-row gap-16">
            <ClassCard
              imageSrc="/image/program_sekolah/classImage.png"
              imageAlt="school-pict"
              title="KB"
              subTitle="Regular"
              description="Program Kelompok Bermain regular berlangsung 3 hari, senin, rabu dan jumat mulai pukul 08.00 - 11.00 WIB."
              unggulan={false}
            />
            <ClassCard
              imageSrc="/image/program_sekolah/classImage.png"
              imageAlt="school-pict"
              title="KB + TK"
              subTitle="Daycare"
              description="Adapun program KB dan TK plus Daycare berlangsung selama 5 hari mulai pukul 07.00 - 16.00 WIB"
              unggulan={true}
            />
            <ClassCard
              imageSrc="/image/program_sekolah/classImage.png"
              imageAlt="school-pict"
              title="TK"
              subTitle="Regular"
              description="Adapun program KB dan TK plus Daycare berlangsung selama 5 hari mulai pukul 07.00 - 16.00 WIB"
              unggulan={false}
            />
          </div>
        </div>
      </section>
      {/* Sixth Section*/}

      <Footer />
    </div>
  );
}
