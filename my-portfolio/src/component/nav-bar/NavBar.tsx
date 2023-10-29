export default function NavBar() {
  return (
    <>
      <div className="flex w-full bg-emerald-500">
        <div className="w-[50%] bg-white p-6 flex flex-col justify-center pl-24">
          <h1 className="text-3xl">Hi , I am Laiquraheman</h1>
          <h2 className="text-lg">I am FullStack developer</h2>
          <div>
            <span className="p-1">F</span> <span className="p-1">G</span>
            <span className="p-1">I</span> <span className="p-1">L</span>
          </div>
        </div>
        <div className="w-2/4 bg-black text-white pt-20 p-12">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6pmAdgwx1XiUqMKpR4ITd9U4nx7rXJIshUfdAjmGbokndwc09WOgx0xjB8iOghw0b84&usqp=CAU"
            className="h-48"
          />
        </div>
      </div>
    </>
  );
}
