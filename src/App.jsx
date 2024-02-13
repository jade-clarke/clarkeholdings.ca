import "./App.css";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import companyLogo from "./assets/clarkeholdings.svg";

const companyUrl = "https://clarkeholdings.ca/";
const companyName = "Clarke Holdings Inc.";
const inquiryForm = "https://forms.gle/XnjxmPh2ohEY4tsRA";

const brandHeadline = "Empowering Artists and Investors Alike";
const brandDescription = "We specialize in digital asset investment and provide free hosting to support small creators. Join us in building a vibrant digital landscape.";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800 flex flex-col min-h-screen overflow-hidden">
      <div className="flex-grow">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href={ companyUrl } className="-m-1.5 p-1.5">
                <span className="sr-only">{ companyName }</span>
                <img className="h-8 w-auto" src={ companyLogo } alt={ companyName } />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href={inquiryForm}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
              >
                Inquire <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">{ companyName }</span>
                  <img
                    className="h-8 w-auto"
                    src={ companyLogo }
                    alt={ companyName }
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="py-6">
                    <a
                      href={inquiryForm}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <main className="relative isolate px-6 pt-14 lg:px-8 flex-grow">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                { brandHeadline }
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                { brandDescription }
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href={ inquiryForm }
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
                >
                  Inquire Now <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          </div>
        </main>
      </div>
      <footer className="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 py-4">
        <div className="container mx-auto text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a href={ companyUrl } className="hover:underline">
            { companyName }
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
