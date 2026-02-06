const BentoGrid = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 text-slate-900">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Passionate developer crafting performant, user-friendly web
          experiences with modern Typescript UI/UX and scalable architecture.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid auto-rows-[150px] gap-4 rounded-[2.5rem] bg-slate-50 p-4 text-sm text-slate-900 shadow-[0_30px_60px_rgba(15,23,42,0.10)] md:auto-rows-[190px] md:p-6 lg:grid-cols-4">
        {/* 100% badge */}
        <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white text-lg font-semibold lg:col-span-1">
          <div className="flex h-24 w-32 items-center justify-center rounded-full border border-slate-200 shadow-inner">
            <span>100%</span>
          </div>
        </div>

        {/* Emoji card */}
        <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white text-5xl lg:col-span-1">
          <div className="flex gap-4">
            <span>🧠</span>
            <span>😈</span>
          </div>
        </div>

        {/* Spotify-like card */}
        <div className="flex rounded-3xl border border-slate-900/80 bg-slate-900 text-xs text-slate-100 lg:col-span-2 lg:row-span-2">
          <div className="flex w-full flex-col justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-slate-700" />
              <div>
                <p className="text-[11px] text-slate-300">My energy ..</p>
                <p className="text-[11px] text-slate-400">Always coding playlist</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-1 w-full rounded-full bg-slate-700">
                <div className="h-1 w-1/3 rounded-full bg-slate-100" />
              </div>
              <ul className="space-y-1 text-[11px]">
                <li className="flex justify-between">
                  <span>Focus mode</span>
                  <span>03:38</span>
                </li>
                <li className="flex justify-between">
                  <span>Night coding</span>
                  <span>03:08</span>
                </li>
                <li className="flex justify-between">
                  <span>Shipping features</span>
                  <span>02:19</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* About text */}
        <div className="rounded-3xl border border-slate-200 bg-white p-4 text-xs leading-relaxed md:text-sm lg:col-span-1 lg:row-span-2">
          <p>
            As a young and passionate developer, I am eager to learn and explore new
            knowledge and technologies to continuously expand my skill set. Challenge
            me, and I&apos;ll turn it into an opportunity to grow and deliver more.
          </p>
        </div>

        {/* Frontend Developer badge */}
        <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white text-center text-lg font-semibold italic lg:col-span-1">
          <div>
            <p>Frontend</p>
            <p className="mt-1">Developer</p>
          </div>
        </div>

        {/* Tech stack title */}
        <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-4 lg:col-span-2">
          <p className="text-lg font-semibold">
            Building modern web experiences with ↴
          </p>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {["Next.js", "React", "WordPress", "Bootstrap", "Tailwind"].map(
              (tech) => (
                <div
                  key={tech}
                  className="flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 py-3 text-xs font-medium"
                >
                  {tech}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Map style card */}
        <div className="rounded-3xl border border-slate-200 bg-slate-100/80 lg:col-span-2">
          <div className="h-full w-full rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.08),_transparent_60%)] opacity-80" />
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

