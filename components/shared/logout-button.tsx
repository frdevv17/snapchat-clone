import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

const LogoutButton = () => {
    return (
        <form>
            <Button className='bg-black text-white rounded-full p-3 text-xs md:text-sm'>
                <LogOut className='cursor-pointer' />
            </Button>
        </form>
    );
};
export default LogoutButton;