import { BulletPoint } from "./Bulletpoint"
export const Expcard = (props) => {
    return (
        <div className="flex w-full p-8 rounded-s-xl bg-white justify-between items-start">
            <div className="flex w-1/4 items-start justify-start max-w-[206px] "><img src={props.logo}/></div>
            <div className="w-1/2">
                <h3 className="w-full text-xl font-semibold leading-7 text-[#111827]">{props.position}</h3>
                <div className="w-full flex flex-col gap-1">
                   {props.jd} 
                </div>
            </div>
            <div className="flex justify-end leading-6 w-1/4 text-base font-normal text-[#374151]">{props.duration}</div>
        </div>
    )}