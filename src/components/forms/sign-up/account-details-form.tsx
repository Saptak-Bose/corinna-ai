import { USER_REGISTRATION_FORM } from "@/constants/forms";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import FormGenerator from "../form-generator";

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

export default function AccountDetailsForm({ errors, register }: Props) {
  return (
    <>
      <h2 className="font-bold text-gravel md:text-4xl">Account details</h2>
      <p className="text-iridium md:text-sm">Enter you email and password.</p>
      {USER_REGISTRATION_FORM.map((field) => (
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
