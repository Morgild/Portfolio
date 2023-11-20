import { BulletPoint } from "./Bulletpoint"
export const Expcard = (props) => {
    // const exp=[]
    return (
        <div className="flex md:flex-row gap-4 flex-col w-full p-8 rounded-s-xl bg-white justify-between items-start">
            <div className="flex md:w-1/4 w-full items-start justify-start max-w-[206px] order-0"><img src={props.logo}/></div>
            <div className="md:w-1/2 w-full order-2 gap-4">
                <h3 className="w-full text-xl font-semibold leading-7 text-[#111827]">{props.position}</h3>
                <div className="w-full flex flex-col gap-1">
                  {/* {props.exp.map((item) => <BulletPoint/>)} */}
                  {props.jd}
                </div>
            </div>
            <div className="flex md:justify-end justify-start leading-6 md:w-1/4 w-full text-base font-normal text-[#374151] order-1 md:order-3">{props.duration}</div>
        </div>
    )}