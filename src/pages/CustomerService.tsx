import { AiOutlineRight } from "react-icons/ai";

function CustomerService() {
  return (
    <section className="bg-center bg-no-repeat bg-[url('https://www.deskera.com/blog/content/images/2021/06/Blog_customercare_1500x884-1.jpg')] bg w-screen bg h-screen bg-gray-400 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center pt-20">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Welcome to Customer Service
        </h1>
        <h2 className="mb-8 text-2xl font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          We'll Help You Find a Solution
        </h2>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Contact A Representative
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </a>
        </div>
        <h3 className="text-xl mt-10 font-normal text-gray-300">
          Get The Banking Services Help You Need With PayCircle Service. We'll
          Help You Find Answers To Your Questions Today!
        </h3>
        <div className="p-10 mt-5 h-90 w-50  px-4 mx-auto max-w-screen-xl text-left">
          <h2 className="text-3xl font-normal text-gray-300 m-20 ml-0 mb-10">
            Self-Service Actions:
          </h2>

          <ul className="text-md font-normal text-gray-300 flex flex-row gap-2 ">
            <li>
              Make a Payment
              <AiOutlineRight />
            </li>
            <li>
              Order Checks
              <AiOutlineRight />
            </li>
            <li>
              Manage Account Alerts
              <AiOutlineRight />
            </li>
            <li>
              Replace a Lost/Damaged Card
              <AiOutlineRight />
            </li>
            <li>
              Dispute a Charge
              <AiOutlineRight />
            </li>
            <li>
              Reset Username/Password
              <AiOutlineRight />
            </li>
            <li>
              Find Account/Routing Number
              <AiOutlineRight />
            </li>
            <li>
              Report Fraud
              <AiOutlineRight />
            </li>
            <li>
              Payment Support
              <AiOutlineRight />
            </li>
            <li>
              Search More Topics
              <AiOutlineRight />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CustomerService;
