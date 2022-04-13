import React from "react";
import useAuth from "../../Hooks/useAuth";

const Welcome = () => {
  const {user, logout} = useAuth()
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="aboutMe bg-white rounded p-4 mb-3">
            <h6 className="py-2 fs-5">About Me</h6>
            <span className="text-secondary">
              Hello my name is Tanya. I am a designer. My personal qualities are
              responsibility, as I bring everything to its logical conclusion,
              determination, never rest on my laurels, always open to change and
              something new. In my arsenal there are such programs as Adobe
              Photoshop, Illustrator, InDesign, Figma, also some Maya, 3ds Max
              ZBrush, Substance Painter, Marvelous Designer. 
            </span>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="bg-white rounded p-4 mb-3">
            <h6 className="py-2 fs-5">Emon Information</h6>
            <div className="row">
              <div className="col-md-6 text-dark">Name</div>
              <div className="col-md-6 text-secondary">Emon Ahmed</div>
            </div>
            <div className="row">
              <div className="col-md-6 text-dark">E-mail</div>
              <div className="col-md-6 text-secondary">
               {user.email}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-dark">
                What do you do
              </div>
              <div className="col-md-6 text-secondary">UI/UX Designer</div>
            </div>
            <div className="row">
              <div className="col-md-6 text-dark">Nationality</div>
              <div className="col-md-6 text-secondary">Bangladesh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
