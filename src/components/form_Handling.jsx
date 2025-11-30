import { useState } from "react";

const Formhandling = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    mobile: "",
    review: "",
    syllabus: "",
    technologies: "",
    pratical: "",
    infrastructure: "",
  });

  const [personal, setPersonal] = useState({
    pname: "",
    pemail: "",
    pmobile: "",
  });

  const changedata = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const personalChanged = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  const dataclick = (e) => {
    e.preventDefault();
    localStorage.setItem("usersdata", JSON.stringify(data));
    alert("Institute Details Saved!");
    setData({
      name: "",
      address: "",
      mobile: "",
      review: "",
      syllabus: "",
      technologies: "",
      pratical: "",
      infrastructure: "",
    });
  };

  const personalClick = (e) => {
    e.preventDefault();
    localStorage.setItem("personaldata", JSON.stringify(personal));
    alert("Personal Details Saved!");
    setPersonal({ pname: "", pemail: "", pmobile: "" });
  };

  return (
    <>
      {/* INSTITUTE FORM */}
      <div className="bg-gradient-to-r from-purple-300 to-fuchsia-300 p-10 flex justify-center items-center">
        <div className="bg-white shadow-2xl w-[650px] p-8 rounded-2xl border border-purple-200">
          <h1 className="text-center text-2xl font-bold text-purple-700 mb-6">Institute Details</h1>

          <form className="grid grid-cols-2 items-center gap-6">

            <label className="font-semibold text-gray-700">Institute Name:</label>
            <input
              type="text"
              name="name"
              value={data.name}
              className="bg-gray-900 text-white p-2 rounded-lg w-full"
              placeholder="Enter Institute Name"
              onChange={changedata}
            />

            <label className="font-semibold text-gray-700">Address:</label>
            <textarea
              name="address"
              value={data.address}
              className="bg-gray-900 text-white p-2 rounded-lg w-full"
              placeholder="Enter Address"
              onChange={changedata}
            ></textarea>

            <label className="font-semibold text-gray-700">Mobile No:</label>
            <input
              type="number"
              name="mobile"
              value={data.mobile}
              className="bg-gray-900 text-white p-2 rounded-lg w-full"
              placeholder="Enter 10 Digit Number"
              onChange={changedata}
            />

            <label className="font-semibold text-gray-700">Review:</label>
            <textarea
              name="review"
              value={data.review}
              className="bg-gray-900 text-white p-2 rounded-lg w-full"
              placeholder="Enter Review"
              onChange={changedata}
            ></textarea>

            <label className="font-semibold text-gray-700">Syllabus Updated?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="syllabus" value="Yes" checked={data.syllabus === "Yes"} onChange={changedata}/> Yes</label>
              <label><input type="radio" name="syllabus" value="No" checked={data.syllabus === "No"} onChange={changedata}/> No</label>
            </div>

            <label className="font-semibold text-gray-700">Recent Technologies?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="technologies" value="Yes" checked={data.technologies === "Yes"} onChange={changedata}/> Yes</label>
              <label><input type="radio" name="technologies" value="No" checked={data.technologies === "No"} onChange={changedata}/> No</label>
            </div>

            <label className="font-semibold text-gray-700">Practical Training?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="pratical" value="Yes" checked={data.pratical === "Yes"} onChange={changedata}/> Yes</label>
              <label><input type="radio" name="pratical" value="No" checked={data.pratical === "No"} onChange={changedata}/> No</label>
            </div>

            <label className="font-semibold text-gray-700">Infrastructure:</label>
            <textarea
              name="infrastructure"
              value={data.infrastructure}
              className="bg-gray-900 text-white p-2 rounded-lg w-full"
              placeholder="Describe Infrastructure"
              onChange={changedata}
            ></textarea>

            <div className="col-span-2 flex justify-center mt-4">
              <button className="bg-purple-700 hover:bg-purple-900 transition text-white px-8 py-2 rounded-full shadow-lg" onClick={dataclick}>
                Save Institute
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* PERSONAL FORM */}
      <div className="bg-gradient-to-r from-pink-200 to-red-300 mt-5 p-10">
        <h1 className="text-center text-2xl font-bold text-red-700 mb-5">Personal Details</h1>

        <div className="bg-white shadow-xl p-6 rounded-xl w-[520px] mx-auto flex flex-col justify-center items-center gap-4">
          <form className="grid grid-cols-2 gap-5 items-center w-full">

            <label className="font-semibold text-gray-700">Your Name:</label>
            <input
              type="text"
              name="pname"
              value={personal.pname}
              className="bg-gray-100 p-2 rounded-lg border w-full"
              placeholder="Enter Name"
              onChange={personalChanged}
            />

            <label className="font-semibold text-gray-700">Email ID:</label>
            <input
              type="email"
              name="pemail"
              value={personal.pemail}
              className="bg-gray-100 p-2 rounded-lg border w-full"
              placeholder="Enter Email"
              onChange={personalChanged}
            />

            <label className="font-semibold text-gray-700">Mobile No:</label>
            <input
              type="number"
              name="pmobile"
              value={personal.pmobile}
              className="bg-gray-100 p-2 rounded-lg border w-full"
              placeholder="Enter Mobile No"
              onChange={personalChanged}
            />

            <div className="col-span-2 flex justify-center mt-3">
              <button className="bg-red-600 hover:bg-red-800 transition text-white px-8 py-2 rounded-full shadow-lg" onClick={personalClick}>
                Save Personal
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default Formhandling;
