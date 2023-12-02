import MainNav from "../mainNav";
import StoreSwitcher from "../ui/storeSwitcher";
import ThemeToggle from "../ui/themeToggle";

const Nav = async ({stores}) => {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <StoreSwitcher className={''} items={stores}/>
        <MainNav className="mx-6" />
        <div className="flex items-center ml-auto space-x-4">
          <ThemeToggle />
          <button>toggle</button>
        </div>
      </div>
    </div>
  )
}

export default Nav;