import React from "react";

//importing components
import AnchorButton from "../../components/anchorButton";
import Footer from "../../components/footer";
import FormContainer from "../../components/formContainer";

const SignupPage = () => {
  return (
    <div>
      <FormContainer formType="signup" />
      <Footer />
      <AnchorButton
        href="/"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translate(-50%)",
        }}
        label="Homepage"
      />
    </div>
  );
};

export default SignupPage;
