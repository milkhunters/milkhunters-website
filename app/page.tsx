import Image from 'next/image';
import teamImg from '@/public/team.jpg';

export default function Home() {
  return (
    <div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <section className="container h-auto md:h-screen flex flex-col justify-start items-center md:mt-32">
        <h1 className="scroll-m-20 text-4xl mt-24 md:mt-0 sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-extrabold tracking-tight h-auto text-center break-words">
          Разрабатываем современные инструменты для{' '}
          <span className="text-primary border-b-4 border-primary">людей</span>
        </h1>
        <h2 className="mb-24 md:mb-0 mt-12 text-xl md:text-2xl text-center font-semibold text-gray-500 w-full md:w-1/2">
          #охотимся_за_молоком
        </h2>
      </section>

      <section
        className="bg-zinc-950 h-min-screen text-white tracking-wide dark:bg-[#020818] dark:border-t-2 dark:border-b-2 border-stone-50"
        id="about"
      >
        <div className="container flex flex-col md:flex-row gap-12 py-24">
          <div className="w-full md:w-1/2">
            <p className="text-3xl md:text-6xl leading-snug font-md">
              <span className="text-primary font-bold text-4xl md:text-6xl">milkhunters —</span>
              динамичная и амбициозная IT-команда, объединённая общей страстью к разработке
              программного обеспечения и инновациям в области технологий.
            </p>
          </div>
          <Image
            src={teamImg}
            alt="team"
            width={0}
            height={0}
            className="w-full md:w-1/2 h-full rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}
