import campusImg from "../assets/tkm-campus.jpg";
import CrowdLevel from "../components/CrowdLevel";


const Home = () => {
  return (
    <div className="px-6 md:px-16">
      {/* HEADING */}
      <h1 className="text-3xl font-bold my-6">
        Welcome to TKMCE Canteen
      </h1>
      <CrowdLevel />


      {/* COLLEGE IMAGE */}
      <div className="w-full overflow-hidden rounded-xl shadow-lg">
        <img
          src={campusImg}
          alt="TKM College Campus"
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* DESCRIPTION */}
      <p className="mt-6 text-gray-700 text-lg max-w-3xl">
        Order food easily from the TKM canteen without standing in long queues.
        Get live order status, digital tokens, and faster service.
      </p>
    </div>
  );
};

export default Home;
