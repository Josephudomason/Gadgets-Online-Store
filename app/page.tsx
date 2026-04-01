import { FaPhone } from "react-icons/fa";
import { NavBar } from "./nav";
import Footer from "./footer";


export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="bg-amber-100 w-full h-30">
        {/* picture */}
      </div>

      <div className="flex justify-between items-center -mt-4  mb-10">
        <div className="flex flex-col bg-amber-200">
          <div className="flex justify-between w-full gap-5">
            <p>shop by category</p>
            <p className="text-violet-600">see more</p>
          </div>
          <div className="flex justify-between">
            <button>
              <FaPhone />
            </button>

            <button>
              <FaPhone />
            </button>

            <button>
              <FaPhone />
            </button>

            <button>
              <FaPhone />
            </button>

            <button>
              <FaPhone />
            </button>

            <button>
              <FaPhone />
            </button>

            <button>
              <FaPhone />
            </button>
          </div>
        </div>



        <div className="flex flex-col bg-amber-200">
          <div className="flex justify-between w-full gap-5">
            <p>shop by brand</p>
            <p className="text-violet-600">see more</p>
          </div>
          <div className="flex justify-between">
            <button>
              <FaPhone />
            </button>

            <button>
              <FaPhone />
            </button>

            <button>
              <FaPhone />
            </button>

            <button>
              <FaPhone />
            </button>

            <button>
              <FaPhone />
            </button>

            <button>
              <FaPhone />
            </button>

            <button>
              <FaPhone />
            </button>
          </div>
        </div>
      </div>


      <div className="bg-amber-100 w-full h-30 mb-10">
        {/* advert picture */}
      </div>




      <div>
        <div className="flex justify-between">
          <h1>Top selling items</h1>
          <h1 className="text-violet-600">see more</h1>
        </div>

        <div className="w-full h-50 bg-amber-200 mb-15">
          {/*gadgets*/}
        </div>
      </div>


      <section>
        <div className="w-full h-50 bg-violet-200 ">
          {/* advert picture */}
        </div>
      </section>


      {/* footer */}

      <Footer />

    </div>
  );
}
