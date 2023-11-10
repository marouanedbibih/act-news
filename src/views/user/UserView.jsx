import React from "react";

function UserView() {
  return (
    <div className="w-[253.33px] h-[330px] bg-gr pr-6 pb-6 flex-col justify-start items-start gap-5 inline-flex">
      <img
        className="w-[110px] h-[110px] relative rounded-[100px]"
        src="https://via.placeholder.com/110x110"
      />
      <div className="self-stretch h-44 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch h-[140px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch h-[51px] flex-col justify-start items-start flex">
            <div className="self-stretch text-neutral-800 text-lg font-medium font-['Roboto'] leading-[27px]">
              Ryan Samuel
            </div>
            <div className="self-stretch text-neutral-800 text-base font-semibold font-['Roboto'] leading-normal">
              Co-founder
            </div>
          </div>
          <div className="self-stretch text-slate-400 text-base font-normal font-['Roboto'] leading-7">
            And I love you like Kanye loves Kanye. We need to restart the human
            foundation.
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="w-5 h-5 justify-center items-center flex">
            <img className="w-5 h-5" src="https://via.placeholder.com/20x20" />
          </div>
          <div className="w-5 h-5 justify-center items-center flex" />
          <div className="w-5 h-5 relative" />
        </div>
      </div>
    </div>
  );
}

export default UserView;
