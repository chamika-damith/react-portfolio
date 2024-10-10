import { FaNode } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb, SiMysql } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

function Technologies() {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
                <div>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div>
                    <TbBrandNextjs className="text-7xl" />
                </div>
                <div>
                    <SiMongodb className="text-7xl text-green-800" />
                </div>
                <div>
                    <SiMysql  className="text-7xl text-blue-500" />
                </div>
                <div>
                    <FaNode className="text-7xl text-green-500" />
                </div>
            </div>
        </div>
    )
}

export default Technologies