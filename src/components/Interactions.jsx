import { useState } from "react";
import { PanelTopOpen } from 'lucide-react';



function Interactions({ emailThreads }) {

  if (!emailThreads || emailThreads.length === 0) {
    return (
      <div className="w-full min-h-[360px] dark:bg-gray-800 text-white p-4">
        <div>No Emails available</div>
      </div>
    );
  }

  const [toggle, setToggle] = useState('close')
  // Function to handle toggle action
  const handleToggle = (status) => {
    setToggle(status);
  };


  const emailLen = emailThreads[0].emails.length
  const subject = emailThreads[0].subject;
  const emails = emailThreads[0].emails

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className='w-full min-h-[360px] '>
      <div className="min-h-[360px] relative">
        {emailLen === 1 ? (
          <div className="flex flex-col dark:bg-gray-800 text-white p-2 rounded-lg gap-2 h-full overflow-hidden">
            <div className="w-full flex-col  ">
              <div className="flex">
                <h1 className=" mr-2 font-semibold">Subject:</h1><span>{subject}</span>
              </div>
              <div className="flex">
                <h1 className=" mr-2 font-semibold">Date:</h1><span>{currentDate}</span>
              </div>
            </div>
            <div className="min-h-[300px] bg-slate-600 rounded-lg p-3">
              {emails[0].content}
            </div>

          </div>
        ) : (
          <div>
            <div className="flex flex-col dark:bg-gray-800 text-white p-2 rounded-lg gap-2">
              <div className="w-full flex-col  ">
                <div className="flex text-md">
                  <h1 className=" mr-2  font-semibold">Subject:</h1>
                  <span className=" ">{subject}</span>
                </div>
                <div className="flex text-md">
                  <h1 className=" mr-2 font-semibold">Date:</h1><span>{currentDate}</span>
                </div>
              </div>
              <span onClick={() => handleToggle(toggle === "open" ? "close" : "open")}
                className="w-full md:w-1/6 px-4 py-2 text-sm font-medium text-blue-600 bg-transparent border border-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ease-in-out flex items-center justify-center"
              >
                <PanelTopOpen />
              </span>
            </div>
            <div className={toggle === "open" ? "flex flex-col w-full min-h-[300px] gap-2 absolute  top-0 z-50 text-white" : "hidden"}>
              <div className="min-h-[200px]">
                {emails.map((email, index) => (
                  <div key={index} className=" bg-slate-600 rounded-lg p-3 w-full mb-2 min-h-[170px]">
                    <div className="flex flex-col space-y-1 mb-3 ">
                      <span>{currentDate}</span>
                      <span>{currentTime}</span>
                    </div>
                    <p>{email.content}</p>
                  </div>
                ))}
              </div>
              <div>
                <button onClick={() => handleToggle("close")}
                  className="w-full  px-4 py-2 text-sm font-medium text-blue-600 bg-transparent border border-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ease-in-out flex items-center justify-center"
                >
                  close
                </button>
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Interactions