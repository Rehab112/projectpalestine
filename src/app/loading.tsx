// Loading page

// local
import { Loader } from '@/app/_lib/modules'

export default function Loading() {

    return (
        <div className="layer-screen center">
            <Loader type={2} />
        </div>
    )

}