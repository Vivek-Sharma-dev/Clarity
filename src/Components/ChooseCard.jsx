const ChooseCard = ({ title, desc, number, bottomText, icon }) => {
  return (
    <div className="text-center shadow-[0_0_0px_.3px_rgba(255,255,255,.2)]/40 hover:shadow-[0_0_0px_.5px_var(--secondary-color)] rounded-2xl p-10 bg-(--nav-bg) transition-all duration-300">
      <div className="flex flex-col gap-5 items-center border-b py-5 border-gray-400">
        <span className="p-5 rounded-2xl bg-(--secondary-color) shadow-[0_0_0px_10px_var(--secondary-color)]/40">
          {icon}
        </span>
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="text-gray-400 font-medium">{desc}</p>
      </div>
      <div className="mt-5">
        <span className="text-2xl lg:text-3xl text-(--secondary-color) font-bold">
          {number}
        </span>{" "}
        <br />
        <span className="text-gray-400 font-medium">{bottomText}</span>
      </div>
    </div>
  );
};

export default ChooseCard;
