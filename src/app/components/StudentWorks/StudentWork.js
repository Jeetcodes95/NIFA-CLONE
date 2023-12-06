import { useDynamicImport } from '@/app/dynamicImport';
import React, { useState, useEffect } from 'react';

const StudentWork = () => {
  const IS_STATIC = typeof window === "undefined";

  const { default: Masonry } = useDynamicImport(
    !IS_STATIC && import("masonry-layout")
  );
  const [masonry, setMasonry] = useState(undefined);

      const studentWorks = [
        {
          id: 1,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img1.jpg",
        },
        {
          id: 2,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img2.jpg",
        },
        {
          id: 3,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img3.jpg",
        },
        {
          id: 4,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img4.jpg",
        },
        {
          id: 5,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img5.JPG",
        },
        {
          id: 6,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img6.JPG",
        },
        {
          id: 7,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img7.jpg",
        },
        {
          id: 8,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img8.jpg",
        },
        {
          id: 9,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img9.jpg",
        },
        {
          id: 10,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img10.jpg",
        },
        {
          id: 11,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img11.jpg",
        },
        {
          id: 12,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img12.jpg",
        },
        {
          id: 13,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img13.jpg",
        },
        {
          id: 14,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img14.jpeg",
        },
        {
          id: 15,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img15.jpeg",
        },
        {
          id: 16,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img16.jpeg",
        },
        {
          id: 17,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img17.jpg",
        },
        {
          id: 18,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img18.jpeg",
        },
        {
          id: 19,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img19.jpg",
        },
        {
          id: 20,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img20.jpeg",
        },
        {
          id: 21,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img21.jpeg",
        },
        {
          id: 22,
          imgUrl: "https://www.nifafinearts.com/images/homegallery/img22.jpg",
        },
      ];

  useEffect(() => {
    if (Masonry) {
      setMasonry(
        new Masonry(".grid", {
          itemSelector: ".gridItem",
          gutter: 10,
        })
      );
    }
    

  }, [Masonry]);

  useEffect(() => {
    masonry?.layout();
  }, [masonry]);

  return (
    <>
      <div className="w-full h-auto ">
        <h3 className="font-['spartan'] font-black text-center text-4xl my-7 ">
          Students Work
        </h3>
        <div className="w-full p-28 max-md:px-8 h-auto">
          <ul className="max-md:px-10 grid grid-cols-4 max-sm:grid-cols-2 max-md:grid-cols-2 gap-4">
            {studentWorks.map((data, id) => (
              <li key={id} className="gridItem max-md:w-52 max-md:gap-4 w-72 m-1">
                <a href="#">
                  <img
                  className='h-max w-max'
                    style={{ borderRadius: "10px" }}
                    src={data.imgUrl}
                    alt="image"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};


export default StudentWork