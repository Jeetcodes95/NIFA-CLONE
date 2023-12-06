'use client'
import React from "react";
import StudentWork from "../StudentWorks/StudentWork.js";

const page = () => {

  const ourCourses = [
    {
      srcUrl: "https://www.nifafinearts.com/images/animation-sketching.jpg",
      title: "6 Months Diploma in Sketching & Oil Painting - Regular/Part time",
    },
    {
      srcUrl: "https://www.nifafinearts.com/images/3mchc.jpg",
      title: "1 to 3 Months Certificate Hobby Course (Regular and Weekend)",
    },
    {
      srcUrl: "https://www.nifafinearts.com/images/1ydfa.jpg",
      title: "One Year Diploma in Fine Arts-Regular/Part Time-Level-3",
    },
    {
      srcUrl: "https://www.nifafinearts.com/images/2ydfa.jpg",
      title: "1Two years Advance Diploma in Fine Arts - Regular/Part time",
    },
    {
      srcUrl: "https://www.nifafinearts.com/images/entrance-prepration.jpg",
      title: "Entrance Preparation For N.I.D",
    },
    {
      srcUrl: "https://www.nifafinearts.com/images/bfa.jpg",
      title: "B.F.A from UGC Recognised University",
    },
    {
      srcUrl: "https://www.nifafinearts.com/images/ma.jpg",
      title: "M.A in Painting from UGC Recognised University",
    },
    {
      srcUrl: "https://www.nifafinearts.com/images/entrance-prepration3.jpg",
      title: "Entrance preparation for B.F.A",
    },
    {
      srcUrl: "https://www.nifafinearts.com/images/kidl1.jpg",
      title: "Kids 1 year Diploma (Level-1)",
    },
    {
      srcUrl: "https://www.nifafinearts.com/images/kidl2.jpg",
      title: "Kids 1 year Diploma (Level-2)",
    },
    {
      srcUrl: "https://www.nifafinearts.com/images/entrance-prepration2.jpg",
      title: "Entrance Preparation for NIFT",
    },
    {
      srcUrl: "https://www.nifafinearts.com/images/hccfk.jpg",
      title: "3 Months Hobby Certificate Course For Kids",
    },
  ];

  const testimonials = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/VrGcY2k5zuc?si=xpa_XrB9aTcl3Jvc",
    },
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/EnYCmNGoySc?si=xA4B6bD6c6KoZt_c",
    },
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/iX6KgBTH__E?si=0Q848q7UoK2d5n4U",
    },
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/hvjJv1zVl2k?si=Ra0Jld3JyhAgQyUG",
    },
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/S5AUDt6999o?si=MDbhvO8VE_idjmYc",
    },
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/GfialCtEAYk?si=WlGrbu4RJhyA0HDU",
    },
  ];

  return (
    <>
      {/* Section-One */}
      <div className="text-center px-3 py-14 ">
        <div className="font-['spartan'] font-black text-3xl max-md:text-2xl my-8">
          Welcome To National Institute of Fine Arts
        </div>
        <p className="font-['spartan'] max-md:px-1 px-32 py-2">
          National Institute of Fine Arts (NIFA) is a national center for
          education in arts, fostering the excellence of emerging and
          established artists and advancing art to create a more human world.
          National Institute of Fine Arts (NIFA) was established by MRS RENU
          KHERA in Delhi and NCR of Delhi on July 2005. Institute established
          another unit in Panna (M.P) which is affiliated to Raja Mansingh Music
          and Arts University (Gwalior). Its aim is to provide education and
          training to students on a wide spectrum of Fine Arts.
        </p>
        <p className="font-['spartan'] max-md:px-1 px-32 py-3">
          National Institute of Fine Arts is a place where the creative
          expression of individuals is nurtured and a sense of community
          flourishes. We seek to shape the global future of arts with an
          emphasis on excellence that allows its members to reach for the
          highest artistic standards as individuals while recognizing that the
          Art is one of the foundations of a healthy and creative society. This
          is a place where national and international leaders in the arts
          gather, teach, show and perform their work. The institute prides
          itself on its openness and on creating an environment that is safe,
          welcoming, and built on mutual respect.
        </p>
        <div className="font-['spartan'] max-md:px-1 font-semibold">
          National Institute of Fine Arts is a place where the creative
          expression of individuals is nurtured and a sense of community
          flourishes.
        </div>
        <button className="px-4 hover:cursor-pointer rounded-full radious-full h-10 w-32 my-6 text-white bg-gradient-to-r from-pink-800 to-purple-800">
          Read More
        </button>
      </div>
      {/* Section-Two */}
      <div className="w-full h-auto  bg-fixed bg-cover  text-white bg-[url('https://www.nifafinearts.com/images/appbg.jpg')]">
        <div className="w-full h-auto flex items-center max-md:flex-col justify-center max-md:px-2 px-20 py-4 bg-gradient-to-r from-black to-transparent">
          <div className="h-auto w-1/2 max-md:px-1 max-md:w-80 max-md:py-4 px-20 py-36">
            <div className="h-1/3 max-md:text-center">
              <div className="font-['spartan'] text-3xl font-black">
                Online Classes
              </div>
              <div className="font-['spartan'] py-2">
                Dear Students/Parents, Nifa presents its Learning App for your
                regular art practice in which we have added many amazing
                features Like: Step-by-step recorded demo videos prepared by
                your faculty members. Regular assessment of your practise
                through assignment section. Live class section from same app.
                Attendance, payment invoice, art news, announcements, important
                information and direct connect with the management team are some
                more features. So hurry up n join now to experience personalised
                coaching by experts sitting at your home.

                <div className="font-['spartan'] py-3">
                  We wish u Happy Learning. Stay Safe n Healthy.
                </div>
              </div>
              <button className="py-3 h-12 hover:cursor-pointer border-2 rounded-full font-['spartan'] radious-full w-32 my-2 text-white bg-gradient-to-r from-pink-800 to-purple-800">
                Read More
              </button>
              <br />
              <br />
              <h3 className="my-4 font-['spartan']">Download The App</h3>
              <div className="flex items-center gap-3 justify-between w-1/2">
                <img
                  className="w-40"
                  src="https://www.nifafinearts.com/images/gplay.png"
                  alt=""
                />
                <img
                  className="w-40"
                  src="https://www.nifafinearts.com/images/gplay.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <iframe
            className="border-8 max-md:h-48 max-md:m-8 max-md:border-4 max-md:w-80"
            width="680"
            height="410"
            src="https://www.youtube.com/embed/-9cJjaLXKqE"
            title="NIFA ( Best Art Institute )"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Section-Three : Course Program Container */}
      <div className="w-full h-auto  bg-cover bg-[url('https://www.nifafinearts.com/images/artboard2.png')]">
        <h3 className="font-['spartan'] font-black text-center text-4xl my-7 ">
          Our Courses
        </h3>
        <div className="h-auto flex max-md:px-9  flex-wrap px-40 py-10 gap-8">
          {ourCourses.map((data, index) => (
            <div key={index} className="">
              <div
                className="w-64 h-96 max-md:w-72 max-md:max-h-full flex flex-wrap justify-center relative rounded-xl bg-white shadow-[0_15px_25px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_35px_40px_-5px_rgba(0,0,0,0.3)] hover:scale-105 transition-all"
              >
                <img
                  style={{
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    verticalAlign: "middle",
                  }}
                  src={data.srcUrl}
                  alt="image"
                />
                <div className="text-center font-['spartan'] mt-2">
                  {data.title}
                </div>
                <button className=" h-10 hover:cursor-pointer rounded-full font-['spartan'] radious-full w-32 my-2 text-white bg-gradient-to-r from-pink-800 to-purple-800">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Section-Three : Students Work Container */}
      <StudentWork />
      {/* Section-Four : Student's Testimonial Container */}
      <div className="w-full h-full max-md:hidden relative bg-fixed bg-cover  text-white bg-[url('https://www.nifafinearts.com/images/student-talk.jpg')]">
        <h3 className="font-['spartan'] font-black text-center pt-12 text-4xl my-7 ">
          Student's Testimonial
        </h3>
        <div className="w-auto flex items-center justify-center flex-wrap gap-10 mt-20">
          {testimonials.map((data, id) => (
            <iframe
              key={id}
              width="350"
              height="250"
              style={{ border: "5px solid white" }}
              src={data.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
