import React from "react";
import ArticlesContainer from "../../components/articlesContainer";

//importing components
import Navbar from "../../components/navbar/index";
import AdContainer from "../../components/adContainer/index";

//importing images
import misthoLogo from "../../assets/img/mistho-logo.png";
import Footer from "../../components/footer";

const Homepage = (props) => {
  return (
    <div>
      {document.documentElement.clientWidth > 480 && (
        <AdContainer adImg={misthoLogo} />
      )}

      <Navbar loggedIn={props.loggedIn} userEmail={props.userEmail} />
      <ArticlesContainer articles={props.articles} />
      <Footer />
    </div>
  );
};

export default Homepage;
