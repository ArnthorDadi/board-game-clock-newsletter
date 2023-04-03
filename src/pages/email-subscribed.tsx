import { type NextPage } from "next";

const SuccessPage: NextPage = () => {
  return (
    <div
      className={"flex flex-1 flex-col items-center justify-center gap-14 px-4"}
    >
      <div className={'flex flex-col gap-4'}>
      <h1 className="text-center text-5xl font-bold text-white sm:text-[5rem]">
        Successfully subscribed
      </h1>
      <p className={"text-center text-2xl text-white"}>
        ...to the <span className={"text-primary"}>board game clock</span>{" "}
        newsletter!
      </p>
      </div>
      <p className={'text-center text-lg text-gray-300 max-w-xl'}>
        We're excited to keep you up-to-date with all the latest news, updates,
        and releases related to board games. Stay tuned for our first email, and
        don't hesitate to reach out to us if you have any questions or feedback.
      </p>
    </div>
  );
};

export default SuccessPage;
