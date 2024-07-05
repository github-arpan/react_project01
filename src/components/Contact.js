const Contact = () => {
  return (
    <div className="h-screen">
      <h1 className="font-bold text-center text-xl p-2 m- 4 mt-28">
        Contact Us
      </h1>
      <form className="ml-10 mt-10 ">
        <input
          type="text"
          placeholder="Enter your Name"
          className="p-2 m-2 border border-black block w-1/4 "
        />
        <textarea
          type="text"
          rows={5}
          placeholder="Enter your message"
          className="p-2 m-2 w-1/4 e border border-black block text"
        />
        <button className="p-2 m-2 border border-black block bg-green-700 text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
