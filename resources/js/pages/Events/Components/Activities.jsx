import img1 from "../../../assets/events/event_activites_1.png";
import img2 from "../../../assets/events/event_activities_2.png";
import img3 from "../../../assets/events/event_activites_3.png";
import img4 from "../../../assets/events/event_activites_4.png";


const Activities = () => {
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto py-18">
      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-12 ">
        <div className="lg:col-span-1">
          <h1 className="text-5xl text-slate-900 font-semibold mb-6">
            Last Events Activities
          </h1>
          <p className="text-slate-900">
            Lorem ipsum dolor sit amet consectetur. Malesuada orci molestie
            blandit quam risus. Et aliquam sed diam dui sem morbi ornare etiam.
            Vitae velit ipsum gravida etiam vel pretium nam aenean enim.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 mb-6">
            <div className="w-full lg:col-span-2 lg:row-span-2">
             
                <div className="w-full h-72">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={img1}
                    alt=""
                  />
                </div>
          
            </div>
            <div className="w-full lg:col-span-1 lg:row-span-1"></div>
            <div className="w-full lg:col-span-1 lg:row-span-1 ">
              <div className="w-full h-36">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={img2}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6">
            <div className="w-full lg:col-span-1 lg:row-span-1">
              <div className="w-full h-36">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={img3}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full lg:col-span-2 lg:row-span-2">
              <div className="w-full h-72">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={img4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
