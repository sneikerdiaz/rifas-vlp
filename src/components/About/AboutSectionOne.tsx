import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg
  viewBox="0 0 1024 1024"
  fill="#DC2626"
  height="41"
  width="40"
>
  <path d="M160 894c0 17.7 14.3 32 32 32h286V550H160v344zm386 32h286c17.7 0 32-14.3 32-32V550H546v376zm334-616H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v140h366V310h68v172h366V342c0-17.7-14.3-32-32-32zm-402-4h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70 70 31.4 70 70v70zm138 0h-70v-70c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70z" />
</svg>
);

const checkIcon2 = (
  <svg
  viewBox="0 0 640 512"
  fill="#FFAA33"
  height="41"
  width="40"
>
  <path d="M200.6 32C205 19.5 198.5 5.8 186 1.4S159.8 3.5 155.4 16l-10.7 30.2-9.9-29.8C130.6 3.8 117-3 104.4 1.2S85 19 89.2 31.6l8.3 25-27.4-20c-10.7-7.8-25.7-5.4-33.5 5.3s-5.4 25.7 5.3 33.5L70.2 96H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h152.6c-5.4-9.4-8.6-20.3-8.6-32V256c0-29.9 20.5-55 48.2-62 1.8-31 17.1-58.2 40.1-76.1C271.7 104.7 256.9 96 240 96h-22.2l28.3-20.6c10.7-7.8 13.1-22.8 5.3-33.5s-22.8-13.1-33.5-5.3l-25.4 18.5 8.1-23.1zm162.9 153.5l29.6 38.5H344c-13.3 0-24-10.7-24-24 0-13.1 10.8-24 24.2-24 7.6 0 14.7 3.5 19.3 9.5zM272 200c0 8.4 1.4 16.5 4.1 24H272c-26.5 0-48 21.5-48 48v80h192v-96h32v96h192v-80c0-26.5-21.5-48-48-48h-4.1c2.7-7.5 4.1-15.6 4.1-24 0-39.9-32.5-72-72.2-72-22.4 0-43.6 10.4-57.3 28.2L432 195.8l-30.5-39.6c-13.7-17.8-35-28.2-57.3-28.2-39.7 0-72.2 32.1-72.2 72zm-48 264c0 26.5 21.5 48 48 48h144V384H224v80zm224 48h144c26.5 0 48-21.5 48-48v-80H448v128zm96-312c0 13.3-10.7 24-24 24h-49.1l29.6-38.5c4.6-5.9 11.7-9.5 19.3-9.5 13.4 0 24.2 10.9 24.2 24z" />
</svg>

);

const AboutSectionOne = () => {
  const List = ({ text, head }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      <b>{head}</b>
      {text}
    </p>
  );

  const ListHeading = ({ text, head }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon2}
      </span>
      <b>{head}</b>
      {text}
    </p>
  );

  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="PREMIOS MAYORES"
                paragraph="Los premios que estabas esperando!"
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Primer premio</h3>
                    <ListHeading text="" head="Sorteo Triple A: Tiuna 4X4" />
                    <List text="1 Botella de Buchanan's" />
                    <List text="5 Cajas de Cerveza" />
                    <List text="1 Combo parrillero" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <Image
                      src="/images/about/premio1.png"
                      alt="about-image"
                      width={500}
                      height={500}
                      className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                    />
                    <Image
                      src="/images/about/premio1.png"
                      alt="about-image"
                      width={500}
                      height={500}
                      className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                    />                      
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Segundo premio</h3>
                    <ListHeading text="" head="Sorteo Triple B: Moto Bera 0 KM" />
                    <List text="1 Caroreña" />
                    <List text="3 Cajas de Cerveza" />
                    <List text="1 Combo parrillero" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <Image
                      src="/images/about/premio2.png"
                      alt="about-image"
                      width={500}
                      height={500}
                      className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                    />
                    <Image
                      src="/images/about/premio2.png"
                      alt="about-image"
                      width={500}
                      height={500}
                      className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                    />                      
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Tercer premio</h3>
                    <ListHeading text="" head="Sorteo Triple C: Combo de linea blanca" />
                    <List text="2 Cajas de Cerveza" />
                    <List text="1 Combo parrillero" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <Image
                      src="/images/about/premio3.png"
                      alt="about-image"
                      width={500}
                      height={500}
                      className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                    />
                    <Image
                      src="/images/about/premio3.png"
                      alt="about-image"
                      width={500}
                      height={500}
                      className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                    />                      
                  </div>


                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/regalos.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/regalos.png"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
