import OTPInput from "@/components/otp";
import { Dispatch, SetStateAction } from "react";

type Props = {
  onOTP: string;
  setOnOTP: Dispatch<SetStateAction<string>>;
};

export default function OTPForm({ onOTP, setOnOTP }: Props) {
  return (
    <>
      <h2 className="font-bold text-gravel md:text-4xl">Enter OTP</h2>
      <p className="text-iridium md:text-sm">
        Enter the one-time-password that was sent to your email.
      </p>
      <div className="w-full justify-center flex py-5">
        <OTPInput otp={onOTP} setOtp={setOnOTP} />
      </div>
    </>
  );
}
