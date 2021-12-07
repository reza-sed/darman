import React from "react";
import ConsultancyForm from "../components/consultancy-form";

export default function DoctorCard({
  name,
  levelname,
  fieldname,
  rank,
  comment,
  areaName,
  address,
  voice,
  voip,
  video,
  availableTime,
  commentsCount,
}) {
  return (
    <div className="grid grid-cols-5 gap-2 p-5 my-5 border border-primary-300 rounded shadow-lg h-52">
      <div className="col-span-1">
        <img
          className="h-20 w-20 overflow-hidden rounded-full border border-primary-300 p-1"
          src="/images/doctor.jpg"
          alt="doctor"
        />
      </div>
      <div className="flex flex-col col-span-2 justify-between">
        <div>
          <span className="font-bold text-gray-900">{name}</span>
          <span className=" text-xs block">{`${levelname} ${fieldname}`}</span>
        </div>
        <div>
          <div className="bg-gray-200 rounded w-11 flex items-center justify-around px-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-accent"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
            <span className="font-bold">{rank}</span>
          </div>
        </div>
        <div className="text-xs">{comment}</div>
      </div>
      <div className="col-span-2">
        <div className="flex justify-between">
          <span className="text-primary-300 text-xs">{areaName}</span>
          <span className="bg-gray-200 text-gray-400 rounded text-xs w-32 flex items-center justify-center">
            فاصله تا مطب 12KM
          </span>
        </div>
        <div className="bg-primary-100 rounded p-2 mt-2">
          <div className="flex justify-between items-center my-1">
            <span className="flex items-center text-primary-300 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                />
              </svg>
              ویزیت ها
            </span>
            <span>
              <ConsultancyForm voice={voice} voip={voip} video={video} />
            </span>
          </div>
          <div className="flex justify-between items-center my-1">
            <span className="flex items-center text-primary-300 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              تا اولین نوبت آزاد
            </span>
            <span className="text-xs">{availableTime}</span>
          </div>
          <div className="flex justify-between items-center my-1">
            <span className="flex items-center text-primary-300 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              {} نظر
            </span>
            <span className="text-xs">86% رضایت</span>
          </div>
        </div>
        <div className="my-2">
          <button className="bg-primary-300 text-white text-center rounded p-1 w-full">
            مشاهده و دریافت نوبت
          </button>
        </div>
      </div>
    </div>
  );
}
