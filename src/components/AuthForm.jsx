import React from "react";
import image from "../assets/welcome.png";
import { Form, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const AuthForm = ({ header, button, form, method }) => {
  return (
    <section className="h-screen relative text-deepgreen">
      {/* this is small screen  */}
      <div className="h-full lg:hidden">
        <img src={image} alt="image" className="h-full object-cover" />

        <div className="absolute bottom-0 bg-greendark border-t-4 border-deepgreen w-full rounded-t-2xl p-4">
          <div className="w-fit mb-8">
            <Link to={"/welcome"}>
              <FaArrowLeft className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <div className="text-3xl font-semibold my-4">{header}</div>

            <Form method={method} className="flex flex-col py-4">
              <div className="my-2">
                <label htmlFor="name" className="text-xl block font-semibold">
                  UserName
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-2 border-deepgreen p-2 rounded-lg bg-white2 w-full outline-none"
                />
              </div>

              {form === "issignup" && (
                <div className="my-2">
                  <label
                    htmlFor="email"
                    className="text-xl block font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="border-2 border-deepgreen p-2 rounded-lg bg-white2 w-full outline-none"
                  />
                </div>
              )}
              <div className="my-2">
                <label
                  htmlFor="password"
                  className="text-xl block font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border-2 border-deepgreen p-2 rounded-lg bg-white2 w-full outline-none"
                />
              </div>

              <div className="my-4">
                <div>
                  {form === "issignup" && (
                    <div>
                      <input
                        type="checkbox"
                        name="term&conditions"
                        id="term&conditions"
                        className="mr-2"
                      />
                      <label htmlFor="term&conditions">Term & conditions</label>
                    </div>
                  )}

                  {form === "isLogin" && (
                    <Link className="float-end">Forget Password ?</Link>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-cream font-semibold mt-4 px-4 py-2 rounded-lg border-2 border-deepgreen block"
                >
                  {button}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      {/* this is small screen  */}

      {/* this is large screen */}
      <div className="hidden lg:flex lg:h-full text-night">
        <img
          src={image}
          alt="image"
          className="w-2/3 object-cover object-left"
        />

        <div className="bg-greendark rounded-l-2xl border-l-4 w-full p-4 px-8">
          <Link to={"/welcome"}>
            <FaArrowLeft className="w-6 h-6" />
          </Link>

          <div className="h-[80%] flex flex-col justify-center">
            <div className="text-3xl font-semibold my-4">{header}</div>

            <Form method={method} className="flex flex-col py-4">
              <div className="my-2">
                <label htmlFor="name" className="text-xl block font-semibold">
                  UserName
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 p-2 rounded-lg bg-white2 w-full outline-none"
                />
              </div>

              {form === "issignup" && (
                <div className="my-2">
                  <label
                    htmlFor="email"
                    className="text-xl block font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="border-2 p-2 rounded-lg bg-white2 w-full outline-none"
                  />
                </div>
              )}
              <div className="my-2">
                <label
                  htmlFor="password"
                  className="text-xl block font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="border-2 p-2 rounded-lg bg-white2 w-full outline-none"
                />
              </div>

              <div className="my-4">
                <div>
                  {form === "issignup" && (
                    <div>
                      <input
                        type="checkbox"
                        name="term&conditions"
                        className="mr-2"
                      />
                      <label htmlFor="term&conditions">Term & conditions</label>
                    </div>
                  )}
                  {form === "isLogin" && (
                    <Link className="float-end hover:text-cream">
                      Forget Password ?
                    </Link>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-cream font-semibold mt-4 px-4 py-2 rounded-lg border-2 border-deepgreen block cursor-pointer"
                >
                  {button}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      {/* this is large screen */}
    </section>
  );
};

export default AuthForm;
