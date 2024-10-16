"use client";

import { USER_LOGIN_FORM } from "@/constants/forms";
import { useFormContext } from "react-hook-form";
import FormGenerator from "../form-generator";

type Props = {};

export default function LoginForm({}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <h2 className="font-bold text-gravel md:text-4xl">Login</h2>
      <p className="text-iridium md:text-sm">
        You will receive a one-time-password.
      </p>
      {USER_LOGIN_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </>
  );
}
