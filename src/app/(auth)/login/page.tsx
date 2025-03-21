import Wrapper from "@/components/layouts/Wrapper";
import React from "react";
import LoginForm from "../_components/LoginForm";

const page = () => {
  return (
    <Wrapper className="flex justify-center">
      <LoginForm/>
    </Wrapper>
  );
};

export default page;
