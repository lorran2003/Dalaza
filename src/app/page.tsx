import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firstBanner from "../../public/bannerOne.png";
import secondBanner from "../../public/bannerTwo.png";
import buyWpp from "../../public/image.png";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//array test
const arrayTest: number[] = new Array(4).fill(0);

export default function Home() {
  return (
    <div className="p-5">

      <Header />

      <main className="flex flex-col gap-5 py-5">

        <div>
          <Image
            src={firstBanner}
            alt="banner"
            className="rounded"
          />
        </div>

        <div className="flex justify-between">

          <h1
            className="
          flex items-center gap-2
          before:block before:bg-[#CA9D37] before:w-4 before:h-4 before:rounded-full"
          >
            Nossos produtos
          </h1>

          <button
            type="button"
            aria-label="botão ver todos"
            className="flex justify-center items-center gap-2 bg-zinc-50 rounded p-2 shadow"
          >

            <span>Ver todos</span>

            <div className="bg-[#CA9D37] rounded-lg p-1">

              <FontAwesomeIcon icon={faArrowRight} color="#fff" width={20} />

            </div>

          </button>


        </div>

        <div className="grid grid-cols-2 gap-5">

          {
            arrayTest.map((product, index) =>
              <div
                key={index}
                className="bg-zinc-50 shadow p-2 rounded"
              >

                <div className="grid grid-cols-2 gap-5" >

                  {
                    arrayTest.map((product, index) =>
                      <div
                        key={index}
                        className="bg-blue-700 h-20 w-20 rounded"
                      >

                      </div>)
                  }

                </div>

                <div className="flex justify-between items-center pt-2">

                  <h1>
                    Categoria
                  </h1>

                  <div className="bg-zinc-800/80 p-1 rounded-xl text-center">
                    <span>100</span>
                  </div>

                </div>

              </div>
            )
          }
        </div>

        <div>
          <Image
            src={secondBanner}
            alt="banner"
            className="rounded"
          />
        </div>

        <button
          type="button"
          aria-label="botão mandar mensagem"
          className="relative flex justify-center items-center"
        >

          <Image
            src={buyWpp}
            alt="banner"
            className="rounded"
          />

          <div
            className="absolute bottom-0 bg-[#CA9D37] rounded p-0.5 text-zinc-50"
          >
            Compre agora
          </div>

        </button>

      </main >

      <Footer />

    </div >
  );
}
