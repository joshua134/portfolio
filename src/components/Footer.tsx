import { ReactElement } from "react";

export const Footer:React.FC = (): ReactElement =>{
    return <footer className="py-3">
        <p className="font-serif text-sm">
            &copy; {new Date().getFullYear()} &nbsp;&nbsp; JTech. All Rights Reserved.
        </p>
    </footer>;
};