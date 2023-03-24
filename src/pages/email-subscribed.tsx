import { type NextPage } from "next";

const SuccessPage: NextPage = () => {
  return (
    <div className={"flex flex-1 flex-col items-center justify-center gap-4 px-4"}>
      <h1 className="text-5xl font-bold text-white sm:text-[5rem] text-center">
        Successfully subscribed
      </h1>
      <p className={"text-2xl text-white text-center"}>
        ...to the{" "}
        <span className={"text-primary"}>board game clock</span>{" "}
        newsletter!
      </p>
    </div>
  );
};

export default SuccessPage;
