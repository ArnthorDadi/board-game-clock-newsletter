import { type NextPage } from "next";

const VerificationEmailSent: NextPage = () => {
  return (
    <div>
      <h1>Email has been sent!</h1>
      <p>
        If you do not receive a verification email, please check your spam
        folder or contact us for assistance.
      </p>
    </div>
  );
};

export default VerificationEmailSent;
