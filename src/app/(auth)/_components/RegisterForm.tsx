// app/register/page.js
"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import Socials from "./Socials";
import { SubmitButton } from "./SubmitBtn";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { z } from "zod";
import { IsUserEmailExist, sendCode } from "../../../../server/action";
import { generateVerificationToken } from "@/utils/token";
import { registerSchema } from "../../../../validators/auth-validator";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [preEmail, setPreEmail] = useState("");
  const [preOtp, setPreOtp] = useState("");
  const [expires, setExpires] = useState<Date | null>();
  const [code, setCode] = useState(false);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      otp: "",
      role: ''
    },
  });

  const getCode = async () => {
    setCode(true);
    const email = form.getValues("email"); // Get the email value
    const username = form.getValues("username"); // Get the username value
    const checkUserEmailExist = await IsUserEmailExist(email);
    if (checkUserEmailExist) {
      setCode(false);
      return setError("Email already exist");
    }
    if (!email) {
      setError("Please enter your email first.");
      setCode(false);
      return;
    }
    setPreEmail(email);
    setError("");
    const { otp, expires } = await generateVerificationToken();

    await sendCode(email, otp);

    setPreOtp(otp);
    setExpires(expires);
  };

  const onSubmit = async (values: { username: string; email: string; password: string; otp: string; role:string }) => {
    setLoading(true); // Set loading to true
    const username = await values.username;
    const email = await values.email;
    const password = await values.password;
    const otp = await values.otp;
    const role = await values.role; 

    if (!username || !email || !password || !otp || !role) return setError("Filled all details");
    if (email !== preEmail) return setError("Email does not match");
    if (otp !== preOtp) return setError("OTP does not match");
    else {
      try {
        let res = await fetch("/api/auth/register", {
          method: "POST",
          body: JSON.stringify({ ...values, expires }),
        });
        let data = await res.json();
        if (res.ok) {
          setSuccess(data.message);
          setLoading(false); // Set loading to false
          redirect("/login");
        } else if (!res.ok) {
          setLoading(false); // Set loading to false
          setError(data.message);
        }
      } catch (error) {
        console.log("Error in sign up", error);
        setLoading(false); // Set loading to false
      }
    }
  };

  return (
    <div className="z-20 sm:w-[310px] w-[300px] ">
      <div className="flex items-center justify-center">
        <Link href={`/`}>
          <h2 className={` text-[38px] dark:text-neutral-800 text-neutral-200 `}>
            <span className="text-red-500">Blood</span>Radar
          </h2>
        </Link>
      </div>
      <p className="mt-5 text-sm opacity-60 text-center text-white">Only login via E-Mail and Google login is supported in your Region.</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 my-4"
          noValidate
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80 font-light">Username</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-xl h-[42px] border-zinc-700 border-[1.7px]"
                    placeholder="Your name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80 font-light">Email</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-xl h-[42px] border-zinc-700 border-[1.7px]"
                    placeholder="youremail@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80 font-light">Role</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex  space-x-5"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="BLOOD_DONER" />
                      </FormControl>
                      <FormLabel className="font-normal">Blood Donor</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="BLOOD_SEEKER" />
                      </FormControl>
                      <FormLabel className="font-normal">Blood Seeker</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80 font-light">Password</FormLabel>

                <FormControl>
                  <Input
                    className="rounded-xl h-[42px] border-zinc-700 border-[1.7px] tracking-[6px]"
                    type="password"
                    placeholder="@@@@@@"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between gap-4 !-mt-1">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-white/80 font-light">Otp</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-xl h-[42px] border-zinc-700 border-[1.7px] tracking-[6px] !overflow-hidden w-full"
                      type="text "
                      maxLength={6}
                      placeholder="######"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div
              onClick={code ? undefined : getCode}
              className={` cursor-pointer h-[42px] border-[1.7px] border-zinc-700 text-white/80 mt-5 rounded-xl text-sm inline-flex items-center justify-center whitespace-nowrap px-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-800 ${
                code ? "opacity-30 hover:!bg-zinc-700" : "border-zinc-700 "
              }`}
            >
              Send code
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2 mt-[5px] ">
                <RadioGroupItem
                  className=" rounded-sm border-zinc-700 border-[1.7px]"
                  value="default"
                  id="r1"
                />
              </div>
            </RadioGroup>

            <div className="text-sm text-neutral-500">
              I confirm that I have read and agree to the Azeorex's
              <a
                href="https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Terms of Use
              </a>{" "}
              &{" "}
              <a
                href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Privacy Policy
              </a>
              .
            </div>
          </div>
          <div className={`mb-4 ${error ? "text-red-500 text-[0.8rem] font-medium" : " text-emerald-500 text-[0.8rem] font-medium"} `}>{error ? error : success}</div>

          <SubmitButton
            className="bg-[#bebebe] border-x relative group/btn block w-full text-black rounded-[8px] h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] py-0 text-base hover:bg-white"
            disable_className="bg-[#bebebe]  border-x w-full text-black rounded-[8px] h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-base"
            loading={loading}
          >
            Sign up &rarr;
            <BottomGradient />
          </SubmitButton>
          <h4 className="text-blue-100/80 mt-4 text-center text-sm">
            Already have an acoount?{" "}
            <span className=" text-blue-600">
              <Link href={`login`}>Login</Link>
            </span>
          </h4>
        </form>
      </Form>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1.5px] w-full" />
      {/* <Socials /> */}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

export default RegisterForm;
