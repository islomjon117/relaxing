import {
  Airport,
  Building,
  Destination,
  Leaf,
  MapMini,
  Payment,
  Sent,
} from "../assets/icons/icons";

function Steps() {
  return (
    <div className="container mx-auto max-w-5xl mx-auto  bg-white py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-4">
      Keyingi sayohatlarni tez va oson bron qiling
      </h2>
      <p className="text-center text-2xl text-gray-600 mb-8">Oson va Tez</p>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col w-auto lg:w-[50%] space-y-12">
          {/* Step 1 */}
          <div className="flex flex-row items-center text-center gap-8">
            <Destination />
            <div className="flex flex-col text-left">
              <h3 className="font-semibold text-base mb-2">
                Choose Destination
              </h3>
              <p className="text-base text-gray-500">
                Manzilni tanlash va oldindan bron qilish qulayliklari
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex flex-row items-center text-center gap-8">
            <Payment />
            <div className="flex flex-col text-left">
              <h3 className="font-semibold text-base mb-2">Make Payment</h3>
              <p className="text-base text-gray-500">
                 online va ofline tolov qilish qulayliklari 
              </p>
            </div>
          </div>
        </div>
        {/* Image Card */}
        <div className="mt-8 w-[370px] h-[400px] flex-end">
          <div className="relative bg-white rounded-lg shadow-md px-5 pt-5">
            <img
              className="rounded-t-lg w-full h-auto object-cover"
              src="https://sun9-57.userapi.com/impg/ivuCX-BbJRmD8QtjgfwFJI8TMftZluK1NPAR-w/p6TgmLCBJuE.jpg?size=1100x733&quality=96&sign=6b284298e0e3d989e6de60dbe96350ab&c_uniq_tag=k5iAbqv1oLEWBrll__EnCDhjDjNBAfNRnZtVNAk5MyA&type=album"
              alt="Trip To Greece"
            />
            <div className="p-4">
              <h4 className="font-medium text-lg mb-1">qulay transport</h4>
             
              <div className="flex flex-row gap-4 justify-start my-4">
                <Leaf />
                <MapMini />
                <Sent />
              </div>
              <div className="flex items-center text-gray-500">
                <Building />
                <p>200 + people going</p>
              </div>
            </div>
            {/* Ongoing */}
            <div className="hidden lg:flex absolute flex flex-row gap-4 top-40 right-[-100px] bg-white p-4 rounded-lg shadow-md">
              <div>
                <img
                  src="https://sun9-57.userapi.com/impg/ivuCX-BbJRmD8QtjgfwFJI8TMftZluK1NPAR-w/p6TgmLCBJuE.jpg?size=1100x733&quality=96&sign=6b284298e0e3d989e6de60dbe96350ab&c_uniq_tag=k5iAbqv1oLEWBrll__EnCDhjDjNBAfNRnZtVNAk5MyA&type=album"
                  alt="rome"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-600">Ongoing</p>
                <h5 className="text-sm font-bold mb-2">Trip to tashkent</h5>
                <div className="flex flex-row gap-2">
                  <p className=" text-sm text-[#8A79DF]">100%</p>
                  <p className="text-sm">completed</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div
                    className="bg-[#8A79DF] h-1 rounded-full"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
