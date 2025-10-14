import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";


const Signintosee = () => {

    const { status, data: session } = useSession();
    const loa574 = useRef(null);
    useEffect(() => {
        loa574.current = toast.loading('checking authentication');
    }, []);
    useEffect(() => {

        if (status !== 'loading') {
            toast.dismiss(loa574.current);
        }
        if (status === 'unauthenticated') {
            toast.error('Sign in to proceed furthur')
        }
    }, [status]);

    return (
        <div>
            {status === 'unauthenticated' &&
                <div className="p-4">
                    <label htmlFor="name" className="block text-lg font-bold mb-2 text-center p-4 border-2 rounded-lg">Signin to Proceed furthur..!</label>
                </div>
            }
        </div>
    )
}



export default Signintosee;