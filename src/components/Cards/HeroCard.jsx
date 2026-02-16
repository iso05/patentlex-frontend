import { BsLightningCharge } from "react-icons/bs";
import {  IoTimeOutline } from "react-icons/io5";
function HeroCard() {
  return (
    <>
      <div className="lg:w-1/2 w-full bg-white rounded-3xl p-4 relative z-20">
        <div className="h-full border-2 border-[#D1AD84] border-dashed w-full  rounded-xl p-6">
          <div className="flex  flex-col gap-4 ">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl">
              Горячая линия по оказанию юридической помощи онлайн
            </h3>
            <p className="text-lg leading-relaxed">
              Профессиональная помощь доступна круглосуточно – заявки
              обрабатываются в любое время дня и ночи. Обращаясь к специалистам
              «100 Юристов», вы можете рассчитывать на прозрачные, понятные
              условия сотрудничества
            </p>
            <div className="w-full flex justify-center">
              <button className="cursor-pointer bg-[#350000] text-white px-5 py-3 rounded-lg">
                Задать вопрос юристу
              </button>
            </div>

            <div className="block md:hidden">
              <div className="flex flex-wrap h-full items-center relative z-20 container mx-auto py-3  ">
                <div className="w-1/2 flex gap-1.5 items-center ">
                  <IoTimeOutline color="#33836E" size={25} />
                  <span>Круглосуточно</span>
                </div>
                <div className="w-1/2 flex gap-1.5 items-center pl-4">
                  <BsLightningCharge color="#33836E" size={25} />
                  <span>Быстро</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroCard;
