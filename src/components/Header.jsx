import DropdownMenu from "./DropdownMenu";

export default function Header() {
  return (
    <header className="flex items-center px-10 py-8 md:px-20 ">
      <div className="flex items-center justify-between bg-stone-50 w-full max-w-6xl mx-auto">
        <h3 className="text-black text-[24px] font-extrabold">
          weekly.
        </h3>
        <DropdownMenu />
      </div>
    </header>
  );
}
