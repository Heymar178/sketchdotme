import React from "react";

export const Wireframe = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[1935px] relative">
        <img
          className="absolute w-[145px] h-48 top-[90px] left-[1177px]"
          alt="Image"
          src="/img/image-8.png"
        />

        <img
          className="top-[366px] left-[41px] absolute w-[600px] h-0.5"
          alt="Line"
          src="/img/line-2.svg"
        />

        <img
          className="top-[1092px] left-[41px] absolute w-[600px] h-0.5"
          alt="Line"
          src="/img/line-3.svg"
        />

        <img
          className="top-[366px] left-[793px] absolute w-[600px] h-0.5"
          alt="Line"
          src="/img/line-2.svg"
        />

        <div className="absolute w-[249px] h-[59px] top-[385px] left-[41px] [font-family:'Cabin_Sketch',Helvetica] font-bold text-[#1d1d1b] text-[40px] text-center tracking-[-1.20px] leading-10">
          How to Use
        </div>

        <div className="absolute w-[286px] h-[106px] top-[396px] left-[745px]">
          <div className="absolute w-[249px] h-[59px] top-0 left-[37px] [font-family:'Cabin_Sketch',Helvetica] font-bold text-[#1d1d1b] text-[40px] text-center tracking-[-1.20px] leading-10">
            Release Notes
          </div>

          <div className="absolute w-[249px] h-[59px] top-[47px] left-0 [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-3xl text-center tracking-[-0.90px] leading-[30px]">
            How It’ll Work
          </div>
        </div>

        <div className="absolute w-[249px] h-[59px] top-[1112px] left-[49px] [font-family:'Cabin_Sketch',Helvetica] font-bold text-[#1d1d1b] text-[40px] text-center tracking-[-1.20px] leading-10">
          EXAMPLE
        </div>

        <div className="absolute w-[105px] h-[29px] top-[502px] left-[774px] [font-family:'ABeeZee',Helvetica] font-normal text-[#1d1d1b] text-xl text-center tracking-[-0.60px] leading-5">
          V0.1.2.0
        </div>

        <div className="absolute w-[105px] h-[29px] top-[974px] left-[782px] [font-family:'ABeeZee',Helvetica] font-normal text-[#1d1d1b] text-xl text-center tracking-[-0.60px] leading-5">
          V0.1.3.0
        </div>

        <p className="absolute w-[534px] h-[59px] top-[531px] left-[757px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          DETECT TAGS: Monitor TikTok for when a user tags your account in a
          comment or caption.
        </p>

        <p className="absolute w-[577px] h-[59px] top-[628px] left-[774px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          PROCESS THE REQUEST: When a tag is detected, extract relevant user
          information (their username or video context) for the drawing
        </p>

        <p className="absolute w-[577px] h-[59px] top-[1041px] left-[757px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          Tag Detection Improvements: Fixed an issue where the system
          occasionally missed tags in TikTok comments.
        </p>

        <p className="absolute w-[497px] h-[59px] top-[1129px] left-[783px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          Faster Drawing Delivery: Resolved a delay in processing and sending
          portraits to users.
        </p>

        <p className="absolute w-[535px] h-[59px] top-[1246px] left-[783px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          Caption Analysis Errors: Addressed a bug where captions with emojis or
          special characters caused errors in context recognition
        </p>

        <p className="absolute w-[509px] h-[59px] top-[701px] left-[782px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          Queue the request for the AI system to generate the portrait.
        </p>

        <p className="absolute w-[495px] h-[59px] top-[789px] left-[782px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          GENERATE THE DRAWING: Use a generative AI model, such as Stable
          Diffusion, DALL·E, or a custom-trained neural network, to create the
          portrait.
        </p>

        <p className="absolute w-[534px] h-[59px] top-[886px] left-[767px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          Include a predefined art style or customization options in the
          generation process.
        </p>

        <p className="absolute w-[432px] h-[25px] top-[460px] -left-3.5 [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px] whitespace-nowrap">
          tag @sketchdotme on a tiktok post
        </p>

        <img
          className="absolute w-[280px] h-[280px] top-8 left-[34px] object-cover"
          alt="M"
          src="/img/m-g45ang-400x400-2.png"
        />

        <div className="absolute w-[583px] h-[550px] top-[485px] left-[41px]">
          <p className="absolute w-[583px] h-[98px] top-0 left-0 [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
            Tag me in a comment or post and ask me to draw you something
          </p>

          <div className="absolute w-[234px] h-[98px] top-14 left-0 [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
            I&#39;ll reply with a&nbsp;&nbsp;image
          </div>

          <img
            className="absolute w-[280px] h-[405px] top-[145px] left-[150px]"
            alt="Image"
            src="/img/image-9.png"
          />
        </div>

        <img
          className="absolute w-[572px] h-[552px] top-[1343px] left-[777px]"
          alt="Image"
          src="/img/image-11.png"
        />

        <img
          className="absolute w-[708px] h-[357px] top-[5px] left-[349px]"
          alt="Image"
          src="/img/image-17.png"
        />

        <img
          className="absolute w-[436px] h-[680px] top-[1172px] left-[74px]"
          alt="Image"
          src="/img/image-18.png"
        />
      </div>
    </div>
  );
};
