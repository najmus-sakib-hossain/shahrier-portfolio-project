import cyberSecurityImg from "../../../assets/technology/cyber_security_image.png";
import frame from "../../../assets/technology/frame.svg";

const CyberSecurity = () => {
  return (
    <div className="bg-[#2E5AFF] py-18">
      <div className="w-11/12 lg:w-9/12 mx-auto text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
          <div>
            <h1 className="text-5xl font-semibold mb-8">
              Cyber ​​security skills
            </h1>

            <p className="text-white mb-8">
              Lorem ipsum dolor sit amet consectetur.
            </p>

            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur. Viverra interdum at
              elementum adipiscing placerat dignissim sagittis. Morbi donec
              etiam cursus nunc odio non eu eu. Ultricies nulla at neque tortor
              aliquet sit. Sed urna convallis donec nullam tellus posuere amet.
              Nisi ac nunc sit augue massa massa sollicitudin aliquam.
            </p>
          </div>

          <div>
            <div className="relative z-10">
              <img src={cyberSecurityImg} alt="" />
              <div className="absolute hidden lg:block -top-8 -right-8 -z-10">
                <img src={frame} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
