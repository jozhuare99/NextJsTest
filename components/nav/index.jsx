import StoreSwitcher from "../ui/storeSwitcher";

const Nav = async ({stores}) => {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <StoreSwitcher className={''} items={stores}/>
        <p>main Nav</p>
        <div className="flex items-center ml-auto space-x-4">
          <p>theme toggle</p>
          <button>toggle</button>
        </div>
      </div>
    </div>
  )
}

export default Nav;