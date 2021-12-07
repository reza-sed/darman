import Head from "next/head";
import { fetchDocs } from "../services/doctors";

export default function Home({ foundDocs }) {
  return (
    <div className="font-noto">
      <Head>
        <title>درمانکده</title>
      </Head>

      <main className="px-5 py-4 text-gray-600">
        <div className="text-xs text-right w-full">
          <span className="">درمانکده /</span>
          <span className="text-primary-300">متخصص اعصاب و روان</span>
        </div>
        <div className="md:grid md:grid-cols-2 gap-5 mt-1">
          <div className="mt-10">
            <h1 className="h1 mt-10">متخصص نوزادان</h1>
            <div className="mt-2">
              با بهترین پزشکان اعصاب و روان آشنا شوید، بیشتر درمورد اعصاب و روان
              بدانید، پاسخ سوال هایتان را پیدا کنید و مقاله های علمی و تخصصی
              اعصاب و روان را بخوانید.
            </div>
            <div className="mt-16 flex justify-around">
              <span className="flex flex-col items-center w-18 md:w-40">
                <svg
                  className="text-primary-400 w-5"
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
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span className="font-bold text-sm mt-3 mb-1 text-center">
                  انتخاب پزشک
                </span>
                <span className="text-xs text-center">
                  نظرات و تجربه سایر بیماران را بخوانید و پزشک منتخب خود را
                  انتخاب کنید
                </span>
              </span>
              <span className="flex flex-col items-center w-18 md:w-40">
                <svg
                  className="text-primary-400 w-5"
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
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
                <span className="font-bold text-sm mt-3 mb-1 text-center">
                  معالجه و درمان
                </span>
                <span className="text-xs text-center">
                  بصورت حضوری یا آنلاین (تصویری، صوتی و متنی) ویزیت شوید
                </span>
              </span>
              <span className="flex flex-col items-center w-18 md:w-40">
                <svg
                  className="text-primary-400 w-5"
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
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-bold text-sm mt-3 mb-1 text-center">
                  انتخاب پزشک
                </span>
                <span className="text-xs text-center">
                  درمانکده تا بهبودی کامل همراه شماست و کنارتان می ماند
                </span>
              </span>
            </div>
          </div>
          <div className="bg-primary-200"></div>
        </div>
        <div className="mt-10 rounded-md bg-gray-200 p-3">
          <div>{foundDocs.length} پزشک، با توجه به جستجو شما یافت شد.</div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const docsList = await fetchDocs();

  return {
    props: {
      foundDocs: docsList,
    },
  };
}
