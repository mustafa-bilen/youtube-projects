import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bgcontainer flex justify-center items-center">
      <div className="rounded-full h-[25rem] w-[25rem] flex justify-center items-center">
        <form className="flex flex-col gap-4" onSubmit={() => navigate("home")}>
          <img
            src="https://svgsilh.com/svg/2085075.svg"
            alt="img"
            width="200px"
            draggable="false"
            className="mx-auto"
          />
          <input
            type="text"
            placeholder="Your name"
            className="bg-black text-white p-2 rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Your password"
            className="bg-black text-white p-2 rounded-lg"
            required
          />
          <button className="rounded-lg bg-black text-white w-[5rem] mx-auto p-1">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
